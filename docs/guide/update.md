# 更新・入れ直し

## 更新する

- **VCC / ALCOM 版**: プロジェクトの管理画面で、新しいバージョンを選んで更新します。
- **`.unitypackage` 版**: 新しい版を同じ場所にインポートし直すと上書き更新できます。

作った FaceMap・調整・出力したファイルは `Assets/Cigarless/ATAA_Data/` にあるので、更新しても残ります。
変更点は [更新履歴](/changelog) をご覧ください。

## .unitypackage 版から VCC / ALCOM 版へ移る

VCC / ALCOM から追加すると、古いツールフォルダの中のプログラム部分（`Core/` `Editor/` など）が自動で削除され、`Packages/` の下へ移ります。
`Assets/Cigarless/ATAA_Data/` や古いフォルダの中の `FaceMaps` は消えずに引き継がれます。

## 入れ直す

- **VCC / ALCOM 版**: 管理画面でパッケージを一度削除し、もう一度追加します。
- **`.unitypackage` 版**: `Assets/Cigarless/AvatarTextureAutoAdjuster` **だけ** を削除してから、インポートし直します。

::: warning
`Assets/Cigarless/` ごと削除すると、作ったデータ（`ATAA_Data`）も消えます。
:::

## 古い版からの移行

- **1.3.5 までの版**: データを `Assets/ATAA_Data/` に保存していました。製品版を開いたときに `Assets/Cigarless/ATAA_Data/` へ自動で移し、ダイアログでお知らせします。参照も保たれるので、適用済みのアバターはそのまま使えます。
  - 移動先に同じ名前のファイルがあるものは上書きせずに古い側に残し、ダイアログと Console に一覧を出します。
- **旧オープンβ版など（`Editor/AvatarTextureAutoAdjuster.Editor.dll` が入っていた版）**: そのまま上書きするとコンパイルエラーになります。`Assets/Cigarless/AvatarTextureAutoAdjuster` を一度削除してから、新しい版を入れてください。
