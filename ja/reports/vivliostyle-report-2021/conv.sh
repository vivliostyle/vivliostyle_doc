#!/bin/sh
pandoc -s --toc -c report.css -t html5 vf2021report.md -o vf2021report.html
vivliostyle preview --size A4  vf2021report.html 
