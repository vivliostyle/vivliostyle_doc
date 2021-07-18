---
title: CSS 組版の基本仕様 CSS Paged Media 入門のススメ
author:
  - 村上真雄
---

# CSS 組版の基本仕様 CSS Paged Media 入門のススメ

<div class="doc-author">
村上真雄
</div>

## はじめに

[「Vivliostyle ユーザーと開発者の集い 2021春」](https://vivliostyle.connpass.com/event/208401/)で、[「Vivliostyle.js (Core)における CSS Paged Media の実装」](http://bit.ly/vivliostyle202104)の話をしました。その中で「CSS 組版に必要な CSS 仕様は？」として、「Web ブラウザで標準で使える基本的な CSS 仕様」と「ページメディア用の CSS 仕様」の両方をあげました。前者については [MDNのCSS入門](https://developer.mozilla.org/ja/docs/Learn/CSS) など学習するための材料が豊富ですが、後者（ページメディア用の CSS 仕様）については、それほど知られていないというのが現状でしょう。そこでこの記事で、ページメディア用 CSS 仕様の入門のための情報をまとめることにします。

## CSS 組版業界標準としての CSS Paged Media Level 3 および関連仕様

ページメディア（paged media: 紙の本や PDF のようにページ概念のあるメディア）のための CSS 仕様は、ほかの CSS 仕様と同じく[W3C (World Wide Web Consortium)](https://www.w3.org/)で標準化が進められているものです。以下の仕様があります：

- [CSS Paged Media Module Level 3 (W3C Working Draft)](https://www.w3.org/TR/css-page-3/)
  - ページメディア用 CSS 基本仕様。ページ余白、ページサイズと向き、ページヘッダー／フッター、ページ番号など
- [CSS Generated Content for Paged Media Module (W3C Working Draft)](https://www.w3.org/TR/css-gcpm-3/)
  - ページメディア用の生成コンテンツ仕様。柱（ページヘッダーに表示する章タイトルなど）、脚注、クロスリファレンス（ページ番号参照）など
- [CSS Fragmentation Module Level 3 (W3C Candidate Recommendation)](https://www.w3.org/TR/css-break-3/)
  - 改ページの制御などの仕様。（「Fragmentation」とはコンテンツをページやカラムで分割すること）
  - ページだけでなく段組（[CSS Multi-column Layout](https://www.w3.org/TR/css-multicol-1/)）での段の分割も扱うのでこの仕様はページメディア専用ではない
- [CSS Page Floats (W3C Working Draft)](https://www.w3.org/TR/css-page-floats-3/)
  - ページフロート仕様。図版などを本のページの上部や下部に配置

これらの仕様で「W3C Working Draft」とあるものは、まだ未完成のドラフト仕様です。ページメディア用 CSS の基本仕様 CSS Paged Media Module Level 3 も Working Draft 状態であり未完成なのですが、この仕様は 2004 年にほぼ完成した仕様といえる Candidate Recommendation（勧告候補）まで進んだあとに Working Draft に戻されて今にいたっているので、かなり前からほぼ完成しているともみなせます。そして Vivliostyle を含むいくつもの CSS 組版エンジンは共通してこの仕様を実装しているので、CSS Paged Media Module Level 3 は CSS 組版の業界標準仕様といえます。

## 意外に古くから実用化されている CSS 組版

Vivliostyle プロジェクトのスタートは 2014 年ですが、その当時、すでに先行している CSS 組版エンジンは世界にいくつかあり、有名な出版社で本格的に利用されている事例も公開されていました。

### CSS 組版で本を作っている世界の有名出版社の例

- 米オライリー社（組版エンジンは AH Formatter）: [参考記事](https://blog.antenna.co.jp/ILSoft2/archives/820)
- 米アシェット社（組版エンジンは Prince）: [参考記事](https://www.xml.com/articles/2017/02/20/beyond-xml-making-books-html/)

上記アシェット社の事例（CSS 組版エンジン Prince を使用）についての参考記事によると、この記事が書かれた 2017 年 2 月の時点ですでに 7 年間 HTML+CSS で本を作っていたということなので、2010 年ごろには CSS 組版は実用化されていたといえます。

アンテナハウス社の組版エンジン AH Formatter（私がかつて開発に携わっていた）で CSS 組版をサポートしたのは 2009 年です。AH Formatter での CSS 組版によって、縦書きやルビや約物の処理など日本語組版に必要な機能も実現されていました。

### Vivliostyle の新しいところはオープンソースで Web ブラウザベース

Prince や AH Formatter は、本格的な商業出版にも利用できる実用的な組版エンジンですが、これらはオープンソースではなく商用ソフトウェアであり、個人が気軽に使えるようなものではありません。また、その当時も[WeasyPrint](https://weasyprint.org/)というオープンソースで開発されている CSS 組版エンジンはありましたが、サポートされている CSS 機能は限られていました（ただし現在ではだいぶ開発が進んでいるようです）。

そこで、オープンソースで、だれでも使える Web ブラウザベースで動く新しい CSS 組版エンジンを作ることで、もっと CSS 組版を普及させられるはずだと考えて、Vivliostyle プロジェクトをスタートしたのでした。

## Vivliostyle だけでない CSS 組版エンジンのまとめ

非オープンソース・商用 CSS 組版エンジンでは次の３つが有名です：

- [Prince](https://www.princexml.com/)
- [PDFreactor](https://www.pdfreactor.com/)
- [AH Formatter](https://www.antenna.co.jp/AHF/)

これらはどれも独自開発された本格的な組版エンジンであり、PDF 生成については PDF/A、PDF/X、PDF/UA の各 PDF 規格をサポートし、プロフェッショナルなニーズに対応するものです。

オープンソースの CSS 組版エンジンとして、Vivliostyle 以外に次の２つが有名です：

- [WeasyPrint](http://www.weasyprint.org)
  - 2011 年に開発スタート。Python で書かれている。PDF 生成には Cairo ライブラリが使われている。
- [Paged.js](https://pagedjs.org)
  - 2018 年に開発スタート。Vivliostyle と同様に Web ブラウザで動く JavaScript ライブラリとして作られている。

後発である Paged.js が実現しようとしていることは Vivliostyle と似ています。2018 年に Vivliostyle プロジェクトは今の形で再始動したのですが、その前は開発が停滞して CSS Paged Media の実装も中途半端で止まっていたために、新たなオープンソース・プロジェクトが必要だと考えた人たちが立ち上げたのが Paged.js です。その後 Vivliostyle もコミュニティベースでの開発を進めることができているので、互いによい競争相手といえます。

### 複数の CSS 組版エンジンを比較できる Web サイト PrintCSS.live など

[「Vivliostyle ユーザーと開発者の集い 2021春」](https://vivliostyle.connpass.com/event/208401/)での Andreas Zettl 氏の講演「Introduction to the PrintCSS Playground and PrintCSS Cloud」で紹介されている PrintCSS.live など、複数の CSS 組版エンジンを比較するのに役に立つサイトがあります：

- [PrintCSS.live - The PrintCSS Playground](https://printcss.live/)
  - HTML と CSS を指定して、組版エンジンを以下から選んで組版結果を確認できる:
    - AH Formatter, DocRaptor, paged.js, PDFreactor, Prince, typeset.sh, Vivliostyle, WeasyPrint
- [print-css.rocks - Introduction to PrintCSS and CSS Paged Media](https://print-css.rocks/)
  - それぞれの CSS 組版ツールの紹介や CSS Paged Media の入門など

### Vivliostyle 以外にも複数の実装があることのメリット

Vivliostyle 以外にも複数の CSS Paged Media 実装があるということは、ユーザーにとっても Vivliostyle にとってもメリットがあることです。

- CSS 組版を学ぶ材料がそれだけいろいろある
- 複数の実装があることで、CSS 仕様の標準化が進むことになる
  - W3C の CSS 仕様が正式な仕様（W3C 勧告）になるための条件として実装が複数あることが必須
  - CSS 仕様への提案をするのに複数の実装で協力できる
- 実装するときに互いに参考になる
  - CSS 機能を実装するとき、他の実装でどのように動作するか、またどのような問題があるかを見ることで学べることがある
- ユーザーにとっては選択肢があること
  - 現状はどの CSS 組版エンジンも一長一短あり、ほかのものと比較検討して最適なツールを選ぶことができるということはユーザーにとってメリット
- 競争があることで進歩
  - ほかの CSS 組版エンジンの開発が進んでいるのに Vivliostyle の開発が止まっていたのでは存在価値がなくなってしまうというプレッシャー
  - そのようなプレッシャーを他の実装に与えられるくらいになりたい

## CSS 組版入門のために

前項「Vivliostyle 以外にも複数の実装があることのメリット」のひとつとして「CSS 組版を学ぶ材料がそれだけいろいろある」をあげました。「PrintCSS」や「CSS Paged Media」を検索すると、Vivliostyle に限らない CSS 組版の情報がいろいろ見つかります。

### 『CSS ページ組版入門』（アンテナハウス）

CSS 組版についてのまとまった入門書として『CSS ページ組版入門』（アンテナハウス）があります。PDF 版もその CSS 組版ソースファイル（HTML+CSS などデータ）
も公開されているので、それ自体が CSS 組版のサンプルとして参考になります。

- [アンテナハウス CSSページ組版入門 第4版](https://www.antenna.co.jp/AHF/ahf_publication/#CSSPrint)

この『CSS ページ組版入門』は「『AH Formatter』の CSS 組版機能をご利用いただくための解説書」として公開されているものですが、独自拡張の機能を除けば CSS Paged Media など CSS 仕様には基本的に共通なので、AH Formatter 以外での CSS 組版にも役に立つはずです。

ただし、CSS 組版エンジンによってサポートされている CSS 機能に違いがあるため、ある CSS 組版エンジン用のサンプルが別の CSS 組版エンジンで組版したとき期待通りの結果にならないということはあります。

### Vivliostyle のサポートする CSS 機能

Vivliostyle での CSS 組版の機能を使いこなすためには、Vivliostyle が現状でどのような CSS の機能をサポートしているか把握することが必要です。そのための Vivliostyle のドキュメントとして「サポートする CSS 機能」を参照してください。

- [サポートするCSS機能 - Vivliostyle Docs](https://docs.vivliostyle.org/#/ja/supported-css-features)

このドキュメントは Vivliostyle で利用できるすべての CSS 機能をリストアップしたものですが、少し分かりにくいかもしれません。そこで以下に、ページメディア用 CSS 仕様に限って、サポート状況を簡潔にまとめます。

- [CSS Paged Media Level 3](https://www.w3.org/TR/css-page-3/)
  - ほぼフルサポート
- [CSS Generated Content for Paged Media](https://www.w3.org/TR/css-gcpm-3/)
  - 1.1 Named strings
  - 2 Footnotes
  - 3.1 Page Selectors: :nth(An+B)
  - 5.1 The target-counter() function
  - 5.2 The target-counters() function
- [CSS Fragmentation Level 3](https://www.w3.org/TR/css-break-3/)
  - ほぼフルサポート
- [CSS Page Floats](https://www.w3.org/TR/css-page-floats-3/)
  - 3.1 The float-reference property
  - 3.2 The float property
  - 4 The clear property

この「サポート状況」での「ほぼフルサポート」は、定義されている CSS プロパティをすべてサポートしているが細かな動作に問題が残っていることを意味します。

Vivliostyle での CSS サポートでの問題点や要望は [Vivliostyle.js の GitHub issues](https://github.com/vivliostyle/vivliostyle.js/issues) にいろいろと登録されています。登録されていない問題に気がついた方は、ぜひ issue 登録などで報告お願いします。
