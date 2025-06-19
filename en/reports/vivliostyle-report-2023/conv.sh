#!/bin/sh
pandoc -s --toc -c report.css -t html5 vf2024report.md -o vf2024report.html
vivliostyle build --size A4 --output vf2024report-en.pdf vf2024report.html 
