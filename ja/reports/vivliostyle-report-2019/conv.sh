#!/bin/sh
if [ -e 一般社団法人ビブリオスタイル_2019年度事業報告書.md ]; then
  # Convert markdown exported from Dropbox Paper
  sed -E 's/^# (.*)$/---\
title: "\1"\
lang: ja\
---/;
  s/\*\*\*\*//g;
  s/\*\* \*\*/ /g;
  s/^\*\*○?(.*)\*\*$/### \1/' 一般社団法人ビブリオスタイル_2019年度事業報告書.md > vf2019report.md
fi
pandoc -s --toc -c report.css -t html5 vf2019report.md -o vf2019report.html
