---
title: Viola のこれからと Vivliostyle Pub
author:
  - spring-raining
---

# Viola のこれからと Vivliostyle Pub

<div class="draft-author">
spring-raining
</div>

こんにちははじめまして、はるさめ（spring-raining）です。今回は、将来公開予定の **Vivliostyle Pub**（仮称）について紹介したいと思います。

Vivliostyle Pub は、Vivliostyle を使った Web アプリケーションです。Vivliostyle Pub を使うことで、ブラウザ上で HTML と CSS による原稿の執筆から組版、PDF の出力までを実現できます。このアイディアは以前私が公開した Web アプリの [**Viola**](https://viola.pub/) を継承したもので、今後は Vivliostyle Pub の開発に注力し将来的に Viola からの移行先とする予定です。

## Viola について

![](images/viola.png)

Viola は HTML と CSS を使って印刷可能な原稿を制作し PDF で出力できる、CSS 組版に特化したオンラインディタです。<span style="font-family: body">元</span>々私が Vivliostyle を知ったときに、より多くの人が Vivliostyle を使った CSS 組版を実現できるよう、個人サービスとして公開しました。また、私が現 Vivliostyle Foundation のメンバーと交流するきっかけにもなったプロダクトです。2017 年中盤から開発を始め、2018 年 1 月にエディタ機能のみを限定公開し、2018 年 9 月にアカウント機能やプロジェクト管理機能を追加して正式に公開しました。

しかし、私の生活環境が変わってしまい、Viola に注力できる時間が減ってしまったことにより、それ以降 Viola の更新が止まっている状態でした。利用状況の変化に伴い Viola の運用サーバもオーバースペック気味になっていき、毎月の AWS 費用が重荷になっていました。個人サービスのよくある末路ですね…

この状況を Vivliostyle Foundation のメンバーと相談し、Viola の開発や運営を Vivliostyle Foundation に委譲する形で、新しい Web サービスを再始動させることにしました。

## Vivliostyle Pub の変更点

Viola の後継となる Vivliostyle Pub は、ただ単に名前が変わるだけではありません。Viola からの変更点について、現時点で計画している内容を紹介します。

### GitHub との連携

Viola では GitHub と Google アカウントを認証基盤として使っていましたが、プロジェクトデータは Viola の内部で保存していました。Vivliostyle Pub は、より GitHub との連携を強化し、Vivliostyle Pub のプロジェクトがそのまま GitHub のリポジトリとして保存されるようになります。そのため、Vivliostyle Pub の利用には **GitHub アカウントが必要になる** 予定です。この変更で、よりエンジニアフレンドリーになり、他サービスや CI との連携も容易になります。

一方で、現時点では Vivliostyle Pub は GitHub を使ったことのない非技術者のユーザーにとって、敷居が高くなることが予想されます。長期的には、より幅広いユーザーへのサポートが必要になるでしょう。

### Vivliostyle Flavored Markdown（VFM） 対応

akabeko さんの記事にもある通り、現状問題となっている Markdown の表現力の低さを補うべく、VFM という新しい Markdown 方言を Vivliostyle Pub のエコシステムとして採用する予定です。「V」とはついているものの、Vivliostyle 専用の文法が追加されるわけではなく、あくまで書籍制作のために必要な機能を強化するという位置づけで、HTML への互換を前提とした用途の広い言語となることを目標としています。もちろん、VFM の仕様や実装はオープンソースです。

### 発表の場としての Vivliostyle Pub

初回のリリースでは公開とまではいかないかもしれませんが、Vivliostyle Pub ではプロジェクトの Web 公開機能も搭載予定です。このプラットフォームで公開される文章は、必然的に Vivliostyle により印刷可能な形式に変換できるので、将来は Vivliostyle Pub が技術書の公表の場になるかもしれません！

ただ公開できるだけでは GitHub Pages と機能的な差は無いので、Vivliostyle Viewer を活用し、紙や電子書籍と Web のプラットフォームをシームレスに繋ぐ独自の場となることを目指しています。

### One more thing...?

Vivliostyle Pub には、文章執筆・制作までの道のりの中で解決すべき課題がまだ残されています。中でも、技術同人誌制作のハードルの一つ「入稿」も、課題となるテーマです。もしオフラインの印刷会社と連携し、Web 上で入稿までの手続きが完了すれば、同人誌制作のハードルは一気に下がることでしょう。

あるいは CSS による組版自体がハードルになるかもしれません。CSS のテンプレート機能は、Viola では機能自体は用意したものの活用できていませんでした。Vivliostyle Pub ではこれを本格的に実装する予定です。

これらはまだアイディア段階ですが、Vivliostyle Foundation は多方面で Vivliostyle Pub の発展を検討しています。

## まとめ

あれこれと将来を展望を語ってしまいましたが、Vivliostyle Pub の開発はまだまだこれからです。正直に言うと、これら全てを現在の（私を含めた）開発リソースだけで実現することはとても大変でしょう… Vivliostyle コミュニティはいつでもどなたでも開発への参加を歓迎します。Vivliostyle Pub を CSS 組版の未来にしてください！
