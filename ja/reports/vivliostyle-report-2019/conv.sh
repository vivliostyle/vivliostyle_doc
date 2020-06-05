#!/bin/sh
sed -E 's/^# (.*)$/---\
title: "\1"\
lang: ja\
---/;
s/^## \*\*(第[1-9]章) (.*)\*\*$/## \1　\2/;
s/^\*\*○(.*)\*\*$/### \1/' 一般社団法人ビブリオスタイル_2019年度事業報告書.md > vf2019report.md
pandoc -s --toc -c report.css -t html5 vf2019report.md -o vf2019report.html
