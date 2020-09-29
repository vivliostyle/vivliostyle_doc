---
title: Remark で広げる Markdown の世界
author:
  - spring-raining
---

# Remark で広げる Markdown の世界

<div class="draft-author">
緑豆はるさめ（@spring_raining）
</div>

はじめましてこんにちは、はるさめです。本誌は名目上 Vivliostyle について紹介する同人誌なのですが、またしても空気を読まず Vivliostyle ではない OSS プロジェクト「**Remark**」について紹介したいと思います。

## Remark

Remark とは「Markdown processor」という紹介文の通り、Markdown で書かれたテキストを読み込み様々な変換を施すことができる JavaScript 製のライブラリです。Remark は様々なライブラリと組み合わせて目的の形式のテキストに変換でき、**Rehype** と一緒に使うことで Markdown を HTML に変換できます。同様の処理をしてくれるライブラリとしては Marked.js が有名ですが、Remark の強力な機能は、Markdown を **抽象構文木（AST）**に変換することで、より柔軟に構文を改造できる点です。[^ Haskell 製のライブラリ **<a href="https://pandoc.org/">Pandoc</a>** も同様の方針で実装されたテキスト変換ツールで、様々な形式のテキストを入力・出力できます]

なお、非常に紛らわしいのですが、GitHub 上で検索すると「Remark」という名前のプロジェクトが 2 つ見つかります。今回紹介するプロジェクトは `gnab/remark` ではなく、`remarkjs/remark` のほうです。公式サイトも https://remarkjs.com ではなく https://remark.js.org なので気をつけてください。


## Unified エコシステム

Remark をはじめとしたライブラリ群は役割ごとに細かくパッケージ化されており、それぞれの目的に応じて複数を組み合わせて用います。それぞれのパッケージは総称して **Unified** というプロジェクトに属しているのですが、各パッケージの役割が少し分かりづらいためここで整理しておきます。

- **[remark](https://github.com/remarkjs/remark)/[rehype](https://github.com/rehypejs/rehype)** : Markdown/HTML の構文を解析・構築する処理系。それぞれに **parse** と **stringify** の 2 つのパッケージがあり、**[remark-parse](https://github.com/remarkjs/remark/tree/master/packages/remark-parse)** は Markdown から mdast をへ変換でき、**[remark-stringify](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)** は mdast からテキストの Markdown を構築できる
- **[mdast](https://github.com/syntax-tree/mdast)/[hast](https://github.com/syntax-tree/hast)** : Markdown/HTML の構文を解析して得られる AST の仕様。それぞれの仕様は **[unist](https://github.com/syntax-tree/unist)** という仕様を拡張して定義されており、GitHub 上では `syntax-tree` という Organization で管理されている
- **[remark-rehype](https://github.com/remarkjs/remark-rehype)/[rehype-remark](https://github.com/rehypejs/rehype-remark)** : mdast（hast）から hast（mdast）に変換するパッケージ。実際の処理は **[mdast-util-to-hast](https://github.com/syntax-tree/mdast-util-to-hast)/[hast-util-to-mdast](https://github.com/syntax-tree/hast-util-to-mdast)** が実施している。
- **[vfile](https://github.com/vfile/vfile)** : ファイルのパス情報を抽象化して管理するパッケージ
- **[unified](https://github.com/unifiedjs/unified)** : Unified ファミリーの複数のライブラリを合成し、処理を実行する関数を得るためのパッケージ

これらの処理をまとめた、unified の README にある便利な図を引用します。

```
| ........................ process ........................... |
| .......... parse ... | ... run ... | ... stringify ..........|

          +--------+                     +----------+
Input ->- | Parser | ->- Syntax Tree ->- | Compiler | ->- Output
          +--------+          |          +----------+
                              X
                              |
                      +--------------+
                      | Transformers |
                      +--------------+
```

Remark を使って文章を変換しようとする際は、`parse`、`run`、`stringify` の 3 つの処理を経ることになります。例えば Markdown から HTML へ変換する際は、**remark-parse** を使って mdast 形式に解析し、**remark-rehype** を使って hast 形式に変換した後 **rehype-stringify** で HTML 形式のテキストを出力します。


## Markdown をパースしてみる

まずは Remark を使って Markdown を HTML に変換するところから始めてみます。ひとまず以下のパッケージをインストールします。[^ 以降の例では Node.js 上での実行を前提としますが、Remark はブラウザ上でも問題無く動作します]

```
npm i -s unified remark-parse remark-rehype rehype-stringify
```

インストールした Remark を使って簡単な Markdown をパースしてみます。以下のコードは、`input` に Markdown で記述した文字列を用意しており、`processor.process()` で HTML に変換しています。

```js
const unified = require('unified');
const markdown = require('remark-parse');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(html);
const input = `
# はじめてのRemark
**太字**_斜体_テキスト
`;
processor.process(input).then(({ contents }) => {
  console.log(contents);
});
```

このコードを実行すると、以下の出力が得られます。まさに期待した通りの HTML です！

```html
<h1>はじめてのRemark</h1>
<p><strong>太字</strong><em>斜体</em>テキスト</p>
```

「Unified エコシステム」で紹介した通り、`processor` は `parse`、`run`、`stringify` を連続して実行したものです。以下のコードで、`parse` 終了時と `run` 終了時の内容を見てみましょう。

```js
const inspect = require('unist-util-inspect');

const parsed = processor.parse(input);
console.log(inspect(parsed));
const transformed = processor.runSync(parsed);
console.log(inspect(transformed));
```

2 回のコンソール出力では、それぞれ以下のように Markdown と HTML の AST が確認できます[^ `unist-util-inspect` は AST を分かりやすく表示させるユーティリティーです。`inspect` せずに表示させると、同じ構造を持つ Object が得られます。]。それぞれの AST について、少し踏み込んで見ます。

### Markdown の AST（mdast）

```
root[2] (1:1-4:1, 0-30)
├─ heading[1] (2:1-2:14, 1-14) [depth=1]
│  └─ text: "はじめてのRemark" (2:3-2:14, 3-14)
└─ paragraph[3] (3:1-3:15, 15-29)
    ├─ strong[1] (3:1-3:7, 15-21)
    │  └─ text: "太字" (3:3-3:5, 17-19)
    ├─ emphasis[1] (3:7-3:11, 21-25)
    │  └─ text: "斜体" (3:8-3:10, 22-24)
    └─ text: "テキスト" (3:11-3:15, 25-29)
```

AST はその名の通り、木構造で構成されています。木構造とは、ノードと呼ばれる項目同士が紐付いて 1 つになった構造のことで、1 つの根（root）ノードが 1 つ以上の子ノードを持ち、そのノードがまた別の子ノードを持つ…というつながりにより木のように広がる構造を持ちます。

mdast では、葉（子ノードを持たないノード）は基本的に `text` というノードになり、`heading`（見出し）、`paragraph`（段落）のようにそれぞれの属性を表すノードが親となります。また、`heading` の `depth`（見出しの大きさ）のようにそのノード自体にも任意の情報を持たせることができます。また、各ノードの `(1:1-4:1, 0-37)` のような数字は、そのノードが元の文章の何行目・何文字目にあたるかを表しており、この情報を使って元文章に注釈をつけるといった活用ができるようになります。

### HTML の AST（hast）

```
root[3] (1:1-4:1, 0-30)
├─ element[1] (2:1-2:14, 1-14) [tagName="h1"]
│  └─ text: "はじめてのRemark" (2:3-2:14, 3-14)
├─ text: "\n"
└─ element[3] (3:1-3:15, 15-29) [tagName="p"]
    ├─ element[1] (3:1-3:7, 15-21) [tagName="strong"]
    │  └─ text: "太字" (3:3-3:5, 17-19)
    ├─ element[1] (3:7-3:11, 21-25) [tagName="em"]
    │  └─ text: "斜体" (3:8-3:10, 22-24)
    └─ text: "テキスト" (3:11-3:15, 25-29)
```

hast も基本的な構造は同じですが、`paragraph` などの代わりに `element` というノードが用いられています。この構造を見てピンと来たかと思いますが、hast は実のところ HTML のタグの構造と全く同じです。`tagName` はそのノードが何の HTML タグに置き換わるかを示しています。


## Parser を拡張してみる

AST による文章の構造化により、Remark は要求に応じて構文を定義することが簡単にできることが特徴です。それでは、本章で実際に独自の Markdown を作ってみます。今回はふりがなをふることができる「ルビ」を独自の構文で定義してみましょう。ルビを表現するための構文は色々と考えられますが、今回は某小説投稿サイトにしたがって以下のようなルールの構文を作ります。

- 縦棒 `｜` でルビの開始地点を表す
- 二重山括弧 `《》` の中にルビ本体を記述する

すなわち、<ruby>禁書目録<rt>インデックス</rt></ruby>を表すためには `｜禁書目録《インデックス》` のように書く、ということになります。

Parser を拡張するためにはいくつか方法がありますが、今回は remark-parse の動作に手を加えることで実現しようと思います。まず、Markdown を mdast 形式に変換する際にこの構文を正しく解析できるよう、プラグインとなる関数を用意するところから始めます。

```js
function rubyAttacher() {
  const { Parser } = this;
  if (!Parser) {
    return;
  }
  const {inlineTokenizers, inlineMethods} = Parser.prototype;
}
```

プラグイン関数中の remark-parse 実装は `Parser` として定義されており、その中でも Tokenizer（字句解析; 文字列を適切な箇所で区切る処理）は大別して `blockTokenizers` と `inlineTokenizers` という名前で用意されます。今回のルビを字句解析する処理は、`inlineTokenizers` に追加します。

```js
function rubyLocator(value, fromIndex) {
  return value.indexOf('｜', fromIndex);
}
function rubyTokenizer(eat, value, silent) {
  if (value.charAt(0) !== '｜') {
    return;
  }
  const rtStartIndex = value.indexOf('《');
  const rtEndIndex = value.indexOf('》', rtStartIndex);
  if (rtStartIndex <= 0 || rtEndIndex <= 0) {
    return;
  }
  const rubyRef = value.slice(1, rtStartIndex);
  const rubyText = value.slice(rtStartIndex + 1, rtEndIndex);
  if (silent) {
    return true; // Silentモードはconsumeせずtrueを返す
  }
  const now = eat.now(); // テキスト中の現在の位置を取得
  now.column += 1;
  now.offset += 1;
  return eat(value.slice(0, rtEndIndex + 1))({
    type: 'ruby',
    rubyText,
    children: this.tokenizeInline(rubyRef, now),
    data: { hName: 'ruby' },
  });
}
```

remark-parse でオリジナルの字句解析を実装するためには、**locator** と **tokenizer** の 2 つの関数が必要です。locator はその文法が何文字目から始まるかを指示する関数で、tokenizer で実際に文字列を区切る処理を実装します。ここでの locator は、単にルビの開始地点（`｜` の位置）を返すだけの関数です。

上記の tokenizer は、`《` と `》` の位置を元にルビの対象となるテキスト `rubyRef` とルビの内容 `rubyText` を取り出す処理を書いたものです。`eat` という関数は tokenizer を読みすすめるための関数で、引数にルビとして consume（消費）する文字列を与えることでその分だけ字句解析を進めます。`eat` の返値は関数になっており、消費した文字列に対応する mdast のノードを与えることで AST の構文木に追加できます。また、`now` は tokenizer の開始地点が元の文章のどの位置に対応するかを表します。参考コードのように、読み進める文字数だけ `column` と `offset`  の値を更新した上で `tokenizeInline` に与えることで、再帰的に実行される tokenizer の位置情報を更新しています。

```js
function rubyAttacher() {
  ...
  rubyTokenizer.locator = rubyLocator;
  inlineTokenizers.ruby = rubyTokenizer;
  inlineMethods.splice(inlineMethods.indexOf('text'), 0, 'ruby');
}
```

定義した locator と tokenizer を利用するよう `rubyAttacher` を修正します。`inlineMethod` には適用する tokenizer の名前が配列で示されており、配列内の順番がそのまま tokenizer を実行する順番（=優先順位）になります。これでプラグイン関数は完成です。[^ 参考コードの `rubyTokenizer` はとても簡単なケースにしか対応しておらず、まだまだ改善すべき点があります。例えばルビの入れ子が含まれた場合どうなるでしょうか？]

```js
const processor = unified()
  .use(markdown)
  .use(rubyAttacher)
  .use(remark2rehype)
  .use(html);
```

プラグインは unified のメソッドチェーンに付け加えるだけで利用できます（順番に気をつけてください）。早速 mdast へのパース結果を見てみましょう。

```
root[1]
└─ paragraph[2]
   ├─ text: "とある魔術の"
   └─ ruby[1] [rubyText="インデックス"][data={"hName":"ruby"}]
      └─ text: "禁書目録"
```

正しくパースされているようです！　ルビの内容を `rubyText` に入れることで、このあと HTML への変換時に用いることができます。また、`hName` という名前のプロパティは remark-rehype が読み取りに対応しており、HTML 変換時のタグ名を指定できます。


## Transformer を拡張してみる

次に、解析された構文木を正しく HTML に変換するため Transformer を改造します。remark-rehype にはオプションとして handler を追加できるため、ルビ用の handler を用意する形で実装します。

```js
const all = require('mdast-util-to-hast/lib/all');
const u = require('unist-builder');

function rubyHandler(h, node) {
  const rtStart = node.children.length > 0
    ? node.children[node.children.length - 1].position.end
    : node.position.start;
  const rtNode = h(
    {
      start: rtStart,
      end: node.position.end,
    },
    'rt',
    [u('text', node.rubyText)]
  );
  return h(node, 'ruby', [...all(h, node), rtNode]);
}
```

`h` は mdast ノードから hast ノードへ変換する関数となっており、この関数の引数として実際の HTML タグ名などを指定します。`all` はすべての子ノードに `h` を適用するヘルパー関数で、`u` もまた unist ノードを作成するヘルパー関数です。この例では、`rtNode` という新しいノードを作成し、それを `<ruby>` タグのノードの子として挿入していることがわかります。

作成した handler は、以下の形式で利用します。オプションとして `handlers` にオブジェクト形式で与えることで、名前の一致する mdast ノードはこの関数を通して hast ノードが生成されるようになります。

```js
const processor = unified()
  .use(markdown)
  .use(rubyAttacher)
  .use(remark2rehype, {
    handlers: { ruby: rubyHandler },
  })
  .use(html);
```

すると、出力される hast は以下のようになります。

```
root[1]
└─ element[2] [tagName="p"]
   ├─ text: "とある魔術の"
   └─ element[2] [tagName="ruby"]
      ├─ text: "禁書目録"
      └─ element[1] [tagName="rt"]
         └─ text: "インデックス"
```

handler 無しでは存在しなかった `rt` タグが追加されました！　これにより、最終的に以下の HTML が出力されます。

```html
<p>とある魔術の<ruby>禁書目録<rt>インデックス</rt></ruby></p>
```

これで Markdown で自由に HTML のルビを挿入できるようになりました！


## まとめ

Vivliostyle と Remark は実際には無関係なライブラリです。しかし、Markdown の変換環境の構築によって Vivliostyle が読み込む HTML を素早く出力できるようになれば、そのまま文書完成までの時間が短縮できる大きなメリットがあります。Markdown は書きやすいだけでなくルールが少ない点も特徴であり、自分で文法を追加する余地が多くあります。ぜひ目的に適した拡張を追加して、快適な執筆環境を作ってみてください。

