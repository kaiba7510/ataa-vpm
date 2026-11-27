# Avatar Texture Auto Adjuster 説明書 / 体験版 VPM リスティング

**好きなメイクをあの子にも。**
お気に入りのメイクテクスチャを、別のアバターへ自動フィッティング＆合成できる Unity ツール「Avatar Texture Auto Adjuster（ATAA）」の説明書サイトと、体験版の VPM リスティングです。

- 説明書: https://kaiba7510.github.io/ataa-vpm/
- 製品版の購入: https://cigarless.booth.pm/

## 体験版を VCC / ALCOM に入れる

[VCC / ALCOM に追加](https://kaiba7510.github.io/ataa-vpm/add.html) のページのボタンを押すか、VCC / ALCOM のリポジトリ追加画面に次の URL を貼り付けてください。

```
https://kaiba7510.github.io/ataa-vpm/index.json
```

追加したら、プロジェクトの管理画面で「Avatar Texture Auto Adjuster（体験版）」を追加します。
製品版は BOOTH の購入者向けに別の URL で配っています。製品版を入れると体験版は自動で外れます。

## このリポジトリの中身

| 場所 | 中身 |
|---|---|
| `index.json`・`*.zip` | 体験版の VPM リスティングと配布用 zip（リリース用スクリプトが追加する） |
| `docs/` | 説明書サイト（VitePress） |
| `.github/workflows/pages.yml` | `main` に push すると、サイトをビルドして `index.json` と zip と一緒に GitHub Pages へ公開する |

ツールのソースはありません。

### 説明書を手元で確かめる

```
npm ci
npm run docs:dev
```

`docs/public/img/` には加工（切り抜き・縮小・透かし）済みの画像だけを置き、加工前のスクリーンショットは置きません。
