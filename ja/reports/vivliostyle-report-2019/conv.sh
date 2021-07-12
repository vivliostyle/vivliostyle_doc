#!/bin/sh
pandoc -s --toc -c report.css -t html5 vf2019report.md -o vf2019report.html
vivliostyle build --size A4 --output vf2019report-ja.pdf vf2019report.html 
