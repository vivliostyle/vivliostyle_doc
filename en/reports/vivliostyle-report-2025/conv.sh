#!/bin/sh
vfm vf2025report.md > vf2025report.html
vivliostyle build --size A4 --output vf2025report-en.pdf vf2025report.html
vfm vf2025financial-report.md > vf2025financial-report.html
vivliostyle build --size A4 --output vf2025financial-report-en.pdf vf2025financial-report.html
