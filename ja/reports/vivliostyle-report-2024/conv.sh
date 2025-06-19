#!/bin/sh
vfm vf2024report.md > vf2024report.html
vivliostyle build --size A4 --output vf2024report.pdf vf2024report.html