# 導入方法

作業の前に、Unity プロジェクトのバックアップを取っておくことをおすすめします。

## VCC / ALCOM で入れる（おすすめ）

1. [VCC / ALCOM に追加](/add) で、リポジトリを追加します。
2. VCC / ALCOM で対象のプロジェクトを開き（VCC は **Manage Project**）、次のパッケージを追加します。
   - 製品版: **Avatar Texture Auto Adjuster**
   - 体験版: **Avatar Texture Auto Adjuster（体験版）**
3. Unity でプロジェクトを開き、メニューの **Cigarless > ATAA** からウィンドウが開けば完了です。

![Cigarless > ATAA メニュー](/img/01_ataa_menu.png){.shot}

以後の更新も VCC / ALCOM から行えます（[更新・入れ直し](/guide/update)）。

## .unitypackage で入れる

1. BOOTH からダウンロードした `.unitypackage` を Unity プロジェクトにインポートします。
2. `Assets/Cigarless/AvatarTextureAutoAdjuster/` に入ります（フォルダは移動しても動作します）。
3. メニューの **Cigarless > ATAA** からウィンドウを開きます。

::: warning どちらか一方だけにしてください
同じプロジェクトに VCC / ALCOM 版と `.unitypackage` 版を両方入れないでください。`.unitypackage` 版が入っているプロジェクトに VCC / ALCOM から追加すると、古いプログラム部分は自動で外れます（作ったデータは残ります）。
:::

## 作ったデータの保存先（製品版）

ツールが作るもの・出力するものは、すべて `Assets/Cigarless/ATAA_Data/` に保存されます。
ツール本体とは別の場所なので、ツールを入れ直す・更新するときも消えません。

| 場所 | 中身 |
|---|---|
| `ATAA_Data/FaceMaps/` | 作成・自動生成した FaceMap（`.json`） |
| `ATAA_Data/FaceMaps/Adjustments/` | 組み合わせごとの微調整 |
| `ATAA_Data/FaceMaps/Generated/<アバター>/<メイク>/` | メイク適用で書き出したテクスチャと複製マテリアル |
| `ATAA_Data/Makeups/` | プロジェクトの外から読み込んだメイク画像のコピー |

::: danger `Assets/Cigarless/ATAA_Data` は削除しないでください
適用したアバターは `Generated/` のテクスチャ・マテリアルを使っています。消すとアバターの見た目が元に戻らなくなります。
:::

次は [画面の見方と基本の流れ](/usage/flow) へ。
