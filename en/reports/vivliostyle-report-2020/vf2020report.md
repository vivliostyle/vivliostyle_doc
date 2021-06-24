---
title: "Vivliostyle Foundation FY2020 Activity Report"
lang: en
---

## **Chapter 1: Activity Report for FY2020**

(The 3rd Fiscal Year: from April 1, 2020 to March 31, 2021)

### 1. Organize developer/user events

We have decided to hold developer/user events twice a year as a place to widely let users and developers know about Vivliostyle. This year, we were able to hold the following events.

- [April 4, 2020: Vivliostyle User/Dev Meetup 2020 Spring (Held online)](https://vivliostyle.connpass.com/event/170939/)
- [October 24, 2020: Vivliostyle User/Dev Meetup 2020 Autumn (Held online)](https://vivliostyle.connpass.com/event/189940/)

The spring event coincided with the COVID 19 calamity. Initially, the event was scheduled to be held at the Japan Association of Graphic Arts Technology (JAGAT), but as Avoid the “Three Cs” was becoming a top priority, we were able to get through it by switching to online distribution. While most of the similar events were cancelled, thankfully, 142 people registered for the event. In terms of content, we were able to inform people about the real activities of our corporation, focusing on the report of Vivliostyle Pub, which was in the midst of alpha development at the time.

On the other hand, the fall event was a thoughtful seminar on CSS typesetting. For example, [Simon Worthington](https://www.force11.org/users/simon-worthington)of the Open Science Lab - German National Library of Science and Technology reported on Rapid publishing for public health books against COVID 19. And our contributor [akabeko](https://github.com/akabekobeko) reported on Vivliostyle's competitor [Paged.js](https://www.pagedmedia.org/paged-js/). In this way, we were able to show the appeal of CSS typesetting beyond Vivliostyle.

### 2. Official website renewal

As briefly mentioned in [the previous year's activity report](https://vivliostyle.github.io/vivliostyle_doc/en/reports/vivliostyle-report-2019/vf2019report.html), the design of the official website had remained unchanged for over two years since the founding of the corporation. In order to revamp it, we had a series of discussions at the developper meeting and decided on the following policy, and commissioned [yamasy1549](https://github.com/yamasy1549) to start work on it in December 2019.

- Single column layout for mobile viewing.
- The top page of the site features an animation that provides an intuitive understanding of what Vivliostyle is all about.
- Place the GitHub repository link prominently on each page.
- For the convenience of users, the following pages will be newly added.
    - “Getting Started” that summarizes the product outline. 
    - Detailed development documentation, including “User Guides” and “Tutorial Guides”.
    - “FAQ” to solve users' doubts.

It was difficult to prepare for the developer/user event (see the previous section) at the same time, but we managed to reopen the site on April 3, the day before the event. After that, the following information was added.

-2020/4/10: [Notified that the German National Library of Science and Technology has published a textbook on COVID-19 measures using Vivliostyle.](https://vivliostyle.org/blog/2020/04/10/tib-book-against-covid19/)
- 2020/4/29: [Called for support from GitHub Sponsors.](https://vivliostyle.org/blog/2020/04/29/become-a-sponsor-to-vivliostyle-via-github-sponsors/)
- 2020/6/11: [2019 Activity Report released.](https://vivliostyle.github.io/vivliostyle_doc/en/reports/vivliostyle-report-2019/vf2019report.html)
- 2020/8/19: [Creator Book Tutorial Guide Released.](https://vivliostyle.org/make-books-with-create-book/)
- 2020/8/29: [Announced the start of accepting donations in Japanese yen by credit card.](https://vivliostyle.org/blog/2020/11/20/You-can-support-Vivliostyle-without-a-GitHub-account/)

In particular, the appeal for donations is important for a general incorporated association that does not make a profit (and does not distribute profits). In fact, we were able to collect 61,209 yen in total this fiscal year (Fig. 1), which is about 4% of our total ordinary income. This is still not a large amount, but we would like to continue to nurture it as a receptacle for people who support our activities.

![Figure 1: Breakdown of ordinary income for the current fiscal year](./img/fig-1.png){ width=50% }
 
### 3. Product Development Status

In this section, we will explain the development status of each product for this fiscal year.

#### [Vivliostyle Core / Viewer (vivliostyle.js)](https://github.com/vivliostyle/vivliostyle.js)

We were able to add many functions to Vivliostyle Core and Vivliostyle Viewer (Vivliostyle.js), which are the foundation of the entire product, this year. As a result, we were able to promote support for [CSS Paged Media](https://www.w3.org/TR/css-page-3/), which had not been sufficiently supported in the past. The main features we added are as follows.

 - Implementation of a slide bar for page navigation, and support for mouse wheel. ([v2.2.0 / 2020/11/26](https://github.com/vivliostyle/vivliostyle.js/releases/tag/v2.2.0))
- Support for specifying EPUB spread view. ([v2.3.0 / 2020/12/7](https://github.com/vivliostyle/vivliostyle.js/releases/tag/v2.3.0))
- Support for named strings to realize headers, footers, etc. ([v2.4.0 / 2020/12/28](https://github.com/vivliostyle/vivliostyle.js/releases/tag/v2.4.0))
- Support for n-th page selector. ([v2.5.0 / 2021/2/26](https://github.com/vivliostyle/vivliostyle.js/releases/tag/v2.5.0))
- 印刷ボタンの追加 ([v2.6.0 / 2021/3/14](https://github.com/vivliostyle/vivliostyle.js/releases/tag/v2.6.0))

#### [Vivliostyle CLI](https://github.com/vivliostyle/vivliostyle-cli)

This is a converter that allows CSS typesetting with a command line interface. With the addition of support for Markdown format input this fiscal year, the scope of its use has expanded dramatically. In addition, since the preview screen has been integrated into Vivliostyle Viewer, it can be said that Vivliostyle Viewer has grown into a product that allows users to read long texts, not just to check the formatting results. As will be discussed later, this is expected to have a positive impact on the future Vivliostyle Pub v1. The details for each release are as follows.

- Replaced the preview UI with Vivliostyle Viewer. ([v3.2.0 / 2021/3/29](https://github.com/vivliostyle/vivliostyle-cli/releases/tag/v3.2.0))
- Supports input of various file formats including Markdown/ Support for [Themes](https://github.com/vivliostyle/themes)/ Supports multiple outputs, including web books/ Support loading external web pages by URL. ([v3.0.0 / 2021/2/7](https://github.com/vivliostyle/vivliostyle-cli/releases/tag/v3.0.0))



#### [Vivliostyle Flavored Markdown (VFM)](https://github.com/vivliostyle/vfm)

This is a Markdown dialect for book typesetting that allows for ruby, image size specification, captions, footnotes, etc. It is upwardly compatible with the most popular Markdown specification, GitHub Flavored Markdown (GFM), and was developed for input data in Vivliostyle CLI v3.0. v1.0.0-alpha.0 was released on June 13, and v1.0.0-alpha.17 was released as of the end of this fiscal year. It has been under continuous development since then.



#### [Themes](https://github.com/vivliostyle/themes)

This is a mechanism to publish/reuse style sheets for CSS typesetting in Vivliostyle CLI as a package. The first official theme was released on July 1, and as of the end of this fiscal year, the following three themes have been released. We will continue to expand them.

- [theme-slide (Slide)](https://github.com/vivliostyle/themes/tree/master/packages/@vivliostyle/theme-slide)
- [theme-bunko (Vertical Book)](https://github.com/vivliostyle/themes/tree/master/packages/@vivliostyle/theme-bunko)
- [theme-techbook (Tech book)](https://github.com/vivliostyle/themes/tree/master/packages/%40vivliostyle/theme-techbook)

#### [Create Book](https://github.com/vivliostyle/create-book)

This is an installer that builds an environment for book production using the Vivliostyle CLI locally, and it is also a local version of the Vivliostyle Pub. It was created by [uetchy](https://github.com/uetchy) in the wake of the Mitou Advanced program defeat, which will be described later. As of the end of this fiscal year, v0.1.6 has been released. For details, please refer to the following article posted on the official website. 

- [Feature Articles: Let's self-publish with Create Book!](https://vivliostyle.org/make-books-with-create-book/)

#### [Vivliostyle Pub](https://github.com/vivliostyle/vivliostyle-pub)

The Vivliostyle Pub is the culmination of our products. I will explain the development process in some detail in this section. The starting point is “Viola”, an online editor that runs in a browser. The author, [spring-raining](https://github.com/spring-raining), offered to give it to our organization so that the contributors could work together to recreate it. Later, during the monthly developer's meeting, the project was given the name "Vivliostyle Pub" by Representative Director Murakami, and development was officially started. This was also mentioned in the previous year's activity report.


As of the end of the previous fiscal year, the biggest concern was securing development funding, and the solution was discussed at the developer meeting. Therefore, the contributors suggested that they apply for the [Mitou Advanced Project](https://www.ipa.go.jp/jinzai/advanced/2020/koubo_index.html) with the theme of developing Vivliostyle Pub. 

As a result of discussions among the members, it was decided to take on the challenge. Since organizations are not allowed to apply due to regulations, we completed the application on April 2 as a group of individuals consisting of [youchan](https://github.com/youchan) and [takanakahiko](https://github.com/takanakahiko), in addition to the aforementioned contributors and Representative Director Murakami.

From that point on, all of the members of the team worked together, and day after day, night after night, the development of Vivliostyle Pub began. The goal is the second round of review scheduled for mid-May. The following is an overview of the version (alpha version) at this point.


- The Vivliostyle CLI deployed in the cloud implements a very early parser for VFM.
- Vivliostyle CLI can output the result of CSS typesetting to the browser.
- Vivliostyle CLI can generate and download a PDF of the CSS typesetting result from the Export menu.
- Saving from the editor will update the file on GitHub.
- As a result, when you write Markdown in the editor on the left side of the browser screen, the result of the typesetting is quickly displayed on the right side of the screen.

The following is a flowchart of the Vivliostyle Pub (Figure 2) that takanakahiko created for collaboration at the time.

![Figure 2: Vivliostyle Pub flowchart in early development (By takanakahiko)](./img/fig-2.png){ width=50% }

They successfully passed the first round of screening on May 15. On the following day, May 16, they went through the second round of screening, but unfortunately they received a message on June 10 that they had not been selected.

Since then, Vivliostyle Pub has had some very minor updates, but the Vivliostyle Pub that is running as of the end of this fiscal year has not changed much from the alpha version. Here is a screenshot of the current version.

![Figure 3 Current Vivliostyle Pub](./img/fig-3.png){ width=50% }

Vivliostyle Pub has almost stopped development, while its components, VFM, Themes, Vivliostyle CLI, and Vivliostyle Core / Viewer, have evolved significantly.  However, in order to do so, it was necessary to overcome the impact of the failure of the Mitou Advanced Project. The following document by Representative Director Murakami served as a roadmap.

- [Vivliostyle Pub v1 Req (2020/11/9)](https://github.com/vivliostyle/community/wiki/Vivliostyle-Pub-v1-Req)
- [Vivliostyle CLI v3.0 new spec (2020/11/9-2021/2/9)](https://github.com/vivliostyle/community/wiki/Vivliostyle-CLI-v3.0-new-spec)

If we can incorporate the VFM, Themes, and Vivliostyle CLI that have been developed in this way, we can successfully release Vivliostyle Pub v1. That will be the task for the next fiscal year. In order to accomplish this, the development is now underway with the aim of releasing the beta version at the end of August 2021 and launching it at the end of December of the same year.

### 4. Collaborate with external organizations that work with Vivliostyle

In the previous fiscal year, the project income was 0 yen. However, as shown in the next chapter and Figure 1 above, we were able to generate 1,503,721 yen in business income this fiscal year. Especially significant was the development contracted by a company that Representative Director Murakami has been involved with for a long time. In fact, many of the development results mentioned in the previous section on Vivliostyle Core / Viewer were paid for by these companies.

In addition, Representative Director Murakami continued to have discussions with Simon Worthington, who was mentioned in Section 1, and continued to commit himself to their development. As a result, he was able to receive development orders from them and earn business income. In this way, collaboration with external organizations led directly to the development of Vivliostyle, and as a result, we were able to proceed with the CSS Paged Media support, which had been an issue. We are very grateful for this.

### 5. Directors

- [Shinyu Murakami](https://github.com/MurakamiShinyu) (Representative Director, Founding Member)
- [Florian Rivoal](https://github.com/frivoal) (Director, Founding Member)
- [Johannes Wilm](https://github.com/johanneswilm) (Director, Founding Member)
- [Katsuhiro Ogata](https://github.com/ogwata) (Director, From January 21, 2020)

## 第2章 2020年度 (第3期 2020年4月1日〜2021年3月31日）決算報告

### 2020年度 貸借対照表

| 科目           | **当年度**    | **前年度**    | **増減**     |
| ------------ | ---------- | ---------- | ---------- |
| **Ⅰ 資産の部**   |            |            |            |
| **1 流動資産**   |            |            |            |
| **現金・預金**    | 345,708    | 52,565     | 293,143    |
| **流動資産合計**   | 345,708    | 52,565     | 293,143    |
| **2 固定資産**   |            |            |            |
| **創立費**      | 113,050    | 113,050    | 0          |
| **資産合計**     | 458,758    | 165,615    | 293,143    |
| **Ⅱ 負債の部**   |            |            |            |
| **1 流動負債**   |            |            |            |
| **預り金**      | 31,139     | 72,568     | -41,429    |
| **役員借入金**    | 3,806,561  | 1,186,477  | 2,620,084  |
| **負債合計**     | 3,837,700  | 1,259,045  | 2,578,655  |
| **Ⅲ 正味財産の部** |            |            |            |
| **1 一般正味財産** | -3,378,942 | -1,093,430 | -2,285,512 |
| **正味財産合計**   | -3,378,942 | -1,093,430 | -2,285,512 |
| **負債及び正味財産合計**   | 458,758    | 165,615    | 293,143    |


### 2020年度 正味財産増減計算書

| 科目                | **当年度**    | **前年度**    | **増減**     |
| ----------------- | ---------- | ---------- | ---------- |
| **Ⅰ. 一般正味財産増減の部** |            |            |            |
| 1. 経常増減の部         |            |            |            |
| ⑴ 経常収益            |            |            |            |
| ①事業収益             | 1,503,721  | 0          | 1,503,721  |
| 事業収益1             | 1,503,721  |            | 1,503,721  |
| ②受け取り寄付金          | 61,209     |            | 61,209     |
| 受け取り寄付金           | 61,209     | 0          | 61,209     |
| ③雑収益              | 4          | 1          | 3          |
| 受取利息              | 4          | 1          | 3          |
| 経常利益計             | 1,564,934  |            |            |
| ⑵ 経常費用            |            |            |            |
| ① 事業費             |            |            |            |
| 事業経費              | 373,823    | 67,850     | 305,973    |
| 旅費交通費             | 11,527     | 12,080     | △553       |
| 通信運搬費             | 252        |            | 252        |
| 雑費                | 39,064     |            | 39,064     |
| 事業費・経費1           | 65,575     | 55,770     | 9,805      |
| 事業費・経費2           | 257,405    |            | 257,405    |
| 事業費計              | 373,823    | 67,850     | 305,973    |
| ② 管理費             |            |            |            |
| 人件費1              | 3,454,000  | 984,881    | 2,469,119  |
| 会議費               | 2,623      |            | 2,623      |
| 管理費計              | 3,456,623  | 984,881    | 2,471,742  |
| 経常費用計             | 3,830,446  | 1,052,731  | 2,777,715  |
| 評価損益等調整前当期経常増減額   | △2,265,512 | △1,052,730 | △1,212,782 |
| 評価損益等計            | 0          | 0          | 0          |
| 当期経常増減額           | △2,265,512 | △1,052,730 | △1,212,782 |
| 2. 経常外増減の部        |            |            |            |
| ⑴ 経常外収益           |            |            |            |
| 経常外収益計            | 0          | 0          | 0          |
| ⑵ 経常外費用           |            |            |            |
| 経常外費用計            | 0          | 0          | 0          |
| 当期経常外増減額          | 0          | 0          | 0          |
| 他会計振替前当期一般正味財産増減額 | △2,265,512 | △1,052,730 | △1,212,782 |
| 税引前当期一般正味財産増減額    | △2,265,512 | △1,052,730 | △1,212,782 |
| 法人税、住民税及び事業税      | 20,000     | 40,700     | △20,700    |
| 当期一般正味財産増減額       | △2,285,512 | △1,052,730 | △1,192,082 |
| 一般正味財産期首残高        | △1,093,430 | 0          | △1,093,430 |
| 一般正味財産期末残高        | △3,378,942 | △1,093,430 | △2,285,512 |
| **Ⅱ. 指定正味財産増減の部** |            |            |            |
| 当期指定正味財産増減額       | 0          | 0          | 0          |
| 指定正味財産期首残高        | 0          | 0          | 0          |
| 指定正味財産期末残高        | 0          | 0          | 0          |
| **Ⅲ. 正味財産期末残高**   | △3,378,942 | △1,093,430 | △1,093,430 |


### 2020年度収支計算書


| 科目                | 予算額 | 決算額        | 差異         | 備考 |
| ----------------- | --- | ---------- | ---------- | -- |
| **Ⅰ. 一般正味財産増減の部** |     |            |            |    |
| 1. 経常増減の部         |     |            |            |    |
| ⑴ 経常収益            |     |            |            |    |
| ①事業収益             | 0   | 1,503,721  | △1,503,721 |    |
| 事業収益1             |     | 1,503,721  | △1,503,721 |    |
| ②受け取り寄付金          | 0   | 61,209     | △61,209    |    |
| 受け取り寄付金           |     | 61,209     | △61,209    |    |
| ③雑収益              | 0   | 4          | △4         |    |
| 受取利息              |     | 4          | △4         |    |
| 経常利益計             | 0   | 1,564,934  | △1,564,934 |    |
| ⑵ 経常費用            |     |            |            |    |
| ① 事業費             |     |            |            |    |
| 事業経費              | 0   | 373,823    | △373,823   |    |
| 旅費交通費             |     | 11,527     | △11,527    |    |
| 通信運搬費             |     | 252        | △252       |    |
| 雑費                |     | 39,064     | △39,064    |    |
| 事業費・経費1           |     | 65,575     | △65,575    |    |
| 事業費・経費2           |     | 257,405    | △257,405   |    |
| 事業費計              | 0   | 373,823    | △373,823   |    |
| ② 管理費             |     |            |            |    |
| 人件費1              |     | 3,454,000  | △3,454,000 |    |
| 会議費               |     | 2,623      | △2,623     |    |
| 管理費計              | 0   | 3,456,623  | △3,456,623 |    |
| 経常費用計             | 0   | 3,830,446  | △3,830,446 |    |
| 評価損益等調整前当期経常増減額   | 0   | △2,265,512 | 2,265,512  |    |
| 評価損益等計            | 0   | 0          | 0          |    |
| 当期経常増減額           | 0   | △2,265,512 | 2,265,512  |    |
| 2. 経常外増減の部        |     |            |            |    |
| ⑴ 経常外収益           |     |            |            |    |
| 経常外収益計            | 0   | 0          | 0          |    |
| ⑵ 経常外費用           |     |            |            |    |
| 経常外費用計            | 0   | 0          | 0          |    |
| 当期経常外増減額          | 0   | 0          | 0          |    |
| 他会計振替前当期一般正味財産増減額 | 0   | △2,265,512 | 2,265,512  |    |
| 税引前当期一般正味財産増減額    | 0   | △2,265,512 | 2,265,512  |    |
| 法人税、住民税及び事業税      | 0   | 20,000     | △20,000    |    |
| 当期一般正味財産増減額       | 0   | △2,285,512 | 2,285,512  |    |
| 一般正味財産期首残高        | 0   | △1,093,430 | 1,093,430  |    |
| 一般正味財産期末残高        | 0   | △3,378,942 | 3,378,942  |    |
| **Ⅱ. 指定正味財産増減の部** |     |            |            |    |
| 当期指定正味財産増減額       | 0   | 0          | 0          |    |
| 指定正味財産期首残高        | 0   | 0          | 0          |    |
| 指定正味財産期末残高        | 0   | 0          | 0          |    |
| **Ⅲ. 正味財産期末残高**   | 0   | △3,378,942 | 3,378,942  |    |


