#!/bin/sh
pandoc -s --toc -c report.css -t html5 vf2022report.md -o vf2022report.html
vivliostyle build --size A4 --output vf2022report-en.pdf vf2022report.html 
