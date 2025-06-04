#!/bin/sh
pandoc -s --toc -c report.css -t html5 vf2023report.md -o vf2023report.html
vivliostyle build --size A4 --output vf2023report-ja.pdf vf2023report.html
pandoc -s --toc -c report.css -t html5 vf2023financial-report.md -o vf2023financial-report.html
vivliostyle build --size A4 --output vf2023financial-report-ja.pdf vf2023financial-report.html 
