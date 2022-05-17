#!/bin/sh
pandoc -s --toc -c report.css -t html5 vf2020report.md -o vf2020report.html
vivliostyle build --size A4 --output vf2020report-ja.pdf vf2020report.html 
