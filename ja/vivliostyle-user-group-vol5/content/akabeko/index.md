---
title: "VFM 入門 2021 夏"
author: "アカベコ"
---

# VFM 入門 2021 夏

<div class="doc-author">
アカベコ
</div>

VFM (Vivliostyle Flavored Markdown) の入門記事です。内容は執筆時点の最新版となる 1.0.0-alpha.22 へ基づきます。

## VFM とは？

Vivliostyle プロジェクト向けの Markdown 方言として 2020/7 に始まりました。以下の方針で開発されています。

1. 仕様と実装はオープン ソースとする
2. CommonMark および GFM を基本として構文を拡張する

既に 1 年ほど開発され、バージョン 1.0.0 の正式リリースも近づいてきました。また Create Book や Vivliostyle CLI、本年度のリリースを目指す Vivliostyle Pub など VFM を採用するプロジェクトも増えるため、そろそろ記法などをまとめておきたいと考えていました。

以上を踏まえ本稿は VFM で原稿を書くために必要な情報を解説します。

## 環境構築

### Node.js と npm

VFM および、これを採用する Vivliostyle 関連プロジェクトは主に Node.js 上で動作します。Node.js のインストール方法は複数ありますが、最も簡単なのは[公式サイト](https://nodejs.org/ja/)から入手したインストーラーを実行することです。

Node.js がインストールできたら、次はコマンドを実行するための環境を用意します。ここでは Windows 10 と macOS 11 に限定して OS 標準でも利用可能なものを挙げます。本稿では以後、これらをまとめて**ターミナル**と呼びます。

| OS      | ターミナル                     |
| ------- | ------------------------------ |
| Windows | コマンドプロンプト、PowerShell |
| macOS   | ターミナル                     |

ターミナルを起動すると文字だけのウィンドウが表示され、ユーザーからの入力を待っている状態となります。そこで以下のコマンドを入力してからキーボードの <kbd>Enter</kbd> キーを押して実行しましょう。

```
node -v
```

Node.js のインストールに成功していれば以下のようにバージョンが表示されるはずです。

```
v16.2.0
```

更に以下を実行してみてください。

```
npm -v
```

すると今度は以下のように npm というソフトウェアのバージョンが表示されるはずです。

```
7.13.0
```

これで Node.js と npm が利用可能なことを確認できました。これらはそれぞれ以下の役割を持ちます。

| ソフトウェア | 役割                                   |
| ------------ | -------------------------------------- |
| Node.js      | VFM などを動かすために必要。           |
| npm          | VFM などをインストールするために必要。 |

### Create Book

VFM により原稿を執筆するための環境を Vivliostyle ファミリーの Create Book により構築します。ターミナルを起動して以下のコマンドを実行してください。

```
cd 作業用フォルダーのパス
```

`作業用フォルダーのパス` は適当なフォルダーのパスを指定してください。Windows 10 なら `ドキュメント`、macOS は `書類` あたりがよいでしょう。Explorer や Finder でこれらの場所へ移動して、アドレスバーなどからパスをコピーして貼り付けてみてください。

`cd` コマンドが成功すればターミナル上で指定した場所へ移動しているはずです。この状態で更にターミナルから以下のコマンドを実行します。

```
npm create book sample
```

するといくつか質問されますので回答しながら <kbd>Enter</kbd> キーで確定させてゆきます。以下は筆者の環境における回答例です。

```
? description sample
? author name akabeko
? author email example.com
? license MIT
? choose theme @vivliostyle/theme-techbook - Techbook (技術同人誌) theme

Creating a new package in /Users/akabeko/Documents/sample.
```

ここまでの操作で作業用フォルダー内に `sample` というフォルダーが作られました。ここが執筆のための場所となります。ターミナルから以下のコマンドを実行して、そこへ移動します。

```
cd sample
```

移動に成功したら Vivliostyle による原稿のプレビューを起動してみましょう。ターミナルから以下のコマンドを実行してください。

```
npm run preview
```

すると Web ブラウザー (Chromium) が起動され、そこにサンプル原稿のプレビューを表示します。`sample` フォルダーには `manuscript.md` という Markdown ファイルがあります。これをテキスト エディターで編集、保存してみてください。連動して Web ブラウザー上のプレビューも更新されるはずです。

プレビューを終了させるには以下のどちらかを実行します。

- プレビュー用に起動された Web ブラウザーを終了させる
- プレビュー用コマンド実行中のターミナルに対して <kbd>Ctrl</kbd> + <kbd>C</kbd> を入力

これで環境構築は完了です。あとは本稿を参考に `manuscript.md` を編集、保存しながら VFM の記法を試してください。

テキスト エディターはお好みで。筆者は Visual Studio Code を愛用しており、本稿もこれで執筆しました。

## VFM の構文

ここからは VFM の構文を紹介してゆきます。

[CommonMark](https://commonmark.org/) と [GFM](https://github.github.com/gfm/) を基本としていますが、これらは広く普及しているため本稿では取り上げません。以下の公式ページを参考にするか `GFM 書き方` というキーワードで Google 検索するとわかりやすい記事が見つかるでしょう。

それでは構文の解説に入りましょう。

### 構文解説の読み方

公式の仕様書を元に補足してゆく形式となります。

- [Vivliostyle Flavored Markdown: Working Draft](https://vivliostyle.github.io/vfm/#/vfm)

#### VFM

VFM の Markdown 記述例です。

```
VFM の文書
```

#### HTML

VFM から変換された HTML の例です。

```html
<p>VFM の文書</p>
```

#### CSS

VFM から変換された HTML に対する CSS セレクターの定義例です。

```css
p {
}
```

### Code

プログラミング言語のソースコードなどを掲載するための構文です。言語名を指定すると [Prism](https://prismjs.com/) による構文強調を利用できます。

#### VFM

````md
```javascript
function main() {}
```
````

#### HTML

```html
<pre class="language-javascript">
<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre>
```

#### CSS

```css
pre {
}
pre code {
}
```

### Code with caption

Code 記法にはキャプションも指定できます。言語名に続けて `:文字列` とするか ` title=文字列` と記述することで Code 記法から変換された HTML が `<figure>` に包まれ、キャプションが `<figcaption>` として出力されます。

ソースコードのファイル名や簡単な補足情報を表現する、などの用途に便利です。

#### VFM

````md
```javascript:app.js
function main() {}
```
````

or

````md
```javascript title=app.js
function main() {}
```
````

#### HTML

```html
<figure class="language-javascript">
  <figcaption>app.js</figcaption>
  <pre>
    <code class="language-javascript">
      function main() {}
    </code>
  </pre>
</figure>
```

#### CSS

```css
figure[class^="language-"] {
}
figure[class^="language-"] figcaption {
}
figure[class^="language-"] pre {
}
figure[class^="language-"] pre code {
}
```

### Image with caption and single line

画像の記法は GMF を踏襲していますが VFM の拡張があります。

画像記法における `alt` を定義すると変換された HTML が `<figure>` に包まれ、`alt` が `<figcaption>` として出力されます。また記法の直後に `{attr="value"}` を記述すると HTML の属性値に変換されます。

属性値について特別なルールがあります。変換された HTML を `<figure>` で包む際、以下の処理が実行されます。

1. `id` を `<img>` から `<figure>` へ移動
2. `<img>` 固有の属性 (`alt` や `src` など) 以外を `<figure>` へコピー

包み込みにより `<figure>` は `<img>` を意味的に代理するため、`id` はそちらへ移動しています。属性のコピーも代理であることを考慮してのことですが `alt` を対象にすると Web ブラウザーのスクリーン リーダーが `<img>` とあわせて二重に読み上げる問題もあるため、除外しました。

#### VFM

```md
![Figure 1](./fig1.png)

![Figure 2](./fig2.png "Figure 2"){id="image" data-sample="sample"}

text ![Figure 3](./fig3.png)
```

#### HTML

```html
<figure>
  <img src="./fig1.png" alt="Figure 1" />
  <figcaption>Figure 1</figcaption>
</figure>
<figure id="image" title="Figure 2" data-sample="sample">
  <img src="./fig2.png" alt="caption" title="Figure 2" data-sample="sample" />
  <figcaption>Figure 2</figcaption>
</figure>
<p>text <img src="./fig3.png" alt="Figure 3" /></p>
```

#### CSS

```css
figure img {
}
figure figcaption {
}
```

### Ruby

テキストの側面にルビ (注釈テキスト) を振るための記法です。本稿の時点では単一のテキストとルビに限定して対応しています。

小説などテキスト主体の書籍において、ルビは表現の幅を広げる重要な機能といえます。そのため以下の仕様検討 Issue でも機能強化を検討中です。興味を持たれたなら議論に参加していただけると幸いです。

- [spec: Ruby annotation](https://github.com/vivliostyle/vfm/issues/10)

#### VFM

```
This is {Ruby|ルビ}
```

#### HTML

```html
This is <ruby>Ruby<rt>ルビ</rt></ruby>
```

#### CSS

```css
ruby {
}
ruby rt {
}
```

### Sectionization

`<h1>` から `<h6>` までの見出しにあわせて階層化された `<section>` を出力します。Pandoc における Markdown からの HTML 変換と同様に階層を示すクラスも出力されます。文章の階層構造 (章・節・項など) に基づく CSS セレクター定義に便利です。

`<section>` の階層化ルールは以下となります。

- 見出しを対象とします
- 見出しの親が `blockquote` の場合はセクション化しません
- 見出しの属性は基本的に `<section>` へコピーされます
- ただし `hidden` 属性はコピーされず見出しだけに適用されます
- 見出しの `id` 属性は `<section>` へ移動されます
- 見出しの深さに一致するように `<section>` へ `levelN` クラスを設定します

#### VFM

```md
# Plain

# Introduction {#intro}

# Welcome {.title}

# Level 1

## Level 2

> # Not Sectionize
```

#### HTML

```html
<section id="plain" class="level1">
  <h1>Plain</h1>
</section>

<section id="intro" class="level1">
  <h1>Introduction</h1>
</section>

<section class="level1 title" id="welcome">
  <h1 class="title">Welcome</h1>
</section>

<section id="level-1" class="level1">
  <h1>Level 1</h1>
  <section id="level-2" class="level2">
    <h2>Level 2</h2>
  </section>
</section>

<blockquote>
  <h1 id="not-sectionize">Not Sectionize</h1>
</blockquote>
```

#### CSS

```css
body > section {
}
body > section > h1:first-child {
}

section.title {
}

section.title > h1:first-child {
}

.level1 {
}
.level2 {
}

blockquote > h1 {
}
```

### Raw HTML

VFM では難しい表現がある場合、生の HTML を利用できます。

ただし HTML 内へ Markdown を含める場合は注意してください。基本的に HTML 内のテキストはそのまま出力されます。そのため空行を入れて HTML と Markdown を個別に処理させることで組合わせます。

#### VFM

```markdown
<div class="custom">
  <p>Hey</p>
</div>

<div class="custom2">

# Heading

</div>
```

#### HTML

```html
<div class="custom">
  <p>Hey</p>
</div>
<div class="custom2">
  <section id="heading" class="level1">
    <h1>Heading</h1>
  </section>
</div>
```

### Math equation

[MathJax](https://www.mathjax.org/) の数式を処理します。

`$...$` でインライン数式、`$$...$$` はディスプレイ数式となります。

数式内で `$` を記述する場合は `\$` と書いてください。インライン数式の終端となる `$` に続けて `$5` のように数値を記述すると終端として扱われません。これは通貨としての `$` を考慮しての仕様です。

インライン、ディスプレイともに複数行に対応しています。ただし複数行で書く場合は `$...$` や `$$...$$` の間に空行を入れないでください。空行があると前後が別段落として分離されるため、数式として処理できません。

#### VFM

```markdown
inline:$x = y$

display: $$1 + 1 = 2$$
```

#### HTML

MathJax を Vivliostyle で処理するため、特別に `<script>` タグも追加されます。対象は CDN で配布される MathJax のうち、Vivliostyle がサポート対象とするバージョンの URL となります。

```html
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML"></script>
  </head>
  <body>
    <p>inline: <span class="math inline" data-math-typeset="true>"\(x = y\)</span></p>
    <p>display: <span class="math display" data-math-typeset="true">$$1 + 1 = 2$$</span></p>
  </body>
</html>
```

#### CSS

```css
.math.inline {
}

.math.display {
}
```

### Frontmatter

Markdown の先頭に YAML 形式で文書のメタデータを定義できます。

```yaml
---
title: "Introduction to VFM"
author: "Author"
class: "my-class"
math: true
---
```

現時点で対応しているプロパティーは以下となります。

| Property | Type    | Description                                                            |
| -------- | ------- | ---------------------------------------------------------------------- |
| title    | String  | `<title>` の内容。未指定の場合は本文で最初に出現する見出し要素を参照。 |
| author   | String  | 著者。`<meta name="author">` の `content` 属性値となります。           |
| class    | String  | `<body>` の `class` 属性値。                                           |
| math     | Boolean | 数式処理フラグ。既定値は `true`。無効にしたい場合は `false` を指定。   |
| theme    | String  | Vivliostyle CLI 用の themes 指定。                                     |

本稿の執筆には間に合いませんでしたが、この機能は近く大幅に拡張される予定です。先取り情報としてその内容を掲載します。

| Property |    Type    | Description                                                     |
| -------: | :--------: | --------------------------------------------------------------- |
|    `vfm` |  `Object`  | VFM の設定。`math` と `theme` をこちらへ移動予定。              |
|   `html` |  `Object`  | `<html>` の属性を Key/Value 形式で定義。                        |
|   `lang` |  `String`  | `<html lang="...">` に対応。                                    |
|    `dir` |  `String`  | `<html dir="..."` に対応。                                      |
|     `id` |  `String`  | `<html id="...">` に対応。                                      |
|  `class` |  `String`  | `<html class="">` に対応。                                      |
|   `body` |  `Object`  | `<body>` の属性を Key/Value 形式で定義。                        |
|   `head` |  `String`  | `<head>` 内容を複数行テキストとして定義。                       |
|  `title` |  `String`  | `<title>` に対応。                                              |
|  `style` |  `String`  | `<style>` の内容を複数行テキストとして定義。                    |
|   `link` | `Object[]` | `<link>` の属性を Key/Value 形式の配列で定義。                  |
| `script` | `Object[]` | `<script>` の属性を Key/Value 形式の配列で定義。                |
|   `base` |  `Object`  | `<base>` の属性を Key/Value 形式で定義。                        |
|   `meta` |  `Object`  | `<meta>` の `name` と `content` Key/Value 形式で定義 (列挙)。   |
|   その他 |  `String`  | `<meta>` 扱い。プロパティー名 = `name`、値 = `content` に対応。 |

`style` と `head` のように `head` 内で競合するものは他のプロパティーの後に末尾へ `style`、`head` の順で出力されます。そのため HTML の評価順によって後勝ちとなります。

### Footnotes

脚注です。Pandoc における Markdown と HTML 変換形式を踏襲しています。

文中へ `[^1]` のように定義し、別の段落行頭に対応する `[^1]:` を記述します。文中側は 1 〜 N の連番で脚注となり、対応するテキストへリンクされます。脚注の定義は `[^issues]` のように数値以外でも自動的に出現順で連番化されます。そのため数値以外とするほうが対応付けを確認するのに便利かもしれません。

もう一つの記法としてインラインがあります。これは `^[This part is a footnote.]` のように一つの定義で脚注を定義できます。短い文章に向きます。

#### VFM

```markdown
VFM is developed in the GitHub repository[^1].
Issues are managed on GitHub[^issues].
Footnotes can also be written inline^[This part is a footnote.].

[^1]: [VFM](https://github.com/vivliostyle/vfm)
[^issues]: [Issues](https://github.com/vivliostyle/vfm/issues)
```

#### HTML

実際の HTML は横に長いので、適宜改行を入れています。

```html
<p>
  VFM is developed in the GitHub repository
  <a id="fnref1" href="#fn1" class="footnote-ref" role="doc-noteref">
    <sup>1</sup>
  </a>. Issues are managed on GitHub
  <a id="fnref2" href="#fn2" class="footnote-ref" role="doc-noteref">
    <sup>2</sup>
  </a>. Footnotes can also be written inline
  <a id="fnref3" href="#fn3" class="footnote-ref" role="doc-noteref">
    <sup>3</sup>
  </a>.
</p>
<section class="footnotes" role="doc-endnotes">
  <hr />
  <ol>
    <li id="fn1" role="doc-endnote">
      <a href="https://github.com/vivliostyle/vfm">VFM</a>
      <a href="#fnref1" class="footnote-back" role="doc-backlink">↩</a>
    </li>
    <li id="fn2" role="doc-endnote">
      <a href="https://github.com/vivliostyle/vfm/issues">Issues</a>
      <a href="#fnref2" class="footnote-back" role="doc-backlink">↩</a>
    </li>
    <li id="fn3" role="doc-endnote">
      This part is a footnote.
      <a href="#fnref3" class="footnote-back" role="doc-backlink">↩</a>
    </li>
  </ol>
</section>
```

#### CSS

```css
.footnotes {
}
```

### Hard new line (optional)

Markdown の段落内における改行は通常、行末にスペース 2 文字を入れるか `<br>` タグ記述を必要とします。この機能を有効にするとそうした指定をせずとも Markdown 上の改行がそのまま `<br>` として出力されます。

文章主体の書籍で明示的な改行が多い場合に便利です。ただしあらゆる改行を `<br>` とするため前述の Raw HTML を利用して記述した一部の HTML や SVG 内の改行が `<br>` となってしまいます。この問題の詳細は以下の GitHub Issue を参照してください。

- [svg タグ内の改行が br タグに変換される](https://github.com/vivliostyle/vfm/issues/38)

現在の VFM としては標準では無効化されており、オプションで有効にする必要があります。

#### VFM

```md
はじめまして。

Vivliostyle Flavored Markdown（略して VFM）の世界へようこそ。
VFM は出版物の執筆に適した Markdown 方言であり、...
```

#### HTML

```html
<!-- hardLineBreaks: true -->
<p>はじめまして。</p>
<p>
  Vivliostyle Flavored Markdown（略して VFM）の世界へようこそ。<br />
  VFM は出版物の執筆に適した Markdown 方言であり、...
</p>

<!-- hardLineBreaks: false (Default) -->
<p>はじめまして。</p>
<p>
  Vivliostyle Flavored Markdown（略して VFM）の世界へようこそ。
  VFM は出版物の執筆に適した Markdown 方言であり、...
</p>
```

#### CSS

```css
p {
}
```

## おわりに

VFM は文章作成を目的とした Markdown 方言です。そのため文章を扱う方々との議論を重視しています。

もし意見や要望などがあれば、以下へ問い合わせてください。日本語でも大丈夫ですので、気軽にどうぞ！

- [Vivliostyle Slack](https://vivliostyle.slack.com/)
- [Issues - vivliostyle/vfm](https://github.com/vivliostyle/vfm/issues)
