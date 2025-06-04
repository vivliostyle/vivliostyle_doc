#!/bin/bash

# HTMLファイルの生成
vivliostyle build --size A4 --output vf2020financial-report.html vf2020financial-report.md

# PDFファイルの生成
vivliostyle build --size A4 --output vf2020financial-report.pdf vf2020financial-report.html 