# 記事追加手順

## Claude Codeへの指示文テンプレート

新しい記事を追加するとき、Claude Codeに以下のように指示するだけ：

```
「[カテゴリ名] の比較記事を日英で作って。キーワードは[キーワード]。」
```

例：
- 「スマートフォン の比較記事を日英で作って。キーワードはコスパ最強 Android。」
- 「ノートPC の比較記事を日英で作って。キーワードは軽量 薄型 ビジネス向け。」

## Claude Codeがやること（自動）

1. 日本語記事HTMLを `ja/review/[slug].html` に生成
2. 英語記事HTMLを `en/review/[slug].html` に生成
3. 対応カテゴリページ（`ja/category/` と `en/category/`）に記事リンクを追加
4. `sitemap.xml` に新URLを追加
5. GitHubにコミット＆push → 自動公開

## Amazonアソシエイトタグの設定

`assets/affiliate.js` の以下の部分を登録後に差し替える：

```js
const AFFILIATE_TAGS = {
  ja: 'YOUR-JP-TAG-20',   // ← Amazonアソシエイト（日本）のタグIDに変更
  en: 'YOUR-US-TAG-20'    // ← Amazon Associates USのタグIDに変更
};
```

## Google Search Console への登録

1. https://search.google.com/search-console にアクセス
2. 「プロパティを追加」→ URLプレフィックスで `https://soumaru0331.github.io/afi-site/` を入力
3. HTMLタグによる確認を選択 → `index.html` の `<head>` 内に貼り付け
4. sitemap.xml を送信：`https://soumaru0331.github.io/afi-site/sitemap.xml`

## 記事量産のペース目安

- 週3〜5記事を目標に
- 最初の20記事でGoogleインデックス登録される
- 50記事到達で月数千円の収益が見込める
