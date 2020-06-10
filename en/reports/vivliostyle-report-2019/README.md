# Vivliostyle Foundation FY2019 Activity Report

- [HTML](https://vivliostyle.github.io/vivliostyle_doc/en/reports/vivliostyle-report-2019/vf2019report.html)
- [View with Vivliostyle Viewer (Flexible page size)](https://vivliostyle.org/viewer/#src=https://vivliostyle.github.io/vivliostyle_doc/en/reports/vivliostyle-report-2019/vf2019report.html&bookMode=true)
- [View with Vivliostyle Viewer (A4 page size)](https://vivliostyle.org/viewer/#src=https://vivliostyle.github.io/vivliostyle_doc/en/reports/vivliostyle-report-2019/vf2019report.html&bookMode=true&userStyle=data:,/*%3Cviewer%3E*/%0A@page%20%7B%20size:%20A4;%20%7D%0A/*%3C/viewer%3E*/)
- [PDF](https://vivliostyle.github.io/vivliostyle_doc/ja/reports/vivliostyle-report-2019/vf2019report-en.pdf)
- [Japanese version: 一般社団法人ビブリオスタイル 2019年度事業報告書](https://github.com/vivliostyle/vivliostyle_doc/tree/gh-pages/ja/reports/vivliostyle-report-2019/)

### How to make

#### Convert Markdown to HTML

Use [pandoc](https://pandoc.org/):

```
pandoc -s --toc -c report.css -t html5 vf2019report.md -o vf2019report.html
```

#### Convert HTML to PDF

Use [Vivliostyle CLI](https://github.com/vivliostyle/vivliostyle-cli):

```
vivliostyle build --book --size A4 --output vf2019report-en.pdf vf2019report.html 
```
