# Vivliostyle.js における CSS Paged Media の実装  {.cover}

2021-04-10 \
Shinyu Murakami \
Vivliostyle Foundation

# 目次 {.toc role="doc-toc"}

1. [CSS組版エンジン Vivliostyle.js Core](#js-core)
    1. [Vivliostyle.js のアイデア　since 2014](#vivliostyle-idea)
    2. [CSS組版に必要なCSS仕様は？](#css-specs)
    3. [再開発途上 CSS Paged Media サポート](#dev-css-paged-media)
2. [CSS Paged Media を使いこなそう！](#use-css-paged-media)
    1. [Named strings—柱を本文の見出しから](#named-strings)
    2. [Named pages—名前付きのページルール](#named-pages)
    3. [Nth page selector: nth()](#nth-page)
3. [ページメディア用CSS仕様サポート状況まとめ](#specs-supported)
    1. [CSS Paged Media Level 3](#css-page)
    2. [CSS Generated Content for Paged Media (GCPM)](#css-gcpm)
    3. [CSS Fragmentation Level 3](#css-break)
    4. [CSS Page Floats](#css-page-floats)
    5. [より詳しくは Vivliostyle ドキュメント→「サポートする CSS 機能」へ](#documents)


# CSS組版エンジン Vivliostyle.js Core {#js-core}


## Vivliostyle.js のアイデア　since 2014 {#vivliostyle-idea}

- だれもが自由に使えるWebブラウザ上で動くCSS組版エンジンをオープンソースで開発
- WebブラウザのレンダリングエンジンとPDF出力機能を利用
- 最新のWeb標準をサポート
- CSS組版仕様の標準化と普及に貢献 \
  ❌ 独自仕様で高機能組版を目指す（というのではない。）

## CSS組版に必要なCSS仕様は？ {#css-specs}

- Webブラウザで標準で使える基本的なCSS仕様
  - CSS 2.1 
  - Selectors Level 3
  - CSS Backgrounds and Borders Level 3
  - CSS Fonts Level 3
  - CSS Writing Modes Level 3
  - CSS Multi-column Layout Level 1
  - CSS Flexible Box Level 1
  - etc.
- ページメディア用のCSS仕様
  - CSS Paged Media Level 3 \
    ⭐️ページメディア用CSS基本仕様
  - CSS Generated Content for Paged Media (GCPM) 3 \
    ⭐️柱や脚注やクロスリファレンス
  - CSS Fragmentation ⭐️改ページ関係
  - CSS Page Floats \
    ⭐️図版などページフロート配置

Vivliostyle.js はWebブラウザを利用する。\
したがってWeb用のCSS仕様は基本的に利用できる。\
ページメディア用のCSS仕様サポートを追加すればよい🌟

そうして Vivliostyle.js 開発がスタート　👉[Vivliostyle のなりたち](https://vivliostyle.org/ja/history/)

## 再開発途上 CSS Paged Media サポート {#dev-css-paged-media}

Vivliostyle.js にはだいぶ前からページメディア用のCSS仕様の多くの機能が実装済み。（[初期の開発者たち](https://vivliostyle.org/ja/history/#epub-adaptive-layout-%E5%AE%9F%E8%A3%85%E3%82%92%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AB-css-paged-media-%E3%81%AE%E5%AE%9F%E8%A3%85)に感謝🙏）

しかし、いくつかの重要な機能が実装されずに残っていた。

🐢やっと昨年末から、ぼちぼち実装を進めることができている。

🌟最新バージョンで利用可能になったページメディア用CSS機能:
- ✅ [Named strings](https://www.w3.org/TR/css-gcpm-3/#named-strings) （名前付き文字列） 🌟<small>v2.4 (2020-12-28)</small>
- ✅ [Nth page selector](https://www.w3.org/TR/css-gcpm-3/#document-page-selectors) （N番目ページセレクタ） 🌟<small>v2.5 (2021-02-26)</small>
- ✅ [Named pages](https://www.w3.org/TR/css-page-3/#using-named-pages) （名前付きページ） 🌟<small>v2.7 (2021-04-07)</small>
- ✅ [Blank page selector](https://www.w3.org/TR/css-page-3/#blank-pseudo) （空白ページセレクタ） 🌟<small>v2.8 (2021-04-16)</small>


# CSS Paged Media を使いこなそう！ {#use-css-paged-media}

## Named strings—柱を本文の見出しから {#named-strings}

名前付き文字列(Named strings)の使用例:
```css
@page :right {
  @top-right {  /* 右上のページヘッダに章見出し */
    content: string(chap-title, first-except); /* 章の先頭ページを除き表示 */
  }
}
h1.chapter { /* 章見出し */
  string-set: chap-title content();
}
h1.chapter[title] {
  string-set: chap-title attr(title); /* 属性の値を使うことも可能 */
}
```

## Named pages—名前付きのページルール {#named-pages}

ページの種類ごとに名前をつけてページ設定を定義。 例:

```css
@page cover { /* 名前付きのページ設定（名前: "cover"） */
  margin: 0;  /* "cover" ページは余白無しに */

  /* "cover" ページは柱（ページヘッダー）無しに */
  @top-left { content: none; }
  @top-right { content: none; }
}

.cover {
  page: cover;  /* pageプロパティで使用する名前付きページを指定 */
}
```

## Nth page selector: nth() {#nth-page}

文書の N 番目のページのスタイルを定義することなどできます。

構文: `@page :nth(An+B)` \
（CSS セレクタ `:nth-child(An+B)` のページ版のようなもの）

例:
```css
@page :nth(1) {
  margin: 0;
  background-image: url(cover.png);
}
```

### 複数HTML文書連結の場合の `@page :first` と `@page :nth(1)` の違い {#first-and-nth1}

複数HTML文書をまとめて１つの本（PDF、WebPub）にする場合:

- `@page :first` は全体の先頭ページだけに適用
  - これは Vivliostyle の以前からの動作仕様。現在の CSS Paged Media 仕様には、複数のHTML文書をまとめて１つの本にする場合のことは定義されていないため、独自仕様といえる。
- `@page :nth(1)` は、各HTML文書の先頭ページに適用

つまり、章ごとにファイルを分けている場合、`@page :nth(1)` は各章の先頭ページに適用、 `@page :first` は全体の先頭ページだけ。

### 名前付きページと `:nth()` の組み合わせの例 {#named-string-nth}

```css
@page :first {　/* 全体の一番最初のページのみに適用 */
  counter-reset: chapter;
}
@page chapter:nth(1) {　/* 各章ファイルの最初のページに適用 */
  counter-increment: chapter;
}
h1::before {
  content: "第" counter(chapter) "章";
}
.chapter {
  page: chapter;
}
```

各章のHTMLは次のようになってるとする:

```html
<body>
  <section class="chapter">
    <h1>章のタイトル</h1>
    ...
  </section>
</body>
```

これにより、章カウンタを全体の先頭でリセット、各章の先頭でインクリメントすることができる。



**注意:** もし複数の章を１つのHTMLファイルにしている場合は、 `@page chapter:nth(1)` は各章ではなくて１つのHTMLファイルの先頭ページだけに適用される。


# ページメディア用CSS仕様サポート状況まとめ {#specs-supported}


## CSS Paged Media Level 3 {#css-page}
https://www.w3.org/TR/css-page-3/

- 4 Page Selectors and the Page Context
  - 4.1 The @page Rule ✅
  - 4.2 Page selectors
    - 4.2.1 Spread pseudo-classes: :left, :right ✅
    - 4.2.2 First-page pseudo-class: :first ✅
    - 4.2.3 Blank-page pseudo-class: :blank ✅🌟<small>v2.8 (2021-04-16)</small>
- 5 Page-Margin Boxes ✅
- 6 Page Properties
  - 6.1 Page-based counters ✅
- 7 Page Size
  - 7.1 Page size: the size property ✅
  - 7.2 Crop and Registration Marks: the marks property ✅
  - 7.3 Bleed Area: the bleed property ✅
- 8 Page Breaks
  - 8.1 Using named pages: page ✅🌟<small>v2.7 (2021-04-07)</small>

## CSS Generated Content for Paged Media (GCPM) {#css-gcpm}
https://www.w3.org/TR/css-gcpm-3/

- 1 Running headers and footers
  - 1.1 Named strings ✅🌟<small>v2.4 (2020-12-28)</small>
  - 1.2 Running elements ❌
- 2 Footnotes ✅
- 3 Selecting Pages
  - 3.1 Page Selectors: :nth(An+B) ✅🌟<small>v2.5 (2021-02-26)</small>
  - 3.2 Page groups: :nth(An+B of pagegroup) ❌
- 4 Leaders: leader() ❌
- 5 Cross-references
  - 5.1 The target-counter() function ✅
  - 5.2 The target-counters() function ✅
  - 5.3 target-text ❌
- 6 Bookmarks

## CSS Fragmentation Level 3 {#css-break}
https://www.w3.org/TR/css-break-3/

- 3.1 Breaks Between Boxes: the break-before and break-after properties ✅
- 3.2 Breaks Within Boxes: the break-inside property ✅
- 3.3 Breaks Between Lines: orphans, widows ✅
- 5.4 Fragmented Borders and Backgrounds: the box-decoration-break property ✅

## CSS Page Floats {#css-page-floats}
https://www.w3.org/TR/css-page-floats-3/

- 3.1 The float-reference property ✅
- 3.2 The float property ✅
- 4 The clear property ✅

## より詳しくは Vivliostyle ドキュメント→「サポートする CSS 機能」へ {#documents}

- 日本語ドキュメントページ: https://vivliostyle.org/ja/documents/
  - サポートする CSS 機能: https://docs.vivliostyle.org/#/ja/supported-css-features
- English Documents: https://vivliostyle.org/documents/
  - Supported CSS Features: https://docs.vivliostyle.org/#/supported-css-features




