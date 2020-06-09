---
title: "Vivliostyle Foundation FY2019 Activity Report"
lang: en
---

## Chapter 1: Activity Report for FY2019

(The 2nd Fiscal Year: from April 1, 2019 to March 31, 2020)
 
### Basic policy and its concept for this term

In our Articles of Incorporation, we set the following seven items as activity objectives:


1. Maintenance and management of the Vivliostyle open source project and community
2. Research and development of Vivliostyle and related technologies
3. Promotion and education about Vivliostyle and CSS typesetting
4. Promote standardization in cooperation with groups related to standard technologies such as Web, publishing, and accessibility
5. Cooperation with external projects working with Vivliostyle
6. Maintenance of the Vivliostyle brand and intellectual property rights
7. Supplementary or related activities to each of the preceding items

A simple summary of the above would be “to strive for the development of Web / publishing / accessibility by maintaining / developing / disseminating Vivliostyle as an open source project.”

The activities in the previous term (the first fiscal year = FY2018) were, so to speak, minimal, such as launching an official website after establishing the Vivliostyle Foundation, and launching migrating source code to TypeScript (described later). Nonetheless, all were essential activities for us.

Generally speaking, the issue in this term (the second term = FY2019) is how to carry out the activities of the previous term and how to achieve the above-mentioned activity objectives.

However, the problem is that our human and economic resources are extremely limited. At the beginning of the term, there were three directors including Shinyu Murakami, who is the representative director, but only Murakami was active as a full-time officer. In addition, financial resources are extremely small, as can be seen from the fact that the previous fiscal year's settlement of accounts was only 123,050 yen of incorporation expenses from loan payable from officer.

Our plan for these years is best described by means of an analogy with a ‘triple jump’: The leap distance of three consecutive jumps is much larger than the total of the leap distances of three jumps separated by one. Applying this analogy, if the activity of the first term is the first “hop” (takeoff), the second term, which is this term (FY2019), is the “step” (small jump), and the third term (FY2020), taking over that, will be the longest “jump” (great leap).

In other words, we admit we cannot fulfill the purposes of the articles of incorporation sufficiently this term. However, we will consider what should be done as the “preparation term” so that the purpose can be achieved after the third term. This basic policy is important because of scarce resources.

At first glance, you may be wondering how each of the activities described in the following section fits the purpose of the Articles of Incorporation. However, all should be prepared for the “great leap” of the 3rd term and after.

### Completed source code migration to TypeScript

Vivliostyle was originally written in vanilla JavaScript. That made it rather difficult to maintain as the source code was of a rather large scale.

TypeScript is an open programming language that adds static typing and class-based object orientation while remaining compatible with JavaScript, which increases the maintainability for large scale projects.

Because of this relationship, the cost of migrating from JavaScript to TypeScript is considered to be relatively low, but on the other hand, there is an advantage that type suggestions and accurate type checking can be provided for coding. In addition, you can use various advanced tools for developers, including those made by TypeScript developer Microsoft. In general, the source code is easy to write and read, development by a large number of people, and, as a result, an environment that facilitates open source development can be expected to be obtained at low cost.

As mentioned above, the transition work itself started in August 2018. However, the transition process, which should have been easy, had various difficulties when it was actually started. The work was finally completed in August 2019, which means it took a year.


- Reference URL: [GitHub vivliostyle.js](https://github.com/vivliostyle/vivliostyle.js/pull/536) [repository](https://github.com/vivliostyle/vivliostyle.js/pull/536) [“JS-to-TS migration #536”](https://github.com/vivliostyle/vivliostyle.js/pull/536)

### Holding of user/developer events

For our Foundation, which has limited human and financial resources, a pressing issue is to obtain developers (committers). To do this, we first need to make the project Vivliostyle widely known. To do that, it is effective to hold events with the theme of Vivliostyle. However, it is difficult to hold these kinds of events without a supportive person. Thankfully, our Foundation has had people and organizations that have been able to reach out for us.

First of all, [spring-raining](https://github.com/spring-raining) who found Vivliostyle early and made many contributions to development including the TypeScript conversion. He has edited and published the self-published book “Make Books with Vivliostyle” under the name of “Vivliostyle User Group”, and continued to participate in the technical self-published book fair “Tech Book Fest”. In that way, he has made many contributions.

The other is the XML Publishing Study Group. The study group has evolved from a voluntary study group of member companies of the Japan Association of Graphic Arts Technology (JAGAT) and has a history of about 10 years. JAGAT holds an annual printing general event “PAGE”, where every year a room is given to the group for [hosting a seminar](https://page.jagat.or.jp/2019/openevent/5c36f3bbadbe1d0001d723a3.html). The Representative Director Murakami, who participated in this group before founded this Foundation, also attended PAGE seminars as a lecturer almost every year.

With these connections, we held the “Vivliostyle Developers and Users Meeting 2019 Summer” jointly with Vivliostyle Users Group and XML Publishing Study Group on August 31, 2019.
About 30 people participated on the day. The first half was a “Vivliostyle Developers Meeting” in which Representative Murakami reported on the current development issues, and the second half was a “Vivliostyle / CSS typesetting user meeting” in which a total of 7 people made presentations.

In the first part, Representative Director Murakami took a microphone to explain the development status, and took a poll to the participants by show of hands. For details, please refer to “[Future development issues of Vivliostyle](https://vivliostyle.github.io/vivliostyle_doc/ja/vivliostyle-user-group-vol2/shinyu/index.html)”, but it was clear that many of the participants were expecting to implement the latest standard along with bug fixes and documentation.

About the presentations in the second part, please refer to “[Vivliostyle Developer and User Meeting 2019 Summer was held!](https://vivliostyle.org/blog/2019/09/04/vivliostyle-dev-user-meetup-tokyo20190831/)” What I would like to pay attention to is that the presenters have produced people who will be deeply involved with this Foundation. For example, as will be described later, Katsuhiro Ogata, who will be appointed as a director from January 2020, [youchan](https://github.com/youchan), one of the developers of “Vivliostyle Pub”, which will be described later, and [yamasy](https://github.com/yamasy1549)[1549](https://github.com/yamasy1549), who we also ask for a renewal of the official website, which will be described later. All of these people are presenters at that time. It can be said that it is a good example of the hop step jump, which connects the small jump mentioned above with the larger jump.

The content of this event was turned into a paper and was published as “Make Books with Vivliostyle” Vol. 2 by [spring-raining](https://github.com/spring-raining)'s Vivliostyle User Group mentioned above and was sold at the “Tech Book Fest 7th” held on September 22, 2019. Currently, all the manuscripts [can be read on the official website](https://vivliostyle.github.io/vivliostyle_doc/ja/vivliostyle-user-group-vol2/index.html).

### Enhancement of the internal structure

On September 22, 2019, the technical self-published book sale event “[Tech Book Fest 7](https://techbookfest.org/event/tbf07)” was held. The Vivliostyle Users Group sold “Make books with Vivliostyle” Vol. 2 which summarizes the announcement content of the event mentioned in the previous section, and our representative director Murakami also participated with Katsuhiro Ogata and other authors as help. The visitors were very responsive, and fortunately we were able to sell out many of the books we prepared.

At a social gathering after that, Ogata reported that he was likely to retire from the company he was working at that time. Ogata is not only a member of the XML Publishing Study Group mentioned above, but he has also had a friendship with Murakami as a freelance writer since about 10 years ago while covering character codes, Japanese typesetting, and standardization.

Murakami, who had begun to feel the limits of working alone full-time, requested Ogata to participate in this Foundation on the spot, and Ogata who had seen the future in Vivliostyle accepted it. As a result, an internal structure was established to enable full-scale activities as an OSS development organization.

That is, Murakami will be in charge of development, and Ogata will be in charge of non-development. Both discuss management and the final decision is made by the representative director, Murakami, while listening to the opinions of other directors.

It was in January of the following year that Ogata officially joined as the fourth director due to his previous job, but immediately after acceptance, he participated in decision making in various activities, including the developer meeting that was approaching.

### Regular developer meetings and the development concept of the “Vivliostyle Pub”

For Vivliostyle, while obtaining developers was a challenge, it was a great benefit to get to know young developers during the “Vivliostyle Developer and User Meeting 2019 Summer”.

Representative Director Murakami took this one step further and decided to hold developer meetings once a month on a regular basis with developers such as [spring-raining](https://github.com/spring-raining) who had been a committer for a long time and presenter at the aforementioned event as core members. This allows developers to proceed with development while sharing goals. For the venue, thanks to Mr. Masaaki Furukado, President of Denshoku Co., Ltd., a member of the XML Publishing Study Group, we were able to use his company's meeting room and line facilities.

However, since it is OSS development, the developer meetings must be open. We decided to try to ensure transparency by announcing the schedule in advance in slack, etc. so that anyone can participate, and by publishing the minutes after the end. It should be noted that [akabeko](https://github.com/akabekobeko)[beko](https://github.com/akabekobeko) made an effort of taking minutes and automated process of publishing the minutes.

When we actually held a developer meeting, the following ideas that would reinvent Vivliostyle that followed were presented one after another and immediately put into practice.


- Repository integration / reorganization
- Development of “Vivliostyle Pub”
- Official website renewal
- Logo renewal
- Version upgrade of Vivliostyle

Of particular note is the “Vivliostyle Pub,” which was gradually embodied as a new development theme during the developer meetings. This was first proposed at the social gathering after the end of the 2nd developer meeting (November 2019) by [spring-raining](https://github.com/spring-raining) mentioned above.

Originally, he completed an online service called “[Viola](https://viola.pub/)” in January 2018. With this service, you can write manuscripts in a simple notation called Markdown on the left side of the split screen, and the formatted result by vivliostyle.js will be immediately displayed on the right side, and you can also export it to PDF.

Unfortunately, because it was personal development, the number of users did not increase as expected and the monthly maintenance cost was a burden. Still, it was clear to everyone on the scene that the concept was not only accurate and realistic, but could be marketed. [spring-raining](https://github.com/spring-raining)’s suggestion was to transfer this “Viola” to this Foundation, and recreate it from scratch by our team. “That sounds good!” Everyone who heard it erupted in joy.

After that, Representative Director Murakami proposed "Vivliostyle Pub" as a new project name, and it quickly became the next development goal. For the next term, a beta version is announced in August 2020, and the development is underway with the aim of launching in January 2021.

In this way, a development theme and a structure to make it a reality were established, but ironically, this time the issue of how to obtain funds for it emerged. This is a form in which the weakness of the economic base of this Foundation was exposed immediately. Of course, if “Vivliostyle Pub” is on track, as expected, we will return a lot of profits to our Foundation. But the launch is in 2021, so the question is how to obtain working capital up to that point. This solution will be the ultimate proposition for the next term.


- [1st Developer Meeting (2019-10-05, Denshoku meeting room)](https://github.com/vivliostyle/discussion/wiki/slack-meeting-log-2019-10-05)
- [2nd Developer Meeting (2019-11-03, Denshoku meeting room)](https://github.com/vivliostyle/discussion/wiki/slack-meeting-log-2019-11-03)
- [3rd Developer Meeting (2019-12-07, Denshoku meeting room)](https://github.com/vivliostyle/discussion/wiki/slack-meeting-log-2019-12-07)
- [4th Developer Meeting (2020-01-12, Denshoku meeting room)](https://github.com/vivliostyle/discussion/wiki/slack-meeting-log-2020-01-12)
- [5th Developer Meeting (2020-02-02, Denshoku meeting room)](https://github.com/vivliostyle/discussion/wiki/slack-meeting-log-2020-02-02)
- [6th Developer Meeting (2020-03-07, Denshoku meeting room)](https://github.com/vivliostyle/discussion/wiki/slack-meeting-log-2020-03-07)

### Participation in XML Publishing Exchange Meeting

As mentioned above, the XML Publishing Study Group is assigned a room at the annual printing general event “PAGE” held by JAGAT, and it is customary to hold a seminar and social gathering here called “XML Publishing Exchange Meeting”. PAGE has attracted a great deal of attention in the printing, DTP, and publishing industries, and it has been a long time since this exchange meeting has become familiar to all concerned.

This year, the study group has set two themes: (1) investigate how much the text layout requirements defined in the W3C “Requirements for Japanese Text Layout” are implemented by each vender’s e-book reader, and (2) try to typeset ourselves using Vivliostyle as an implementation example of CSS typesetting (Director Ogata’s presentation at the “Vivliostyle Developer and User Meeting 2019 Summer” was also an extension of this activity).

Therefore, at the XML Publishing Exchange Meeting held on February 7, 2020, with the event title “The Future of Web Publishing and Japanese Text Layout”, the person in charge of “Requirements for Japanese Text Layout” reported on its revision work, and we reported the development status of Vivliostyle.

It can be said that this is a great opportunity for our Foundation, which has repeatedly discussed “Vivliostyle Pub” at the developer meetings, to appeal to the printing, DTP, publishing and other industries. However, the organizer, JAGAT, is a public interest incorporated association, and the purpose of the activities of the XML Publishing Exchange Party is mutually beneficial. In order to stay in line with such situations, we avoided direct advertising, and first, Representative Director Murakami explained the CSS typesetting introducing the overall activities of Vivliostyle as an implementation, and then, Director Ogata announced “Vivliostyle Pub” as a future activity target.


- [The future of web publishing with Japanese text layout and Vivliostyle CSS typesetting](https://vivliostyle.github.io/vivliostyle.js/viewer/vivliostyle-viewer.html#b=/vivliostyle_doc/ja/events/page2020xpub/&spread=false&renderAllPages=true) (Japanese)
- [The future of CSS typesetting and Vivliostyle](https://www.slideshare.net/ogwata_1959/cssvivliostyle-227189333) (Japanese)

Fortunately, the visitors were very pleased and we were able to receive many favorable reactions at the reception after the seminar.


- Reference URL ①: [PAGE2020 XML Publishing Exchange Meeting](https://page.jagat.or.jp/session/detail_82.html) (Japanese)
- Reference URL ②: [XML Publishing Exchange Meeting — The Future of Web Publishing and Japanese Text Layout](https://kokucheese.com/event/index/589362/) (Japanese)

### Renewal of official website

We launched our official website in March 2018, which is still in preparation for establishment. From the beginning, it was launched as a minimally multilingual site with an English page with the same content as the Japanese page. Because we are an OSS development organization, it was extremely important to start a website that could be read by as many people as possible in the world. Since then, it has continued to have almost the same design and page composition for about two years.

However, since we started activities with new developers (collaborators) gathered on the monthly developer meetings, it was time to review the existing site and make a new design. From December 2019, we asked [yamasy](https://github.com/yamasy1549)[1549](https://github.com/yamasy1549), who is also a member of the developer meetings, to start production.

The basic policy of the new site was to aim for a site to increase the number of collaborators. Although a new development structure has been established, the number of collaborators is not sufficient considering the scale of the “Vivliostyle Pub”. In addition, as an OSS development organization, it is essential to always try to attract new collaborators. We wanted the new site to function as a “gateway” for this. Specifically, we implemented the following measures based on [yamasy](https://github.com/yamasy1549)[1549](https://github.com/yamasy1549)'s proposal:


- Single column layout for mobile environments
- An animation that makes it easy to understand “What is Vivliostyle” on the top page
- Place a link to the GitHub repository in a prominent place on each page
- For the convenience for developers and users, the following pages have been added
    - Getting Started
    - Development Documentation
    - FAQ

The general design and coding was done by [yamasy](https://github.com/yamasy1549)[1549](https://github.com/yamasy1549), and the design system such as color scheme and font setting was done by [Yasuaki Uechi (uetchy)](https://github.com/uetchy) who is also a member of the developer meetings. The new logo was also created by [u](https://github.com/uetchy)[etchy](https://github.com/uetchy). He changed the old logo, which had a huge V-shaped book floating above the earth, into a flat and vivid color scheme, trimming it boldly to revamp the image. The development status of the site was reported at the monthly developer meetings, and the site was created with feedback from the participants. Thus, on April 3, 2020, we were able to relaunch the site with a new design.


### Directors

- [Shinyu Murakami](https://github.com/MurakamiShinyu) (Representative Director, Founding Member)
- [Florian Rivoal](https://github.com/frivoal) (Director, Founding Member)
- [Johannes Wilm](https://github.com/johanneswilm) (Director, Founding Member)
- [Katsuhiro Ogata](https://github.com/ogwata) (Director, From January 21, 2020)


## Chapter 2: Financial Report for FY2019

(The 2nd Fiscal Year: from April 1, 2019 to March 31, 2020)

### Balance Sheet for FY2019
As of March 31, 2020 (Unit: JPY)

| Title                            | This FY (2019) | Prev. FY (2018) | Increase/Decrease |
| -------------------------------- | -------------- | --------------- | ----------------- |
| **Ⅰ. Assets**                    |                |                 |                   |
| 1. Current Assets                |                |                 |                   |
| Cash and deposits                | 52,565         | 10,000          | 42,565            |
| Total current assets             | 52,565         | 10,000          | 42,565            |
| 2. Fixed Assets                  |                |                 |                   |
| ⑴ Other fixed assets             |                |                 |                   |
| Founding expenses                | 113,050        | 113,050         |                   |
| Total other fixed assets         | 113,050        | 113,050         | 0                 |
| Total fixed assets               | 113,050        | 113,050         | 0                 |
| Total assets                     | 165,615        | 123,050         | 42,565            |
| **Ⅱ. Liabilities**               |                |                 |                   |
| 1. Current Liabilities           |                |                 |                   |
| Withholdings                     | 72,568         |                 | 72,568            |
| Loan from officer                | 1,186,477      | 123,050         | 1,063,427         |
| Total current liabilities        | 1,259,045      | 123,050         | 1,135,995         |
| Total liabilities                | 1,259,045      | 123,050         | 1,135,995         |
| **Ⅲ. Net Assets**                |                |                 |                   |
| 1. General Net Assets            | -1,093,430     | 0               | -1,093,430        |
| Total net assets                 | -1,093,430     | 0               | -1,093,430        |
| Total liabilities and net assets | 165,615        | 123,050         | 42,565            |


### Net Assets Increase/Decrease Statement for FY2019
April 1, 2019 to March 31, 2020 (Unit: JPY)

| Title                                                                          | This FY (2019) | Prev. FY (2018) | Increase/Decrease |
| ------------------------------------------------------------------------------ | -------------- | --------------- | ----------------- |
| **Ⅰ. General Net Assets Increase/Decrease**                                    |                |                 |                   |
| 1. Ordinary Increase/Decrease                                                  |                |                 |                   |
| ⑴ Ordinary revenues                                                            |                |                 |                   |
| Interest received                                                              | 1              |                 | 1                 |
| Total ordinary revenues                                                        | 1              | 0               | 1                 |
| ⑵ Ordinary expenses                                                            |                |                 |                   |
| ① Business expenses                                                            |                |                 |                   |
| Travel and transportation expenses                                             | 12,080         |                 | 12,080            |
| Business expenses 1                                                            | 55,770         |                 | 55,770            |
| Total business expenses                                                        | 67,850         | 0               | 67,850            |
| ② Administrative expenses                                                      |                |                 |                   |
| Personnel expenses 1                                                           | 984,881        |                 | 984,881           |
| Total administrative expenses                                                  | 984,881        | 0               | 984,881           |
| Total ordinary expenses                                                        | 1,052,731      | 0               | 1,052,731         |
| Ordinary increase/decrease before valuation gain/loss this FY                  | -1,052,730     | 0               | -1,052,730        |
| Total valuation gain/loss                                                      | 0              | 0               | 0                 |
| Ordinary increase/decrease this FY                                             | -1,052,730     | 0               | -1,052,730        |
| 2. Non-ordinary Increase/Decrease                                              |                |                 |                   |
| ⑴ Non-ordinary revenues                                                        |                |                 |                   |
| Total non-ordinary revenues                                                    | 0              | 0               | 0                 |
| ⑵ Non-ordinary expenses                                                        |                |                 |                   |
| Total non-ordinary expenses                                                    | 0              | 0               | 0                 |
| Non-ordinary increase/decrease this FY                                         | 0              | 0               | 0                 |
| General net assets increase/decrease before transfer to other accounts this FY | -1,052,730     | 0               | -1,052,730        |
| General net assets increase/decrease before taxes this FY                      | -1,052,730     | 0               | -1,052,730        |
| Corporate tax, resident tax and business tax                                   | 40,700         | 0               | 40,700            |
| General net assets increase/decrease this FY                                   | -1,093,430     | 0               | -1,093,430        |
| General net assets at beginning of FY                                          | 0              | 0               | 0                 |
| General net assets at end of FY                                                | -1,093,430     | 0               | -1,093,430        |
| **Ⅱ. Designated Net Assets Increase/Decrease**                                 |                |                 |                   |
| Designated net assets increase/decrease this FY                                | 0              | 0               | 0                 |
| Designated net assets at beginning of FY                                       | 0              | 0               | 0                 |
| Designated net assets at end of FY                                             | 0              | 0               | 0                 |
| **Ⅲ. Net Assets at End of FY**                                                 | -1,093,430     | 0               | -1,093,430        |

### Income and Expenditure Statement for FY2019
April 1, 2019 to March 31, 2020 (Unit: JPY)

| Title                                                                          | Budgetary Amount | Settlement Amount | Difference | Note |
| ------------------------------------------------------------------------------ | ---------------- | ----------------- | ---------- | ---- |
| **Ⅰ. General Net Assets Increase/Decrease**                                    |                  |                   |            |      |
| 1. Ordinary Increase/Decrease                                                  |                  |                   |            |      |
| ⑴ Ordinary revenues                                                            |                  |                   |            |      |
| Interest received                                                              |                  | 1                 | -1         |      |
| Total ordinary revenues                                                        | 0                | 1                 | -1         |      |
| ⑵ Ordinary expenses                                                            |                  |                   |            |      |
| ① Business expenses                                                            |                  |                   |            |      |
| Travel and transportation expenses                                             |                  | 12,080            | -12,080    |      |
| Business expenses 1                                                            |                  | 55,770            | -55,770    |      |
| Total business expenses                                                        | 0                | 67,850            | -67,850    |      |
| ② Administrative expenses                                                      |                  |                   |            |      |
| Personnel expenses 1                                                           |                  | 984,881           | -984,881   |      |
| Total administrative expenses                                                  | 0                | 984,881           | -984,881   |      |
| Total ordinary expenses                                                        | 0                | 1,052,731         | -1,052,731 |      |
| Ordinary increase/decrease before valuation gain/loss this FY                  | 0                | -1,052,730        | 1,052,730  |      |
| Total valuation gain/loss                                                      | 0                | 0                 | 0          |      |
| Ordinary increase/decrease this FY                                             | 0                | -1,052,730        | 1,052,730  |      |
| 2. Non-ordinary Increase/Decrease                                              |                  |                   |            |      |
| ⑴ Non-ordinary revenues                                                        |                  |                   |            |      |
| Total non-ordinary revenues                                                    | 0                | 0                 | 0          |      |
| ⑵ Non-ordinary expenses                                                        |                  |                   |            |      |
| Total non-ordinary expenses                                                    | 0                | 0                 | 0          |      |
| Non-ordinary increase/decrease this FY                                         | 0                | 0                 | 0          |      |
| General net assets increase/decrease before transfer to other accounts this FY | 0                | -1,052,730        | 1,052,730  |      |
| General net assets increase/decrease before taxes this FY                      | 0                | -1,052,730        | 1,052,730  |      |
| Corporate tax, resident tax and business tax                                   | 0                | 40,700            | -40,700    |      |
| General net assets increase/decrease this FY                                   | 0                | -1,093,430        | 1,093,430  |      |
| General net assets at beginning of FY                                          | 0                | 0                 | 0          |      |
| General net assets at end of FY                                                | 0                | -1,093,430        | 1,093,430  |      |
| **Ⅱ. Designated Net Assets Increase/Decrease**                                 |                  |                   |            |      |
| Designated net assets increase/decrease this FY                                | 0                | 0                 | 0          |      |
| Designated net assets at beginning of FY                                       | 0                | 0                 | 0          |      |
| Designated net assets at end of FY                                             | 0                | 0                 | 0          |      |
| **Ⅲ. Net Assets at End of FY**                                                 | 0                | -1,093,430        | 1,093,430  |      |



