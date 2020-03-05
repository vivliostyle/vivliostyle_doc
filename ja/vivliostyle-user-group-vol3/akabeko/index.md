---
title: Vivliostyle Flavored Markdown について
author:
  - akabeko
---
# Vivliostyle Flavored Markdown について

<div class="draft-author">
akabeko
</div>

現在 Vivliostyle プロジェクトで策定中の VFM (Vivliostyle Flavored Markdown) について。

## Markdown を採用する動機

構造化された文章を書く手段として HTML や XML といったマークアップ言語は優れている。可変長の文中に出現する要素をマークアップするための設計として、タグで囲むという発想は素晴らしい。この設計により位置情報と範囲のような文量に影響される情報を持つことなく、要素をマークアップできる。

しかし文章を書くための記法としては冗長に感じられる。例えば見出しと段落。これらは文章中に出現しがちだが、その都度 `<h2>見出し</h2>` や `<p>文章...</p>` と書くのは面倒だ。またテキスト エディターの入力補完や構文チェックなどの支援がないと、タグの整合を壊しやすい。

ならば頻出するものを簡易な記法で書き、必要に応じて HTML などへ変換するのはどうか。このような発想により簡易マークアップ言語が生まれた。私の知るものでは [Textile](https://textile-lang.com/) と [Markdown](https://daringfireball.net/projects/markdown/) がある。

Textile は 10 年ほど前、業務の課題管理のために導入した Redmine で知った。初めて触れた簡易マークアップ言語ということ、テーブルで結合を扱えるなど記述力も高いことから、これが本命だと考えていた。

一方、ソフトウェア開発業界では 2010 年代に GitHub が躍進。サービス上で文章を記述する標準書式として [GFM (GitHub Flavored Markdown)](https://github.github.com/gfm/) が採用された。これが契機だったのだろう、Markdown はソフトウェア エンジニアの間で広く普及してゆく。あわせて多くの解析・変換ツールが開発され、様々な CMS が採用し、テキスト エディター対応も進んだ。

私が Markdown を採用する動機として最たるものは、この普及度に比例した周辺環境の充実である。

しかし課題もある。Markdown は標準仕様を定めていない。そのため方言が乱立していた。この事態を問題視した人たちにより [CommonMark](https://commonmark.org/) が生み出される。現在の GFM もこれに基づいており、仕様の冒頭で以下のように宣言している。

> This formal specification is based on the [CommonMark Spec](http://spec.commonmark.org/) by [John MacFarlane](http://github.com/jgm) and licensed under ![Creative Commons BY-SA](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)

実質標準である GFM も CommonMark を基に拡張されるのだから、実用面、規格面ともにこれを採用すればめでたしめでたし。GFM は HTML 埋め込みをサポートしているので、記法が物足りないならこれで補えばよい。

しかし文章、それも言語固有のものや書籍として必要な頻出要素 (ルビや脚注など) について HTML 埋め込みだけで対応するのは難しい。そのため Vivliostyle Project ではあえて新たな方言を定義することにした。それが [VFM (Vivliostyle Flavored Markdown)](https://github.com/vivliostyle/vfm) である。

## VFM (Vivliostyle Flavored Markdown)

Vivliostyle Project は 2019/9 から毎月、[開発者会議](https://github.com/vivliostyle/discussion/wiki/slack-meeting-log)を開催している。ここでは Vivliostyle の開発方針や新機能などを議論するのだが、その中で直に HTML/CSS 編集せず簡易マークアップ言語で組版したいという話題があった。

既に Vivliostyle ユーザー会として頒布した技術同人誌も、文章を Markdown で書いて HTML に変換、Vivliostyle で CSS 組版する方法を採用している。

- Vivliostyle で本を作ろう Vol.1 https://github.com/spring-raining/tbf06-draft
- Vivliostyle で本を作ろう Vol.2 https://github.com/spring-raining/tbf07-draft

これらは [remark](https://github.com/remarkjs/remark) とその周辺ツールで Markdown を解析、得られた AST (Abstract Syntax Tree) を利用して好みの HTML を書き出した。しかし Markdown と HTML 間の変換則は特に定義しておらず、概ね GFM でルビや脚注などを追加するようになっている。

開発者会議にて、この変換則を Vivliostyle として定義するのはどうか？と提案された。[2019/11/3 のログ](https://github.com/vivliostyle/discussion/wiki/slack-meeting-log-2019-11-03)から引用する。

> **U:** spring-raining さんの tbf07-draft に含まれている拡張された Markdown 記法が素晴らしかったです。書籍執筆用に拡張した Markdown 方言とパーサーを作るのはファンプロジェクトとして面白いでしょう。
>
> **spring-raining:** ありがとうございますー 🙇 Remark めっちゃ楽しいですよね
>
> **U:** Remark は面白いです。このような拡張を util として提供するのではなく、GFM のように名前をつけて Markdown 方言として育てていけたら車輪の再発明をしなくて済んで良いと思いました。

この提案について Vivliostyle 開発メンバーは賛同。その後、協議を重ねて書式を VFM (Vivliostyle Flavored Markdown) と名付けることにした。VFM の仕様と記法は主に GitHub の issues と Slack で検討されている。

- vivliostyle/vfm https://github.com/vivliostyle/vfm/issues
- Slack https://vivliostyle.slack.com/

VFM は Markdown という簡易マークアップ言語を採用することで文章と CSS 組版に集中するための方法として期待している。これまで CSS 組版と Vivliostyle には関心があっても、文章のために HTML を書くのは厳しいと感じていた人への訴求力がある。

私自身、そう考えていたが「Vivliostyle で本を作ろう Vol.1」で Markdown と組み合わせる方法を知り「Vivliostyle で本を作ろう Vol.2」で実際に利用してみて、この方向に大きな可能性を見出した。

読者のあなたへ。おそらく Vivliostyle と CSS 組版に関心があるのだと想像しています。もしそうれであれば、これを飛躍させるための一助として VFM の議論に参加していただけると幸いです。
