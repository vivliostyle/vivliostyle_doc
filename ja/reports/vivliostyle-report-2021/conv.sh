#!/bin/sh
pandoc -s --toc -c report.css -t html5 vf2021report.md -o vf2021report.html
vivliostyle build --size A4 --output vf2021report-ja.pdf vf2021report.html 
