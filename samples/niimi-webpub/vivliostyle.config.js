module.exports = {
  title: '新美南吉童話集', // populated into 'publication.json', default to 'title' of the first entry or 'name' in 'package.json'.
  author: '新美南吉', // default to 'author' in 'package.json' or undefined
  language: 'ja',
  readingProgression: 'rtl', // reading progression direction, 'ltr' or 'rtl'.
  // size: 'A4',
  // theme: '', // .css or local dir or npm package. default to undefined
  // image: 'ghcr.io/vivliostyle/cli:4.8.2',
  entry: [ // **required field**
    'cover.html',
    { path: 'toc.html', rel: 'contents' },
    '001.html',
    '002.html',
    '003.html',
    '004.html',
  ], // 'entry' can be 'string' or 'object' if there's only single markdown file
  // entryContext: './manuscripts', // default to '.' (relative to 'vivliostyle.config.js')
  // output: [ // path to generate draft file(s). default to '{title}.pdf'
  //   './output.pdf', // the output format will be inferred from the name.
  //   {
  //     path: './book',
  //     format: 'webpub',
  //   },
  // ],
  // workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
  // toc: true, // whether generate and include ToC HTML or not, default to 'false'.
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
};
