# 製品版へのアップグレード

体験版から製品版に切り替える手順です。体験版と製品版は **同時に入れられません**。

## VCC / ALCOM の場合

1. BOOTH で製品版を購入し、ダウンロードした **「VCC_ALCOM で導入.txt」** に書かれたページを開きます。
2. ページの **VCC / ALCOM に追加** ボタンで、製品版のリポジトリを追加します。
3. プロジェクトの管理画面で **Avatar Texture Auto Adjuster** を追加します。
   - 体験版は自動で外れます。

## .unitypackage の場合

1. Unity を開き、`Assets/Cigarless/AvatarTextureAutoAdjuster` フォルダを削除します。
   - `Assets/Cigarless/ATAA_Data` は削除しないでください。
2. 製品版の `.unitypackage` をインポートします。

## 体験版で作ったデータ

体験版の FaceMap・調整はメモリ上にだけあり、Unity を閉じると消えます。製品版でもう一度作ってください。
製品版では `Assets/Cigarless/ATAA_Data/` に保存されるので、次回からはそのまま使えます。
