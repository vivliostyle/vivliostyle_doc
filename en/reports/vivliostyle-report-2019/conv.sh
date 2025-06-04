#!/bin/sh
pandoc -s --toc -c en/reports/vivliostyle-report-2019/report.css -t html5 en/reports/vivliostyle-report-2019/vf2019report.md -o en/reports/vivliostyle-report-2019/vf2019report.html
vivliostyle build --size A4 --output en/reports/vivliostyle-report-2019/vf2019report-en.pdf en/reports/vivliostyle-report-2019/vf2019report.html 
