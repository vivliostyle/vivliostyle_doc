module.exports = {
  title: 'Vivliostyle で本を作ろう Vol. 6', // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
  author: 'spring-raining <harusamex.com@gmail.com>', // default to `author` in `package.json` or undefined.
  language: 'ja', // default to undefined.
  // size: 'A4', // paper size.
  // theme: 'theme/theme_print.css',
  theme: 'theme/theme_screen.css',
  entry: [
    {
      path: 'content/index.md',
      rel: 'contents',
    },
    'content/maegaki.md',
    'content/spring-raining/index.md',
    'content/mh35/index.md',
    'content/akabeko/index.md',
    'content/ogwata/index.md',
    'content/shinyu/index.md',
    'content/atogaki.md',
  ],
  // entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
  output: [
    './tbf13-draft.pdf', // the output format will be inferred from the name.
  ],
  // workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
  // toc: true, // whether generate and include ToC HTML or not, default to 'false'.
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
};
