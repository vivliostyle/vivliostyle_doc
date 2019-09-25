const unified = require('unified');
const markdown = require('remark-parse');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');
const inspect = require('unist-util-inspect');

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(html);
const input = `
# はじめてのRemark
**太字**_斜体_テキスト
`;

const parsed = processor.parse(input);
console.log(inspect(parsed));
const transformed = processor.runSync(parsed);
console.log(inspect(transformed));

processor.process(input).then(({ contents }) => {
  console.log(contents);
});
