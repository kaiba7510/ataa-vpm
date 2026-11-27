import { defineConfig } from 'vitepress'

// 体験版リスティング（公開してよい URL）。製品版の URL はここに書かない。
export const TRIAL_LISTING = 'https://kaiba7510.github.io/ataa-vpm/index.json'
const BOOTH = 'https://cigarless.booth.pm/'

export default defineConfig({
  lang: 'ja-JP',
  title: 'Avatar Texture Auto Adjuster',
  description: 'アバターの顔テクスチャ（メイク）を別のアバターの顔に合わせて自動で調整する Unity エディター拡張の説明書',
  base: '/ataa-vpm/',
  cleanUrls: false,
  lastUpdated: true,
  // リスティング（index.json）と zip はワークフローでサイトの出力に並べる
  srcExclude: ['README.md'],
  head: [['meta', { name: 'theme-color', content: '#3b82f6' }]],
  themeConfig: {
    siteTitle: 'ATAA',
    nav: [
      { text: 'VCC / ALCOM に追加', link: '/add' },
      { text: '体験版と製品版', link: '/guide/editions' },
      { text: '導入', link: '/guide/install' },
      { text: '使い方', link: '/usage/flow' },
      { text: '困ったとき', link: '/support/faq' },
      { text: '更新履歴', link: '/changelog' },
      { text: 'BOOTH', link: BOOTH },
    ],
    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: 'ATAA とは', link: '/guide/what' },
          { text: 'VCC / ALCOM に追加', link: '/add' },
          { text: '体験版と製品版の違い', link: '/guide/editions' },
          { text: '導入方法', link: '/guide/install' },
          { text: '製品版へのアップグレード', link: '/guide/upgrade' },
          { text: '更新・入れ直し', link: '/guide/update' },
        ],
      },
      {
        text: '使い方',
        items: [
          { text: '画面の見方と基本の流れ', link: '/usage/flow' },
          { text: '対象アバターを準備する', link: '/usage/avatar' },
          { text: 'メイク元を選ぶ', link: '/usage/makeup' },
          { text: 'プレビューで確認する', link: '/usage/preview' },
          { text: 'フィッティングを微調整する', link: '/usage/fitting' },
          { text: 'メイクを適用する・元に戻す', link: '/usage/apply' },
          { text: 'FaceMap エディター', link: '/usage/facemap-editor' },
        ],
      },
      {
        text: 'サポート',
        items: [
          { text: '画面に出るメッセージ', link: '/support/messages' },
          { text: '困ったとき（FAQ）', link: '/support/faq' },
          { text: '安全性・オフライン動作', link: '/support/safety' },
          { text: 'お問い合わせ・不具合報告', link: '/support/contact' },
          { text: '更新履歴', link: '/changelog' },
          { text: '利用規約', link: '/terms' },
        ],
      },
    ],
    socialLinks: [{ icon: 'x', link: 'https://x.com/Cigarless_VR' }],
    outline: { level: [2, 3], label: 'このページの内容' },
    docFooter: { prev: '前のページ', next: '次のページ' },
    lastUpdated: { text: '最終更新' },
    darkModeSwitchLabel: 'ダークモード',
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: 'ページの先頭へ',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '検索', buttonAriaLabel: '検索' },
          modal: {
            noResultsText: '見つかりませんでした',
            resetButtonTitle: 'クリア',
            footer: { selectText: '選択', navigateText: '移動', closeText: '閉じる' },
          },
        },
      },
    },
    footer: {
      message: '<a href="/ataa-vpm/terms.html">利用規約</a> ・ お問い合わせは <a href="https://cigarless.booth.pm/">BOOTH</a> のメッセージ、または X の DM から',
      copyright: '© Cigarless',
    },
  },
})
