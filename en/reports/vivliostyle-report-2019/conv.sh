#!/bin/sh
if [ -e Vivliostyle_Foundation_FY2019_Activity_Report.md ]; then
  # Convert markdown exported from Dropbox Paper
  sed -E 's/^# (.*)$/---\
title: "\1"\
lang: en\
---/;
  s/\*\*\*\*//g;
  s/\*\* \*\*/ /g;
  s/^\*\*○?(.*)\*\*$/### \1/' Vivliostyle_Foundation_FY2019_Activity_Report.md > vf2019report.md
fi
pandoc -s --toc -c report.css -t html5 vf2019report.md -o vf2019report.html
