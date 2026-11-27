# 安全性・オフライン動作

- **完全オフライン・エディタ専用**: 外部通信やテレメトリ送信は一切行いません。また、エディタ専用のためアバターのビルド・アップロードには一切含まれません。
- **UI・ファイル操作はソースコード同梱**: ウィンドウ UI・ファイル読み書き・アセット操作・マテリアル適用などはすべて読める C# ソースコード（`Editor/*.cs`）で同梱しています。
- **計算コアのみ DLL 化（穏健な名前難読化）**: 独自に開発した計算アルゴリズム保護のため、純粋な計算コア（`Core/AvatarTextureAutoAdjuster.Core.dll`）のみを DLL 化（ASCII 名のシンプルな難読化）しています。ウイルス対策ソフトの誤検知や不審な挙動の原因になりやすいパッカー・暗号化・`SuppressIldasm` 属性は使用していません。
- **外部 API 参照の検証可能**: コア DLL はネットワーク・ファイル I/O・プロセス起動・`UnityEditor` API 等を一切参照していません（リリースビルド時に .NET メタデータ解析で自動検査しています）。

## コア DLL の外部 API 参照（許可リストと確認手順）

`Core/AvatarTextureAutoAdjuster.Core.dll` が参照してよい外部 API は、次の範囲だけに限定しています。

- **許可している参照**:
  - `UnityEngine.CoreModule` の純粋な数学・色型のみ（`Vector2` / `Vector3` / `Vector3Int` / `Rect` / `Color` / `Color32` / `Mathf` 等）
  - `netstandard` の純粋計算・コレクション・並列計算・経過時間計測（`Stopwatch`）・コンパイラ生成の非実行メタデータ属性のみ
- **参照していないもの（自動検査で禁止）**:
  - 外部通信（`System.Net*`、`UnityEngine.Networking*`、`Application.OpenURL`）
  - ファイル・OS・プロセス（`System.IO.File*` / `Directory*` / `FileStream`、`System.Diagnostics.Process*`、`System.Environment*`）
  - 動的実行リフレクション（`Type.GetType`、`Assembly.Load*`、`MethodInfo.Invoke`、`Reflection.Emit`）
  - ネイティブ呼び出し（`DllImport` / `ImplMap`、`Marshal`、`NativeLibrary`）
  - エディタ・端末情報・永続化（`UnityEditor*`、`UnityEngine.Application*`、`UnityEngine.SystemInfo*`、`UnityEngine.PlayerPrefs*`）

VCC で導入した場合、下のパスは次のように読み替えてください。
- 製品版: `Packages/com.cigarless.avatar-texture-auto-adjuster/Core/AvatarTextureAutoAdjuster.Core.dll`
- 体験版: `Packages/com.cigarless.avatar-texture-auto-adjuster.trial/Core/AvatarTextureAutoAdjuster.Core.dll`

### 方法 1: Windows 標準の PowerShell で依存アセンブリを確認する（ツール導入・逆コンパイル不要）

Unity プロジェクトのルートで PowerShell を開き、次を実行します。

```powershell
$asm = [System.Reflection.Assembly]::ReflectionOnlyLoadFrom(
    (Resolve-Path "Assets/Cigarless/AvatarTextureAutoAdjuster/Core/AvatarTextureAutoAdjuster.Core.dll").Path
)
$asm.GetReferencedAssemblies() | ForEach-Object { $_.Name }
```

出力が `netstandard` と `UnityEngine.CoreModule` の 2 つだけであることを確認できます。

### 方法 2: PowerShell 7（`pwsh`）で外部型参照・P/Invoke 一覧まで確認する（逆コンパイル不要）

PowerShell 7 が入っている環境では、.NET 標準の `System.Reflection.Metadata` で `AssemblyRef` / `TypeRef` / `ImplMap`（`DllImport`）をそのまま一覧できます。

```powershell
$dll = (Resolve-Path "Assets/Cigarless/AvatarTextureAutoAdjuster/Core/AvatarTextureAutoAdjuster.Core.dll").Path
$fs = [System.IO.File]::OpenRead($dll)
$pe = [System.Reflection.PortableExecutable.PEReader]::new($fs)
$md = $pe.GetMetadataReader()
"=== AssemblyRefs ==="
$md.AssemblyReferences | ForEach-Object { $md.GetString($md.GetAssemblyReference($_).Name) } | Sort-Object
"=== TypeRefs ==="
$md.TypeReferences | ForEach-Object {
    $tr = $md.GetTypeReference($_)
    "$($md.GetString($tr.Namespace)).$($md.GetString($tr.Name))"
} | Sort-Object -Unique
"=== ImplMaps (DllImport) ==="
$md.MethodDefinitions | ForEach-Object {
    $imp = $md.GetMethodDefinition($_).GetImport()
    if (-not $imp.Module.IsNil) { "$($md.GetString($md.GetModuleReference($imp.Module).Name))|$($md.GetString($imp.Name))" }
}
$pe.Dispose(); $fs.Dispose()
```

### 方法 3: ILSpy で参照を確認する

1. ILSpy で `Core/AvatarTextureAutoAdjuster.Core.dll` を開きます。
2. アセンブリ直下の **References** を開き、`netstandard` と `UnityEngine.CoreModule` のみであることを確認します。

（※ [利用規約](/terms) の「4. プログラムの扱いと安全性確認」の通り、安全性確認のための依存アセンブリ・外部 API 参照メタデータの確認は許可されています。計算アルゴリズムの解析・抽出・再現は禁止です。）
