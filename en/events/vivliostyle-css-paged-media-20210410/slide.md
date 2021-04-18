# CSS Paged Media implementation in Vivliostyle.js  {.cover}

2021-04-10 \
Shinyu Murakami \
Vivliostyle Foundation

# Contents {.toc role="doc-toc"}

1. [CSS typesetting engine: Vivliostyle.js Core](#js-core)
    1. [The idea of Vivliostyle.js, since 2014](#vivliostyle-idea)
    2. [Which CSS specifications are required for CSS typesetting?](#css-specs)
    3. [Redeveloping CSS Paged Media support](#dev-css-paged-media)
2. [Let's get familiar with CSS Paged Media!](#use-css-paged-media)
    1. [Named strings—for running headers](#named-strings)
    2. [Named pages—page type selector](#named-pages)
    3. [Nth page selector: nth()](#nth-page)
3. [Summary of supported CSS specs for paged media](#specs-supported)
    1. [CSS Paged Media Level 3](#css-page)
    2. [CSS Generated Content for Paged Media (GCPM)](#css-gcpm)
    3. [CSS Fragmentation Level 3](#css-break)
    4. [CSS Page Floats](#css-page-floats)
    5. [For more info, visit Vivliostyle Documents→Supported CSS Features](#documents)


# CSS typesetting engine: Vivliostyle.js Core {#js-core}


## The idea of Vivliostyle.js, since 2014 {#vivliostyle-idea}

- Develop an open-source CSS typesetting engine that runs on web browsers that anyone can freely use.
- Use web browsers' rendering engine and PDF output feature.
- Supports the latest web standards.
- Contribute to the standardization and dissemination of CSS typesetting specifications \
  ❌ Aiming for highly functional typesetting with own specifications (No, it's not.)

## Which CSS specs are required for CSS typesetting? {#css-specs}

- Basic CSS specs that are standard in web browsers
  - CSS 2.1 
  - Selectors Level 3
  - CSS Backgrounds and Borders Level 3
  - CSS Fonts Level 3
  - CSS Writing Modes Level 3
  - CSS Multi-column Layout Level 1
  - CSS Flexible Box Level 1
  - etc.
- CSS specs for paged media
  - CSS Paged Media Level 3 \
    ⭐️The basic CSS spec for paged media
  - CSS Generated Content for Paged Media (GCPM) 3 \
    ⭐️Running headers, footnotes, cross-references, etc.
  - CSS Fragmentation ⭐️Page breaks, etc.
  - CSS Page Floats \
    ⭐️Positioning fugures in page

Vivliostyle.js uses web browsers, \
so it can basically use any CSS specs for the web. \
We just need to add support for CSS specs for paged media🌟

And so Vivliostyle.js development began. 👉[History of Vivliostyle](https://vivliostyle.org/history/)

## Redeveloping CSS Paged Media support {#dev-css-paged-media}

Many CSS paged media features have been implemented in Vivliostyle.js for quite some time. (Thanks to the [early devs](https://vivliostyle.org/history/#based-on-the-epub-adaptive-layout-implementation-making-a-css-paged-media-implementation) 🙏）

However, a few important features remained unimplemented.

And finally, since the end of 2020, we have made some progress.

🌟CSS features for page media now available in the latest version:
- ✅ [Named strings](https://www.w3.org/TR/css-gcpm-3/#named-strings) 🌟<small>v2.4 (2020-12-28)</small>
- ✅ [Nth page selector](https://www.w3.org/TR/css-gcpm-3/#document-page-selectors) 🌟<small>v2.5 (2021-02-26)</small>
- ✅ [Named pages](https://www.w3.org/TR/css-page-3/#using-named-pages) 🌟<small>v2.7 (2021-04-07)</small>
- ✅ [Blank page selector](https://www.w3.org/TR/css-page-3/#blank-pseudo) 🌟<small>v2.8 (2021-04-16)</small>


# Let's get familiar with CSS Paged Media! {#use-css-paged-media}

## Named strings—for running headers {#named-strings}

An example usage of named string:
```css
@page :right {  /* chapter title in the right page top-right header */
  @top-right {  /* except in the first page of the chapter */
    content: string(chap-title, first-except); 
  }            
}
h1.chapter {          /* chapter heading */
  string-set: chap-title content();
}
h1.chapter[title] {   /* can also use an attribute value */
  string-set: chap-title attr(title);
}
```

## Named pages—page type selector {#named-pages}

Define page style by naming each type of page. An example:

```css
@page cover { /* Named page rule (name: "cover") */
  margin: 0;  /* "cover" page should have no margins */

  /* "cover" page should have no page headers */
  @top-left { content: none; }
  @top-right { content: none; }
}

.cover {
  page: cover;  /* specify the named page with the page property */
}
```

## Nth page selector: nth() {#nth-page}

Define the style of the Nth page of a document.

Syntax: `@page :nth(An+B)` \
(Like a page version of the `:nth-child(An+B)` selector)

Example:
```css
@page :nth(1) {
  margin: 0;
  background-image: url(cover.png);
}
```

### Difference between `:first` and `:nth(1)` in multiple HTML documents concatenated {#first-and-nth1}

When combining multiple HTML documents into a single book (PDF, WebPub):

- `@page :first` matches only the first page of the first document.
  - This behavior has been in Vivliostyle since before. Note that the current CSS Paged Media spec does not define the behavior when combining multiple HTML documents into a book, so this behavior is not a standard.
- `@page :nth(1)` matches the first page of each document.

That is, if you have separate files for each chapter, `@page :nth(1)` matches to the first page of each chapter, and `@page :first` matches only to the first page of the whole.

### Combination of named page and :nth() example {#named-string-nth}

```css
@page :first { /* matches only to the first page of the whole */
  counter-reset: chapter;
}
@page chapter:nth(1) { /* the first page of each chapter file */
  counter-increment: chapter;
}
h1::before {
  content: "Chapter " counter(chapter) ". ";
}
.chapter {
  page: chapter;
}
```

The HTML file for each chapter looks like:

```html
<body>
  <section class="chapter">
    <h1>The chapter title</h1>
    ...
  </section>
</body>
```

This allows you to reset the chapter counter at the beginning of the whole and increment it at the beginning of each chapter.

**Note:** If you have multiple chapters in a single HTML file, `@page chapter:nth(1)` will match only the first page of the HTML file, not each chapter.


# Summary of supported CSS specs for paged media {#specs-supported}


## CSS Paged Media Level 3 {#css-page}
https://www.w3.org/TR/css-page-3/

- 4 Page Selectors and the Page Context
  - 4.1 The @page Rule ✅
  - 4.2 Page selectors
    - 4.2.1 Spread pseudo-classes: :left, :right ✅
    - 4.2.2 First-page pseudo-class: :first ✅
    - 4.2.3 Blank-page pseudo-class: :blank ✅🌟<small>v2.8 (2021-04-16)</small>
- 5 Page-Margin Boxes ✅
- 6 Page Properties
  - 6.1 Page-based counters ✅
- 7 Page Size
  - 7.1 Page size: the size property ✅
  - 7.2 Crop and Registration Marks: the marks property ✅
  - 7.3 Bleed Area: the bleed property ✅
- 8 Page Breaks
  - 8.1 Using named pages: page ✅🌟<small>v2.7 (2021-04-07)</small>

## CSS Generated Content for Paged Media (GCPM) {#css-gcpm}
https://www.w3.org/TR/css-gcpm-3/

- 1 Running headers and footers
  - 1.1 Named strings ✅🌟<small>v2.4 (2020-12-28)</small>
  - 1.2 Running elements ❌
- 2 Footnotes ✅
- 3 Selecting Pages
  - 3.1 Page Selectors: :nth(An+B) ✅🌟<small>v2.5 (2021-02-26)</small>
  - 3.2 Page groups: :nth(An+B of pagegroup) ❌
- 4 Leaders: leader() ❌
- 5 Cross-references
  - 5.1 The target-counter() function ✅
  - 5.2 The target-counters() function ✅
  - 5.3 target-text ❌
- 6 Bookmarks ❌

## CSS Fragmentation Level 3 {#css-break}
https://www.w3.org/TR/css-break-3/

- 3.1 Breaks Between Boxes: the break-before and break-after properties ✅
- 3.2 Breaks Within Boxes: the break-inside property ✅
- 3.3 Breaks Between Lines: orphans, widows ✅
- 5.4 Fragmented Borders and Backgrounds: the box-decoration-break property ✅

## CSS Page Floats {#css-page-floats}
https://www.w3.org/TR/css-page-floats-3/

- 3.1 The float-reference property ✅
- 3.2 The float property ✅
- 4 The clear property ✅

## For more info, visit Vivliostyle Documents→Supported CSS Features {#documents}

- Vivliostyle Documents: https://vivliostyle.org/documents/
  - Supported CSS Features: https://docs.vivliostyle.org/#/supported-css-features
