---
title: GitHub+Circle CI を用いた Vivliostyle+Markdown による組版をやってみた
author:
  - MH35
---

# GitHub+Circle CI を用いた Vivliostyle+Markdown による組版をやってみた

<div class="draft-author">
MH35
</div>

## Circle CI とは

Circle CI とは、継続的インテグレーションサービスの 1 つであり、コミットからデプロイまでのパイプラインを作成して自動化するサービスである。このサービスは、初期費用が無料であり、簡単に試すことができるのが利点である。今回、私はそれを使うことにした。

## Circle CI のイメージ

出来合いのものを使おうとすると壁があったため(Pandoc を入れる必要があったから)、自前で作ることにした。その際には、以下のパッケージのインストールは必須である[^1]。

[^1]: https://circleci.com/docs/ja/2.0/custom-images/

- git
- ssh
- tar
- gzip
- ca-certificates

その際、いろいろと試行錯誤をしてみたが、結局こんな感じの構成になった。

1. Pandoc をインストールする
2. レポジトリを入れるために Curl をインストールする
3. Node.js をインストールする
4. gcc や make をインストールする
5. gulp をインストールする
6. git をインストールする
7. gnupg と language-pack 各種をインストールする
8. Google Chrome をインストールする

あとは Docker のイメージをビルドした上で Docker Hub 上で公開すれば Docker 側の準備は完了である。
今回使ったイメージのレポジトリはこちら[^2]、イメージはこちら[^3]にある。

[^2]: https://github.com/mh35/builddoc_docker
[^3]: https://hub.docker.com/r/mh35jp/builddoc

## ビルドするコンテンツ

ざっくりいうと、本文・テンプレート・SCSS・フォントとビルドスクリプトから構成される。
ビルドスクリプトの Gulpfile の中身はこんな感じである。

1. SCSS をコンパイルして CSS にする
2. 画像群をコピーする
3. Pandoc で Markdown を HTML にする
4. Vivliostyle で PDF に変換する

それをうまい具合に CircleCI でつなぎこめばうまくいく…はずだった。

CircleCI へのつなぎこみは.circleci/config.yml でこのようにして行う。

```yaml
version: 2.1
jobs:
  build:
    docker:
      -
        image: 誰の/どのイメージ:イメージのタグ
    steps:
      - checkout
      -
        run:
          command: コマンド1
          name: コマンド1説明
      -
        run:
          command: コマンド2
          name: コマンド2説明
      -
        run:
          command: コマンド3
          name: コマンド3説明
      -
        store_artifacts:
          path: 成果物のパス
```

## うまくいかない

うまくいかなくて延々と挫折していた。何が原因かわからずにずっと放置せざるを得なくなっていた。

## そして締切日に原稿投げてフィードバックもらって相談していたら

締切日に原稿を送ったら、原稿が短いと言われた。だが、全く何をすればいいのかわからず、レポジトリを見てもらったら、spring-raining さん( https://github.com/spring-raining )にフォントのパスがおかしいとの指摘をもらった。マージをして動かしたら、無事にフォントが埋め込まれた PDF ができた。単純に自分の CSS/SCSS の扱いが苦手というオチだった。

## こうして出来上がったレポジトリはこちら

このレポジトリ[^4]になる。このレポジトリを clone して、CircleCI 側からレポジトリに接続すると、CircleCI が PDF をビルドしてくれる。必要なくなったら CircleCI 側からデプロイ設定を解除すればよい。

[^4]: https://github.com/mh35/builddoc_content

## 教訓

CSS の挙動は勉強したほうが良さそうである。

## 今後の課題

これをいかにして実用的な本に合わせた CSS にするかなど。Vivliostyle 自体の基本的な使い方である。そのあたりの勉強を始めていきたい。
