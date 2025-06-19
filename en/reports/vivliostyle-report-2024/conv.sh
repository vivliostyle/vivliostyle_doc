#!/bin/sh
vfm vf2024report.md > vf2024report-en.html
vivliostyle build --size A4 --output vf2024report-en.pdf vf2024report-en.html
