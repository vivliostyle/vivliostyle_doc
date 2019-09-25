const unified = require('unified');
const markdown = require('remark-parse');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');
const inspect = require('unist-util-inspect');
const all = require('mdast-util-to-hast/lib/all');
const u = require('unist-builder');

function rubyAttacher() {
  const { Parser } = this;
  if (!Parser) {
    return;
  }
  const { inlineTokenizers, inlineMethods } = Parser.prototype;
  rubyTokenizer.locator = rubyLocator;
  inlineTokenizers.ruby = rubyTokenizer;
  inlineMethods.splice(inlineMethods.indexOf('text'), 0, 'ruby');

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
    const now = eat.now();
    now.column += 1;
    now.offset += 1;
    return eat(value.slice(0, rtEndIndex + 1))({
      type: 'ruby',
      rubyText,
      children: this.tokenizeInline(rubyRef, now),
      data: { hName: 'ruby' },
    });
  }
}

function rubyHandler(h, node) {
  const rtStart =
    node.children.length > 0
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

const processor = unified()
  .use(markdown)
  .use(rubyAttacher)
  .use(remark2rehype, {
    handlers: { ruby: rubyHandler },
  })
  .use(html);
const input = `とある魔術の｜禁書目録《インデックス》`;

const parsed = processor.parse(input);
console.log(inspect(parsed));
const transformed = processor.runSync(parsed);
console.log(inspect(transformed));

processor.process(input).then(({ contents }) => {
  console.log(contents);
});
