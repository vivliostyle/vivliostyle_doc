---
title: "一般社団法人ビブリオスタイル 2025年度活動報告書"
lang: ja
link:
  - rel: "stylesheet"
    href: "report.css"
---

# 一般社団法人ビブリオスタイル 2025年度活動報告書

## 2025年度（第8期 2025年4月1日〜2026年3月31日）活動報告

### プロダクト開発

今期における主要プロダクトのPR数（ただしアプリケーションによるものを除く）を示す。比較のために4期〜7期も併記している。

![図1：主要プロダクトのPR数](./img/fig-1.svg){ width=100% }

今期最大のトピックは、開発の活発化である。Vivliostyle.jsのPR数は175と前期の74から2倍以上に増加し、過去最高を記録した。Vivliostyle CLIも前期の41から89へと大きく伸びた。さらに、前期はわずか3にとどまっていたVFMも19にまで回復している。一方、Vivliostyle Pubは6と微減、Themesも2とこれまでで最も少ない数となった。総じて、Vivliostyle.jsとCLIを中心としたコア開発が大きく前進した1年であったといえる。

### NLnet財団からの助成金獲得

今期のもう一つの大きなトピックは、欧州のオープンソース支援団体である[NLnet財団](https://nlnet.nl/)から[NGI0コモンズ基金](https://nlnet.nl/commonsfund/)の助成対象として採択されたことである。詳細は[当法人のブログ記事](https://vivliostyle.org/ja/blog/2025/07/07/obtained-a-grant-from-nlnet/)を参照されたい。

NLnet財団は、欧州委員会のNext Generation Internet（NGI）イニシアチブの一環として、インターネットの公共性・プライバシー・セキュリティを高めるオープンソース技術プロジェクトを支援している。Vivliostyleはこの基金から助成を受けることになり、今期はその第1回〜第3回分として合計約143万円が交付された（決算報告書「受取補助金」参照）。

この助成により、これまで開発リソースの不足から進捗が緩やかだった以下のような領域に集中的に取り組めるようになった。

- Vivliostyle.jsにおける最新CSS仕様への対応（ページ分割アルゴリズムの改善、脚注処理など）
- Vivliostyle Pubのエディター機能の拡張とテーマ整備
- Vivliostyle CLIのブラウザサポート拡充
- ドキュメントサイトの整備

前掲の主要プロダクトのPR数の大幅な増加は、この助成によって開発リソースが確保されたことの直接的な成果でもある。

### ドキュメントサイトの刷新

開発の活発化を受けて、利用者向けの情報発信もまた強化する必要が生じた。そこで今期取り組んだのが、新たな公式ドキュメントサイト[docs.vivliostyle.org](https://docs.vivliostyle.org/ja/)の構築である。

このサイトは、Vivliostyleエコシステムを構成する4つのプロダクト（Viewer、CLI、VFM、Themes）について、初心者向けのチュートリアルから開発者向けのAPIリファレンスまで網羅的に提供することを目的としている。チュートリアル、FAQ、リファレンス、実践的な活用ガイド（脚注、CMYK変換、ページグループ対応など）、貢献ガイドといった構成で、各ドキュメントはWebPub・PDF・EPUB形式でダウンロード可能としている。これはVivliostyleの利点である「Single Source Multi Output」（1つのMarkdownソースから複数形式を生成する）を活かしたサイト設計でもある。

従来、Vivliostyleに関する情報はGitHubリポジトリのREADMEや`vivliostyle.org`のブログ・チュートリアル、有志による記事などに分散していた。新ドキュメントサイトは、これらを再整理し、利用者が必要な情報に辿りやすい一元的な場として位置づけている。今後も継続的な拡充を予定している。

### 理事

- [村上真雄 (Shinyu Murakami)](https://github.com/MurakamiShinyu)〈代表理事、設立時社員〉
- [リボアル・フロリアン (Florian Rivoal)](https://github.com/frivoal)〈理事、設立時社員〉
- [ヨハネス・ウィルム (Johannes Wilm)](https://github.com/johanneswilm)〈理事、設立時社員〉
- [小形克宏 (Katsuhiro Ogata)](https://github.com/ogwata)〈理事、2020年1月21日より〉
