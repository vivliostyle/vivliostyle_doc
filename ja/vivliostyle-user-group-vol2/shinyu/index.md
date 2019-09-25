---
title: Vivliostyle のこれからの開発課題
author:
  - 村上真雄
---

# Vivliostyle のこれからの開発課題

<div class="draft-author">
村上 真雄 (@MurakamiShinyu)<br>
Vivliostyle Foundation 代表
</div>

先日のイベント〈**Vivliostyle 開発者とユーザーの集い 2019 夏**〉[^1] の《第 1 部》開発者ミーティング「**Vivliostyle 開発のこれまでと、これからへ**」[^2]で、Vivliostyle.js ソースコードの TypeScript 化が完了したことで今後の開発が楽になったことと、開発課題(issue)を課題カテゴリーごとのプロジェクトに整理して GitHub Projects[^3] で管理するようにしたことを説明して、ミーティング参加者（30 名くらい）にどのプロジェクトが重要か聞きました（複数回答）。結果は以下：

- Bugs（レイアウトの不具合など直す）: 7 人
- PDF printing（PDF 出力および印刷に関する問題を解決する）: 7 人
- Input formats（多様な入力文書フォーマットのサポート）: 7 人
- Paged media（CSS ページメディア関連仕様のサポート）: 15 人
- Typography（文字組版関連 CSS 仕様サポート）: 8 人
- Layout enhancement（高度なレイアウトの CSS 仕様サポート）: 10 人
- Web standards（Web 標準仕様のサポート）: 7 人
- Other improvements（その他の改良）:
  - Improved error handling (エラー処理改良): 5 人
  - UI multilingualization（UI の多言語化）: 3 人
  - Search function（Viewer に検索機能）: 3 人
  - Chrome extension（Chrome ブラウザ拡張）: 6 人
  - Documentation（ドキュメントの充実）: 12 人

[^1]: Vivliostyle 開発者とユーザーの集い 2019 夏開催しました！ https://vivliostyle.org/ja/blog/2019/09/04/vivliostyle-dev-user-meetup-tokyo20190831/
[^2]:「Vivliostyle開発のこれまでと、これからへ」http://bit.ly/vivdev20190831
[^3]: https://github.com/vivliostyle/vivliostyle.js/projects/

この結果を見てわかるのは、どのプロジェクトもそれぞれ重要だけど、特に CSS ページメディア関連仕様や高度なレイアウトの CSS 仕様のサポートを拡充することへの期待が高いということです。それからドキュメントの充実ということも。

これを踏まえて今後、とくに要望が多い項目を意識しながらも、どのプロジェクトも進めていきたいところです。とはいうものの、どれもそんなに簡単なプロジェクトではありません。もっと**皆様の協力が得られることが必要**であるし、そのためには、その課題について理解を広めなければと思います。そこで、各プロジェクトの主な課題について、解説します。

## Bugs（レイアウトの不具合など直す）

現在、約 30 数件のバグが残っています。プログラムの誤りや、実装が不十分であるために期待されるレイアウトにならないなどです。バグというより現在の実装での制限事項であって解決には本格的な処理の見直し・再設計が必要という問題は別のプロジェクトに割り振っているので、ここにあるのは比較的単純な問題です。

そのいくつか：

- [#544: `column-fill: balance` on vertical writing mode causes columns left-aligned](https://github.com/vivliostyle/vivliostyle.js/issues/544)
  - **不具合**：縦書きの段組の最後のページの段が左寄せになる。
  - **回避方法**：縦書きの段組では `column-fill: auto` を指定する。（初期値 `column-fill: balance` が縦書きのとき問題あり）
- [#438: footnotes in table are ignored](https://github.com/vivliostyle/vivliostyle.js/issues/438)
  - **不具合**：テーブル内の脚注が無視される。
- [#534: Table break when there are footnotes](https://github.com/vivliostyle/vivliostyle.js/issues/534)
  - **不具合**：ページに脚注があるときテーブル内での改ページがされずテーブルの前で改ページが発生する。
- [#546: Inline-block or ruby at beginning of a block causes unexpected page/column break](https://github.com/vivliostyle/vivliostyle.js/issues/546)
  - **不具合**：ブロックの先頭にルビや inline-block があるときブロックの途中での改ページ／改段がされずにブロックの前で改ページ／改段が発生する。
- [#516: Absolute positioned elements causes unwanted page break when its height is more than page height](https://github.com/vivliostyle/vivliostyle.js/issues/516)
  - **不具合**：絶対位置指定で配置する要素の高さがページに収まらないとき同一ページに配置したい他の要素との間で改ページが発生する。

## PDF printing（PDF出力および印刷に関する問題を解決する）

現状はブラウザの PDF 出力に依存するため、これらの問題があります。

- [#437: please use CID instead of Type3](https://github.com/vivliostyle/vivliostyle.js/issues/437)
  - **問題**：Chrome ブラウザの「PDF に保存」で PDF を生成すると、OpenType/CFF フォントが Type3 フォントとして埋め込まれる。これでは印刷に向かない。
  - **代替手段その 1**：TrueType フォントのみを使用する。
  - **代替手段その 2**：Chrome 以外のブラウザ（Safari や Firefox）を使用する。
  - **代替手段その 3（PDF の後処理で解決）**：Vivliostyle + Chrome ブラウザで出力した PDF を Mac の「プレビュー」アプリで開いてファイルメニューの「書き出す」で「フォーマット: PDF」「Quartz フィルタ: Create Generic PDFX-3 Document」で別の PDF に書き出すと Type3 フォントの埋め込みの代わりに、テキストがグラフィック（アウトライン）に変換される。テキストデータを取り出せない PDF になるが、印刷には使える。
- [#429: support PDF standard](https://github.com/vivliostyle/vivliostyle.js/issues/429)
  - **要望**：印刷用の PDF の標準である PDF/X-1a や PDF/X-4 をサポートしてほしい。
  - **代替手段（PDF の後処理で解決）**：前項の「代替手段その 3」でできた PDF を Acrobat Pro で開き、「プリフライト: PDF/X に変換」で「PDF/X-1a (Japan Color 2001 Coated) に変換」など選んで変換すると、PDF/X-1a 準拠の PDF になります。
- [#419: Minimum width of borders is too thick](https://github.com/vivliostyle/vivliostyle.js/issues/419)
  - **問題**：Chrome ブラウザで PDF 出力すると border の最小幅は 1px = 0.75pt = 0.265mm で、border がそれより細くならない。
- [#418: Add TrimBox and BleedBox to output PDF](https://github.com/vivliostyle/vivliostyle.js/issues/418)
  - **要望**：Vivliostyle でトンボ付きで PDF 出力したとき TrimBox と BleedBox の情報も出力されてほしい。
- [#432: @page size value ignores decimal numbers](https://github.com/vivliostyle/vivliostyle.js/issues/432)
  - **問題**：Chrome ブラウザでは CSS の `@page { size: … }` で指定のページサイズで PDF が生成されるが、そのとき整数ポイント単位に丸められてしまい正確なページサイズにならない。

## Input formats（多様な入力文書フォーマットのサポート）

Vivliostyle は現在、入力文書フォーマットとして (X)HTML 文書、複数の HTML 文書をまとめた Web 出版物、および、ZIP 解凍済みの EPUB をサポートしています。また、文書中で使える数式のフォーマットとして、MathML、AsciiMath、TeX の数式をサポートしています（MathJax ライブラリを利用）。これをもっと充実させたいという要望があります。主なもの：

- [#541: Support non-unzipped EPUB loading](https://github.com/vivliostyle/vivliostyle.js/issues/541)
  - **要望**：EPUB ファイルを直接（解凍していなくても）ロードできるようにしてほしい。
- [#524: Vexflow and vextab](https://github.com/vivliostyle/vivliostyle.js/issues/524)
  - **要望**：HTML 上で楽譜を表示するための API と簡易言語である VexFlow と VexTab をサポートしてほしい。
- [#168: Let authors use their own MathJax configuration](https://github.com/vivliostyle/vivliostyle.js/issues/168)
  - **要望**：数式を表示するのに使用される MathJax の設定を制作者側でカスタマイズできるようにしてほしい。

## Paged media（CSSページメディア関連仕様のサポート）

[CSS Paged Media](https://drafts.csswg.org/css-page-3/) および [CSS Generated Content for Paged Media](https://drafts.csswg.org/css-gcpm/) 仕様のサポートに関する課題です。主なもの：

- [#59: Root element styles are not inherited to page context](https://github.com/vivliostyle/vivliostyle.js/issues/59)
  - **問題**：ルート要素に指定したスタイル（フォント指定など）が、ページコンテキストつまり `@page { … }` のブロック内に継承されない。
- [#545: Support named strings for running headers and footers](https://github.com/vivliostyle/vivliostyle.js/issues/545)
  - **要望**：本文中の見出しの内容のテキストを `string-set` プロパティで名前付き文字列としてセットして、それをページマージン領域に柱（欄外見出し）として表示できるようにする機能。
  - **代替手段**：現在の Vivliostyle では、複数の HTML 文書で構成される本の場合は、`env(pub-title)`、`env(doc-title)` で本のタイトル（メインの HTML のタイトル）と個別 HTML 文書のタイトルをそれぞれ出力できる。
- [#424: Support for running elements?](https://github.com/vivliostyle/vivliostyle.js/issues/424)
  - **要望**：本文中の見出しの要素をページマージン領域に柱（欄外見出し）として表示できるようにする機能。string-set が単純なテキストだけ扱えるのに対して、こちらは HTML 要素を扱える。
  - **代替手段**: EPUB Adaptive Layout を使用する。`-epubx-flow-into: 名前` の指定がある要素を `-epubx-flow-from: 名前` の指定があるページ区画に配置できる。
- [#425: Support for named pages?](https://github.com/vivliostyle/vivliostyle.js/issues/425)
  - **要望**：ページの種類（例：扉、序文、本文、奥付、など）ごとに名前付きのページのスタイルを `@page 名前 { … }` で定義して、それを文書中の該当要素に `page: 名前` というプロパティ指定で割り当てる機能
  - **代替手段その 1**：複数の HTML 文書で構成される本にして、ページの種類ごとに別のスタイルシートを HTML 文書に指定することで、ページのスタイルを切り替えることができる。
  - **代替手段その 2**: EPUB Adaptive Layout を使用する。ページの種類ごとにページテンプレートを定義できる。
- [#428: Support "@page :blank"](https://github.com/vivliostyle/vivliostyle.js/issues/428)
  - **要望**：改丁（章を奇数ページから開始するなど）で空白ページができるときに、その空白ページのスタイルを指定できるようにする `:blank` ページセレクターのサポート。
- [#149: Add support for GCPM bookmarks](https://github.com/vivliostyle/vivliostyle.js/issues/149)
  - **要望**：本文中の HTML の見出しの要素に `bookmark-level` プロパティで階層レベルを設定して、それを Viewer の目次パネルや PDF の「しおり」に出力できるようにする。

## Typography（文字組版関連CSS仕様サポート）

文字組版の問題：[CSS Text 3](https://drafts.csswg.org/css-text-3/), [CSS Text 4](https://drafts.csswg.org/css-text-4/) や [CSS Fonts](https://drafts.csswg.org/css-fonts/) 仕様などのサポートに関する課題です。主なもの：

- [#182: Support text-spacing](https://github.com/vivliostyle/vivliostyle.js/issues/182)
  - **要望**：行頭・行末・連続約物の詰め、和欧文間のアキなどを自動で処理する `text-spacing` プロパティのサポート。
  - **メモ**：日本語の文字組みを美しく読みやすくするためにほしい機能。いずれブラウザでこれが標準になるのが期待されるけれど、Vivliostyle 側で先行実装するのも可能だろう。
- [#204: Support unicode-range descriptor](https://github.com/vivliostyle/vivliostyle.js/issues/204)
  - **要望**：Unicode コードポイントの範囲によってフォントを割り当てる `unicode-range` 記述子のサポート。
  - **メモ**：ブラウザでは標準的に使えるようになっているのに Vivliostyle で現在これが使えないのは残念なところ。
- [#154: Support the font-variant-* longhands](https://github.com/vivliostyle/vivliostyle.js/issues/154)
  - **要望**：フォントの字形を切り替える `font-variant-*`（font-variant-caps, font-variant-east-asian, font-variant-ligatures, font-variant-numeric, font-variant-position）プロパティのサポート。

## Layout enhancement（高度なレイアウトのCSS仕様サポート）

高度なレイアウトを実現する CSS 仕様のサポート：[CSS Page Floats](https://drafts.csswg.org/css-page-floats/)、[CSS Grid Layout](https://drafts.csswg.org/css-grid/)[CSS Multi-column Layout](https://drafts.csswg.org/css-multicol/) などに関する課題です。

- [#539: Support CSS Grid Layout](https://github.com/vivliostyle/vivliostyle.js/issues/539)
  - **要望**：CSS グリッドレイアウトのサポート。
  - **メモ**：すでにブラウザで実装されてるのでそれを利用可能にしたい。
- [#543: Update CSS Page Floats](https://github.com/vivliostyle/vivliostyle.js/issues/543)
  - **要望**：CSS Page Float は現在の Vivliostyle に実装されています。これをもっと使いやすく便利なものにするために改良したい。
- [#107: Broken multi-column inside a non-root element](https://github.com/vivliostyle/vivliostyle.js/issues/107)
  - **問題**：ルートあるいは body 以外の要素に指定した段組が正常に組版できない。
  - **メモ**：現在の段組の実装は、EPUB Adaptive Layout でのページ区画で指定する段組の実装がベースで、ルートまたは body 要素に指定された段組をページエリア全体の段組の扱いに変えてサポートしている。それ以外の要素での段組のプロパティはそのままブラウザに渡されるので、ページの中で部分的に使われたときに機能するが、複数ページに渡るときの分割処理などはできていない。
- [#542: Support column-span](https://github.com/vivliostyle/vivliostyle.js/issues/542)
  - **要望**：段組の段抜きを指定する `column-span` プロパティのサポート。
  - **代替手段**: EPUB Adaptive Layout を使用する。ページテンプレートでページ区画を定義することで、段組で段抜きの区画があるようなレイアウトが実現できる。

## Web standards（Web標準仕様のサポート）

Web 標準仕様のサポート：最新ブラウザでサポートされている HTML や CSS の機能など。他のプロジェクトに分類できるものを除きます。

- [#266: Support the fill, max-content, min-content, and fit-content values for width and height.](https://github.com/vivliostyle/vivliostyle.js/issues/266)
  - **要望**：ボックスのサイズを指定する `width` や `height` プロパティの値 `min-content`, `max-contant`, `fit-content` のサポート。
- [#265: Support 'base' element](https://github.com/vivliostyle/vivliostyle.js/issues/265)
  - **要望**：HTML 文書のベース URL を指定する `<base>` 要素のサポート。
- [#540: Support CSS custom properties (variables)](https://github.com/vivliostyle/vivliostyle.js/issues/540)
  - **要望**：CSS カスタムプロパティ（CSS 変数）のサポート。
  - **代替手段その 1**: Sass など CSS のプリプロセッサの変数を使う。
  - **代替手段その 2**: EPUB Adaptive Layout の名前付きの値の定義 `@-epubx-define` を使う。
- [#145: add support for user-select](https://github.com/vivliostyle/vivliostyle.js/issues/145)
  - **要望**：ユーザーが文章を範囲選択できるかどうかを設定する `user-select` プロパティのサポート。

## Other improvements（その他の改良）

その他の課題として、エラー処理の改善、Viewer UI の課題、ブラウザ拡張機能の要望、ドキュメンテーションについて、などがあります。

- [#460: autokill option](https://github.com/vivliostyle/vivliostyle.js/issues/460)
  - **要望**：組版処理の異常によって処理が止まらなくなったときに自動的に処理を止めるオプションがほしい。
- [Vivliostyle UI issues](https://github.com/vivliostyle/vivliostyle-ui/issues)
    - [Localization of Vivliostyle Viewer UI](https://github.com/vivliostyle/vivliostyle-ui/issues/71)
      - **要望**：Viewer UI 言語が現在は英語だけなのだけど、ほかの言語のリソースも追加して、ブラウザの言語設定によって切り替えられるようにしたい。
    - [Include a search function in the UI](https://github.com/vivliostyle/vivliostyle-ui/issues/20)
      - **要望**：Vivliostyle Viewer に、文書中のテキストの検索機能がほしい。現在は、ブラウザのテキスト検索で表示中のページ内しか検索されない。
- Browser extension of Vivliostyle viewer
  - **要望**：ブラウザ拡張機能バージョンの Vivliostyle Viewer がほしい。（かつて存在した Vivliostyle Chrome Extension）
- [#423: Documentation: supported-features](https://github.com/vivliostyle/vivliostyle.js/issues/423)
  - **要望**：サポートする機能のドキュメンテーションを改善してほしい。


## まとめ

以上、Vivliostyle の今後の開発課題の主なものでした。

### 開発体制の現状と、まずできること

さて、これらをどうしていくかです。現在このオープンソース・プロジェクトの主体である Vivliostyle Foundation は、昨年、それまで Vivliostyle を開発してきた会社（現在の社名は Trim-marks Inc.）がオープンソース製品の取り扱いを終了したことに伴い、会社から独立してオープンソース・プロジェクトを維持していくために発足したものです。代表の私は、元々の Vivliostyle 社の創業者ですが、自分が Vivliostyle.js のメインの開発者だったことはそれまでなくて、そのコードに少しずつ手を入れ始めたのは昨年からです。そんな私と数名のボランティアの協力で維持しているものなので、開発リソースはとても限られていて、資金があるわけでもありません。

この記事の最初のほうで「とくに要望が多い項目を意識しながらも、どのプロジェクトも進めていきたい」と書いたものの、実際は今すぐ取りかかれそうなことはバグを直していくことや、すでにブラウザで実装されている機能を Vivliostyle から利用可能にするなど、比較的簡単な作業に限られそうです。

要望が多い、Paged media（CSS ページメディア関連仕様のサポート）の柱（欄外見出し）の機能や、Layout enhancement（高度なレイアウトの CSS 仕様サポート）の段組レイアウトの制限をなくすことなどは、それぞれ本格的な開発作業を要するものであり、それらを進められるようにするためには、資金的な支援が得られてじっくり開発に取り組めるようになることや、あるいはボランティアでの貢献をしたい開発者・協力者たちのコミュニティを育てられるかということに掛かっています。

### Vivliostyle を活用してください！ それから、開発支援に感謝！

多くの人に使ってもらえることで Vivliostyle が世の中に認知されて、プロジェクトへの協力が得られやすくなることを期待しています。

Vivliostyle をどう活用するかは、そのオープンソースのライセンス（AGPLv3）に違反しないかぎり自由です。自費出版への利用などはもちろんですが、企業内での利用、商業出版への利用、出版コンテンツの閲覧サービスへの利用、Web コンテンツの印刷機能への利用など、いろいろと使い道があるでしょう。

そのような Vivliostyle 活用の相談については、コミュニティでの投稿歓迎ですが、オープンにできない案件については私に直接ご相談くだされば対応します（内容によって有料でのコンサルティングも）。また、現在の Vivliostyle に足りない機能や修正が必要な問題（すでに issue 登録されている課題でもそれ以外でも）がある場合、その開発についてご相談ください。オープンソースですので、特定ユーザー（企業など）の必要によりそのユーザーの負担（共同開発や開発費負担）で開発された機能もオープンソースで公開されて、あとから利用する別のユーザーにも恩恵があるということになります。現在 Vivliostyle で利用できる機能の一部はそのような形で支援を受けて開発されたものです。Vivliostyle のリリースノートの謝辞（Acknowledgements）に開発貢献・支援いただいた企業などのお名前を入れております。開発支援に感謝します。

### 開発に興味ある人は、一緒に Vivliostyle のソースコードを読もう

Vivliostyle.js ソースコードの TypeScript への移行は、ソースコードを読みやすくして、今後の開発がよりスムーズに行えるようにと行ったものですが、それでもこのプログラムを理解して開発できるまでになるのは容易ではないと思います。

そこで、みんなでソースコードを読もうという、Vivliostyle コードリーディング会をやっていこうという声が上がってます。そのスケジュールなど決まったら案内しますのでご参加ください。

Vivliostyle Viewer (vivliostyle.js + vivliostyle-ui) をソースコードからビルドして、テスト、デバッグ実行する手順などは、[Vivliostyle.js Development](https://github.com/vivliostyle/vivliostyle.js/wiki/Development) にあります。ぜひこの手順でビルドして試してみてください。

以下、Vivliostyle の開発に関係する URL のまとめです：

- Vivliostyle 公式サイト（日本語）: https://vivliostyle.org/ja/
  - コミュニティ: https://vivliostyle.org/ja/community/
  - ドキュメント: https://vivliostyle.org/ja/docs/
    - Vivliostyle.js Development: https://github.com/vivliostyle/vivliostyle.js/wiki/Development
- vivliostyle.js: https://github.com/vivliostyle/vivliostyle.js
  - issues: https://github.com/vivliostyle/vivliostyle.js/issues
  - projects: https://github.com/vivliostyle/vivliostyle.js/projects
- vivliostyle-ui: https://github.com/vivliostyle/vivliostyle-ui
- vivliostyle-print: https://github.com/vivliostyle/vivliostyle-print
- vivliostyle-savepdf: https://github.com/vivliostyle/vivliostyle-savepdf

### 不具合や要望などフィードバックをお寄せください

Vivliostyle を使っていて気になったことや、必要な機能の要望などは、どんどんお寄せください。ユーザーからのフィードバックがあることは励みになります。

不具合や要望などのフィードバックは、GitHub の issue に登録してくれるとありがたいですが、Vivliostyle のコミュニティ: Slack、Twitter、Facebook グループでの質問やフィードバックも歓迎します。

### Vivliostyle コミュニティをチェック！

- Vivliostyle コミュニティ https://vivliostyle.org/ja/community/

ここから参加できる Vivliostyle の Slack が、Vivliostyle 開発者とユーザーのコミュニティの中心になっています。現在の参加者数45名くらい。
まだの方はぜひご参加ください。次のチャンネルなどがあります：

- #general: いろいろお知らせなど
- #random: 自己紹介や雑多な話題をどうぞ
- #issues: Vivliostyle のバグや機能追加の要望をどうぞ
- #q-and-a: Vivliostyle についての質問と回答
- #techbookfest: 技術書典向けに Vivliostyle ユーザー会の合同誌を作る相談など

それから Vivliostyle の Twitter や Facebook グループもどうぞよろしく。
Vivliostyle への皆様のご支援に感謝します！
