# Vivliostyle: オープンソースCSS組版システム  {.cover}

2021-06-15 \
Shinyu Murakami \
Vivliostyle Foundation

# 目次 {.toc role="doc-toc"}

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [はじめに](#%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB)
  - [自己紹介](#%E8%87%AA%E5%B7%B1%E7%B4%B9%E4%BB%8B)
- [CSS組版とは: Web技術で本の組版が可能に](#css%E7%B5%84%E7%89%88%E3%81%A8%E3%81%AF-web%E6%8A%80%E8%A1%93%E3%81%A7%E6%9C%AC%E3%81%AE%E7%B5%84%E7%89%88%E3%81%8C%E5%8F%AF%E8%83%BD%E3%81%AB)
  - [ワンソース・マルチユースの出版に最適](#%E3%83%AF%E3%83%B3%E3%82%BD%E3%83%BC%E3%82%B9%E3%83%BB%E3%83%9E%E3%83%AB%E3%83%81%E3%83%A6%E3%83%BC%E3%82%B9%E3%81%AE%E5%87%BA%E7%89%88%E3%81%AB%E6%9C%80%E9%81%A9)
  - [意外に古くから実用化されているCSS組版](#%E6%84%8F%E5%A4%96%E3%81%AB%E5%8F%A4%E3%81%8F%E3%81%8B%E3%82%89%E5%AE%9F%E7%94%A8%E5%8C%96%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8Bcss%E7%B5%84%E7%89%88)
- [Vivliostyle: WebブラウザベースでオープンソースのCSS組版ツール](#vivliostyle-web%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%99%E3%83%BC%E3%82%B9%E3%81%A7%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BD%E3%83%BC%E3%82%B9%E3%81%AEcss%E7%B5%84%E7%89%88%E3%83%84%E3%83%BC%E3%83%AB)
  - [WebブラウザベースCSS組版のメリット](#web%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%99%E3%83%BC%E3%82%B9css%E7%B5%84%E7%89%88%E3%81%AE%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88)
  - [オープンソース開発コミュニティー](#%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BD%E3%83%BC%E3%82%B9%E9%96%8B%E7%99%BA%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%83%BC)
- [Vivliostyleプロジェクトの進化と今後の課題](#vivliostyle%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E9%80%B2%E5%8C%96%E3%81%A8%E4%BB%8A%E5%BE%8C%E3%81%AE%E8%AA%B2%E9%A1%8C)
  - [Vivliostyle.js Core: CSS組版エンジンの進化](#vivliostylejs-core-css%E7%B5%84%E7%89%88%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%B3%E3%81%AE%E9%80%B2%E5%8C%96)
  - [Vivliostyle Viewer: 組版プレビュー用そして電子出版ビューアとしてより使いやすく](#vivliostyle-viewer-%E7%B5%84%E7%89%88%E3%83%97%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E7%94%A8%E3%81%9D%E3%81%97%E3%81%A6%E9%9B%BB%E5%AD%90%E5%87%BA%E7%89%88%E3%83%93%E3%83%A5%E3%83%BC%E3%82%A2%E3%81%A8%E3%81%97%E3%81%A6%E3%82%88%E3%82%8A%E4%BD%BF%E3%81%84%E3%82%84%E3%81%99%E3%81%8F)
  - [Vivliostyle CLI: 色々使えるCSS組版ツール](#vivliostyle-cli-%E8%89%B2%E3%80%85%E4%BD%BF%E3%81%88%E3%82%8Bcss%E7%B5%84%E7%89%88%E3%83%84%E3%83%BC%E3%83%AB)
  - [Vivliostyle Pub: 2021年中に公開予定](#vivliostyle-pub-2021%E5%B9%B4%E4%B8%AD%E3%81%AB%E5%85%AC%E9%96%8B%E4%BA%88%E5%AE%9A)
- [Vivliostyleを活用ください](#vivliostyle%E3%82%92%E6%B4%BB%E7%94%A8%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84)
  - [さまざまな用途にVivliostyleの活用を](#%E3%81%95%E3%81%BE%E3%81%96%E3%81%BE%E3%81%AA%E7%94%A8%E9%80%94%E3%81%ABvivliostyle%E3%81%AE%E6%B4%BB%E7%94%A8%E3%82%92)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# はじめに

## 自己紹介

{一般社団法人ビブリオスタイル|　　　Vivliostyle Foundation　　　}　代表理事　{村上 真雄|むらかみ しんゆう}
- 1990年ごろ、テキスト整形ツールXTRを開発、公開。それ以来マークアップ言語と組版に関心。
- 1999〜2014年、アンテナハウス AH Formatter の開発に従事
- 2014年、Vivliostyleプロジェクトを構想、株式会社ビブリオスタイル設立
- 2015年、JEPA電子出版アワード2015でVivliostyleがエキサイティング・ツール賞と大賞を受賞
- 2018年、[一般社団法人ビブリオスタイル](https://vivliostyle.org/ja/)設立。Vivliostyleをコミュニティーベースでのオープンソース開発に移行

# CSS組版とは: Web技術で本の組版が可能に

## ワンソース・マルチユースの出版に最適

CSS組版とは、Webページを記述するのに使われるHTMLとCSSで、本のページの組版を可能にする技術。

- HTML: ハイパーテキスト・マークアップ・ランゲージ
- CSS: カスケーディング・スタイル・シート

電子出版の標準EPUBも、その中身はHTMLとCSS。

CSS組版で紙の本の組版も可能ということは、 \
Web出版、電子出版、印刷出版すべてHTML+CSSでできるので、 \
ワンソース・マルチユースでさまざまなニーズに対応可能❗️


## 意外に古くから実用化されているCSS組版

- Vivliostyle以前から本を作れるCSS組版エンジンはあった。

- CSS組版で本を作っている世界の有名出版社の例
  - 米オライリー社（組版エンジンは [AH Formatter](https://www.antenna.co.jp/AHF/)）<span class="footnote">https://blog.antenna.co.jp/ILSoft2/archives/820</footnote>
  - 米アシェット社（組版エンジンは [Prince](https://www.princexml.com/)）<span class="footnote">https://www.xml.com/articles/2017/02/20/beyond-xml-making-books-html/</footnote>

- Vivliostyleの新しいところは、
  - Webブラウザベースで本格的な組版を可能にすること

# Vivliostyle: WebブラウザベースでオープンソースのCSS組版ツール

## WebブラウザベースCSS組版のメリット

- ブラウザ上で組版結果の閲覧も印刷・PDF出力もできる

- 最新のWeb標準技術が利用できる \
  （ブラウザで実現されている機能を新たに開発しなくてよい）
  - [HTML Living Standard](https://html.spec.whatwg.org/) （いわゆる “HTML5”）
  - [CSS Snapshot 2020](https://www.w3.org/TR/css-2020/) （いわゆる “CSS3”）
  - JavaScript, MathML, SVG, Web Fonts, etc.

Vivliostyle.js （CSS組版のJavaScriptライブラリ）には、ブラウザの標準の機能では足りないCSS組版の機能が実装されている。 \
（ブラウザの標準のCSS機能で足りる部分はそれが利用できる）

### 一方デメリットもあるけれど

- 出力されるPDFの品質がブラウザのPDF出力エンジンに依存
  - PDFの後処理を組み込むことで、ある程度の改善は可能（PDF/X-1a対応はこれで実現🌟）
- 組版の精度がブラウザのレンダリングエンジンにより制限。Chromeの場合:
  - 行ピッチが1px（1/96インチ）の整数倍に切り捨てられる
  - ボーダー（罫線）を1pxより細くできない

など。これらのデメリットを解決・回避するための処理を組み込んでいく必要がある。 （その充実が今後の開発課題💪）


## オープンソース開発コミュニティー

2018年から、コミュニティーベースでのオープンソース開発に。 \
（{Vivliostyle Foundation|一般社団法人ビブリオスタイル}がそれを維持管理）

ボランティアの開発貢献者たちにより開発が進んでいる🙏

主なコミュニティー活動: 
- [Slackコミュニティー](https://vivliostyle.org/ja/community/#slack)と[GitHub](https://github.com/vivliostyle)上で開発の議論
- 毎月の開発者会議の開催: [これまでの議題・議事録](https://github.com/vivliostyle/community/issues?q=label%3Ameeting)
- 年2回（4月と10月）の「Vivliostyleユーザーと開発者の集い」
  - これまでの開催: [2019夏](https://connpass.com/event/141767/), [2020春](https://vivliostyle.connpass.com/event/170939/), [2020秋](https://vivliostyle.connpass.com/event/189940/), [2021春](https://vivliostyle.connpass.com/event/208401/)

# Vivliostyleプロジェクトの進化と今後の課題

## Vivliostyle.js Core: CSS組版エンジンの進化

CSS組版の標準仕様 [**CSS Paged Media**](https://www.w3.org/TR/css-page-3/)などのサポートが充実。

最新バージョンで利用可能になったページメディア用CSS機能:

✅ [Named strings](https://www.w3.org/TR/css-gcpm-3/#named-strings) （名前付き文字列）<span class="footnote">名前付き文字列は見出しなどの文字列をページヘッダーやフッターに柱として表示するのに便利</span> 🌟<small>v2.4 (2020-12-28)</small>\
✅ [Nth page selector](https://www.w3.org/TR/css-gcpm-3/#document-page-selectors) （N番目ページセレクタ） 🌟<small>v2.5 (2021-02-26)</small>\
✅ [Named pages](https://www.w3.org/TR/css-page-3/#using-named-pages) （名前付きページ）<span class="footnote">名前付きページはページの種類ごとに名前をつけてページ設定を定義する機能</span> 🌟<small>v2.7 (2021-04-07)</small>\
✅ [Blank page selector](https://www.w3.org/TR/css-page-3/#blank-pseudo) （空白ページセレクタ） 🌟<small>v2.8 (2021-04-16)</small>

### 約物の詰めや和欧文間の空きをきちんと

- そのためのCSS Text仕様（[text-spacing プロパティ](https://drafts.csswg.org/css-text-4/#text-spacing-property)）がブラウザで利用可能になるのに、まだ時間がかかりそう
- 当面の解決策
  - 連続約物を自動的に詰めてくれるフォントが利用可能
    - [約物Webフォント「約猫」（YakuCalt）](https://tama-san.com/yakucalt-font/)
  - 文字間の自動調整をするJavaScriptライブラリを使用<span class="footnote">ただし現状のVivliostyleにはWeb用のJavaScriptをそのまま利用できない問題があり対応検討中</span>
    - [漢字標準格式](https://github.com/ethantw/Han/blob/master/README-ja.md)
- Vivliostyle の標準機能とすることを検討中[🚧](https://github.com/vivliostyle/vivliostyle.js/issues/595)

### Webフォントをもっと活用できるように

- CSSでのフォント読み込みでWebフォントが利用可能✅
- しかし、現状のVivliostyleでは課題あり: 
  - CSSのunicode-range（Unicodeの範囲ごとにフォントを変えられる機能）をサポートすること[🚧](https://github.com/vivliostyle/vivliostyle.js/issues/598)
  - JavaScriptによるフォントの読み込みが必要なWebフォント<span class="footnote">ダイナミックサブセッティングが必要な日本語・中国語・韓国語のWebフォントが該当</span>をサポートすること[🚧](https://github.com/vivliostyle/vivliostyle.js/issues/735)
    

## Vivliostyle Viewer: 組版プレビュー用そして電子出版ビューアとしてより使いやすく

これまでの主な改良点:
- EPUBや複数HTML文書からなるWebブック対応の充実
  - 目次パネルからのナビゲーション
  - EPUBの見開き表示指定（page-spread-left/-right）に対応
- ページスライダー、マウスホイール、スワイプ対応などのUI
- 設定パネルでのページ設定

サンプルページ: https://vivliostyle.org/ja/samples/ \
公式公開Vivliostyle Viewer: https://vivliostyle.org/viewer/

## Vivliostyle CLI: 色々使えるCSS組版ツール

- CLI（コマンドライン・インターフェース）って？
  - macOSやLinuxやWindowsのターミナルで使用できる
  - 他のプログラムから使えるので色々なシステムに組み込める
  - 自動処理・バッチ処理で使いやすい

![ ](https://github.com/vivliostyle/vivliostyle-cli/raw/main/assets/cover.jpg){width=70%}

### 組版・変換

```
$ vivliostyle build
```

- 入力文書フォーマット:
  - マークダウン（[VFM](https://github.com/vivliostyle/vfm): Vivliostyle Flavored Markdown）
  - HTML（あるいはXHTML）
  - Webブック・Web出版物（複数HTML文書からなる本）
  - EPUB、および解凍されたEPUB
- 出力文書フォーマット:
  - PDF、PDF/X-1a（印刷入稿用）も可
  - Webブック・Web出版物
  - （今後、EPUB出力も予定[🚧](https://github.com/vivliostyle/vivliostyle-cli/issues/55)）

### 組版プレビュー

```
$ vivliostyle preview
```

- ブラウザ(Chromium)が起動し、Vivliostyle Viewerが開く
- 入力ソース（HTMLやマークダウン原稿、CSSスタイルシートなど）の更新で自動的に再組版して表示更新 \
  ⭐️組版結果を確認しながら原稿の編集やスタイルの調整が可能
- EPUBビューアとしても利用可能

### Vivliostyle CLI 関連ツールたち

- Vivliostyleテーマ ([Vivliostyle Themes](https://github.com/vivliostyle/themes)): CSS組版スタイルシートをパッケージとして公開／再利用する仕組み
- [VFM: Vivliostyle Flavored Markdown](https://github.com/vivliostyle/vfm): 書籍組版に適したマークダウンの標準を目指す
  - GitHubで利用されるGFM（GitHub Flavored Markdown）やマークダウンの業界標準CommonMarkの上位互換
- [Create Book](https://github.com/vivliostyle/create-book): Vivliostyle CLIで本を作る環境を簡単に作るツール


## Vivliostyle Pub: 2021年中に公開予定

- Vivliostyle CLIは色々使えるCSS組版ツールだが、多くの人にとってハードルが高い
  - コマンドラインになれているエンジニアにはよいが、そうでない一般の人たちには難しい
  - 執筆・編集するのに、HTMLでも簡易記法であるマークダウン記法でも、けして簡単とはいえない
  - CSSスタイルシートを書くのも、一般の人たちには難しい

そこで、もっと簡単にCSS組版で本を作れるWebサービス、**Vivliostyle Pub** プロジェクト開始

![Vivliostyle Pub（開発中・アルファ版）の画面](https://vivliostyle.org/assets/projects/screenshot-pub.png){width=100%}

- [Vivliostyle Pub v1 要件仕様](https://github.com/vivliostyle/community/wiki/Vivliostyle-Pub-v1-Req)

# Vivliostyleを活用ください

## さまざまな用途にVivliostyleの活用を

Vivliostyleは、HTML・CSSなど汎用的な標準技術を活かすものなので、特定の用途に限定されないのが特徴。

個人利用から、企業内での利用、さまざまな用途への活用を歓迎。Vivliostyleの活用に関する相談を受け付けています。

Vivliostyle開発は、使っていただく皆様の要望により進んでいます。必要な機能を協力して開発することが可能です。\
（これまで追加してきた機能の中にも、企業などからの要望によって実現したものが多々あります）\
ぜひ私たちとパートナーになってください！

