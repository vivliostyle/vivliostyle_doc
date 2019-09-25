---
title: CSS で View を定義する意義
author:
  - akabeko
---

# CSS で View を定義する意義

<div class="draft-author">
akabeko
</div>

アプリケーションや文書の View (外観) を定義する技術として見た、CSS の意義と期待について。

## アプリケーション

Web を除くデスクトップやモバイル向けのアプリケーション開発では View を独自の技術と記法により定義することが多い。例として、これまで私が開発を経験したプラットフォームと View 技術をまとめる。

| プラットフォーム |                               技術                                | 定義・編集                                                                                                                                   | 保存形式                                                                                       |
| :--------------: | :---------------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|     Windows      |                             Win32/MFC                             | Visual Studio [Resource Editors](https://docs.microsoft.com/en-us/cpp/windows/resource-editors)                                              | 独自 (プレーン テキスト)                                                                       |
|        〃        |                               Forms                               | Visual Studio [Form Designer](https://docs.microsoft.com/ja-jp/visualstudio/ide/step-1-create-a-windows-forms-application-project)           | C#                                                                                             |
|        〃        |                                WPF                                | Visual Studio [XAML Designer](https://docs.microsoft.com/en-us/visualstudio/designers/creating-a-ui-by-using-xaml-designer-in-visual-studio) | [XAML](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/xaml-overview-wpf) (XML) |
|      macOS       |    [AppKit](https://developer.apple.com/documentation/appkit)     | Xcode [Interface Builder](https://developer.apple.com/xcode/interface-builder/)                                                              | Storyboard (XML)、XIB (XML)                                                                    |
|       iOS        |     [UIKit](https://developer.apple.com/documentation/uikit)      | Xcode [Interface Builder](https://developer.apple.com/xcode/interface-builder/)                                                              | Storyboard (XML)、XIB (XML)                                                                    |
|     Android      | [View](https://developer.android.com/reference/android/view/View) | Android Studio [Layout Editor](https://developer.android.com/studio/write/layout-editor)                                                     | [Layouts](https://developer.android.com/guide/topics/ui/declaring-layout) (XML)                |

こうして並べると定義・編集の方法こそ違えど、保存形式は XML 系が多い。これは 1990 〜 2000 年代にかけて XML ブームがあったことが関係しているのかもしれない。データ構造を宣言的に定義するファイル形式として XML が好まれ、特に View は階層を持つことが多いため相性もよかった。

ならば XHTML のように装飾は CSS で定義するのかというと、そうなってはいない。いずれも独自の XML 属性により装飾している。以下は Android の例。

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <android.support.design.widget.TabLayout
        android:id="@+id/tabs"
        style="@style/CustomTabLayout"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="@color/colorPrimary"
        />

    <android.support.v4.view.ViewPager
        android:id="@+id/pager"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        />

</LinearLayout>
```

属性の値は直値や定数の他、`@+id/pager` のように外部リソース参照も指定可能。他の XAML や Storyboard なども設計は似通っている。そのため XML タグと属性の差を埋めれば共通化できそうに思えるが、参照しているリソースなどの仕組みは大きく異なるため難しい。結局は別物として学習・運用しなければならなず、コストがかさむ。

Web ブラウザーがそうであったようにプラットフォーム ベンダー間で開発環境に対する協調がおこなわれればよいのだが、それは難しいだろう。一方、このような状況を踏まえて Web 由来の技術をアプリケーション開発へ転用する動きもある。以下は代表的なもの。

- Apache Cordova[^ https://cordova.apache.org/]
- React Native[^ https://facebook.github.io/react-native/]
- Electron[^ https://electronjs.org/]
- PWA (Progressive Web Apps)[^ https://developer.mozilla.org/en-US/docs/Web/]

PWA を除き、他はネイティブ機能を呼び出す仕組みを提供している。そのためパフォーマンス問題に目をつぶれば、実質的に Web 技術でクロス プラットフォーム開発可能となる。もちろん View も CSS となるため運用と学習コストも低減されるだろう。

この中でも特に React Native の設計が面白い。他は View に既存 Web ブラウザーを利用するのだが React Native はレイアウトを [Yoga Layout](https://yogalayout.com/) という独自エンジンにより処理する。

Yoga は CSS の Flexbox 的なレイアウトを実現するクロスプラットフォームの C++ ライブラリー。レイアウト機能限定だがネイティブなアプリケーション開発に CSS の知見を持ち込む事例と言ってよいだろう。これを利用するクロス プラットフォーム GUI ライブラリーに [Yue](https://libyue.com/docs/latest/js/guides/getting_started.html) があり、こちらも注目株だ。

徐々にではあるが、ネイティブなアプリケーション開発の世界に CSS 的な View 定義が浸透し始めている。こうした技術により、プラットフォーム間の View 定義が共通化されてゆくことに期待したい。

## 文書

私の専門はソフトウェア開発なので文書の View である組版について詳しくないのだが、いま在籍している会社が DTP 事業を手掛けていることもあり、Adobe InDesign で組版の基本を学ぶ研修を受けたことがある。そこでは段組み、文字詰め、禁則処理などの初歩を教わった。

研修を通して読みやすさに対する技術の一端に触れたわけだが、同時に疑問を持った。

- InDesign で処理される組版技術は CSS のように規格化されてるのだろうか？
- 規格化されているとして、組版を処理するソフトウェアはそれに準拠しているのだろうか？
- 例えば InDesign と他のソフトウェア間で組版技術の互換はあるのだろうか？

規格については

- JIS X 4051:2004 日本語文書の組版方法 | 日本規格協会 JSA Group Webdesk[^ https://webdesk.jsa.or.jp/books/W11M0090/index/?bunsyo_id=JIS%20X%204051:2004]
- 日本語組版処理の要件 (JLREQ)[^ https://www.w3.org/TR/jlreq/ja/]

などがある。では組版ソフトウェアの対応状況はいかほどか。Web でいう [Can I use](https://caniuse.com/) のようなサイトは存在しないようなので Google 検索や各種公式サイトから、ざっくりと調べてみた。

| 製品                                                              | JIS X 4051/JLREQ 対応                                                                                                                                                                                                                        |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Adobe InDesign](https://www.adobe.com/jp/products/indesign.html) | [InDesign での CJK 文字の組版](https://helpx.adobe.com/jp/indesign/using/composing-cjk-characters.html)に JIS X 4051 へ言及あり。JLREQ は不明。                                                                                              |
| [QuarkXPress](http://www.quark.com/jp/Products/QuarkXPress/)      | 公式サイト、Google 検索ともに言及を見つけられず。                                                                                                                                                                                            |
| [LaTeX](https://www.latex-project.org/)                           | 公式サイト検索では見つからないが Google 検索で [jlreq - TeX Wiki](https://texwiki.texjp.org/?jlreq) や [PXrubrica パッケージ ～美しい日本のルビ組版～ [電脳世界の奥底にて]](http://zrbabbler.sp.land.to/pxrubrica.html) など複数の言及あり。 |
| [The Vivliostyle Project](https://vivliostyle.org/ja/)            | [「日本語組版処理の要件(JLREQ)」とは何か](https://www.slideshare.net/shinyumurakami/jlreq)や[〈次世代 CSS 組版〉Vivliostyle プロジェクト](https://www.slideshare.net/shinyumurakami/page2015vivliostyle)など複数の言及あり。                 |
| XML 組版                                                          | 複数企業が独自に手掛けているようだが、見つけた言及は[富士美術印刷株式会社　 XML 対応](http://www.fujibi-g.co.jp/hp/dtp/dtp_xml/dtp_xml.html)のみ。                                                                                           |

規格はあるものの、対応状況を明確に公開している製品はないようだ。そのため同じ文字詰めであっても、一方の操作と設定が他方で有効とは限らない。製品ごとの癖を学習して成果物を検証する必要がある。せっかく規格があるのに、現状はうまく活かせていないのではないか。

関連する動きとして JLREQ と CSS 関連に注目している。

- w3c/jlreq[^ https://github.com/w3c/jlreq]
- JLREQ と CSS（1） | 電書魂[^ http://densyodamasii.com/?p=3222]
- JLREQ と CSS（2） | 電書魂[^ http://densyodamasii.com/?p=3258]

これは Web ブラウザーやその技術を転用した EPUB 上で適切な組版を再現するための試みであると同時に、組版規格を共通のソフトウェア資産として定義・検証可能にするための絶好の機会ではなかろうか。

理想としては Web における [w3c/csswg-drafts](https://github.com/w3c/csswg-drafts) や [tc39/ecma262](https://github.com/tc39/ecma262) のように規格の議論と策定が公開され、採用するソフトウェア自身が対応状況を明示することが望ましい。Web もブラウザー間の互換性が問題になり、このような運用へ至った。文書の組版もそうなれば幸いだ。

## CSS で View を定義できたなら

CSS によりアプリケーションや文書の統一的な View 定義が可能となった世界を想像してみる。極めて楽観的な展望だが、中には実現するものもあるかもしれない。

### アプリケーション

View や GUI において機能・構造と外観の分離が進み、HTML/CSS のような関係となるだろう。機能・構造はプラットフォーム固有だが、外観は CSS として共通化できる。例えばボタン。機能・構造にあたる API は異なれど、それらは共に CSS を参照する設計となるはず。

CSS の定義・参照まわりは Web の [CSS Modules](https://github.com/css-modules/css-modules) や [CSS in JS](https://github.com/styled-components/styled-components) のように設計されるだろう。最近は [SwiftUI](https://developer.apple.com/xcode/swiftui/) と [Jetpack Compose](https://developer.android.com/jetpack/compose) などプログラミング言語中に宣言的な GUI 定義をする動きがあるため、Web でいう React + CSS in JS のようになる可能性も考えられる。

開発体験としては Web における CSS のエコ システムが再現されるだろう。View の共有が容易となるため、[Material Design](https://material.io/design/) や諸々の CSS フレームワークがネイティブ アプリケーションにやってくる。これらを利用せずに自作するとしても、Web フロントエンドの知見とツールを転用できるから開発コストは大きく低減されるはず。

Web 以外でも View のテストに [Storybook](https://storybook.js.org/) を利用できるかもしれない。機能・構造と外観は分離され、View と密接な機能はクリックやホバーによる外観の変更だからテストは HTML/CSS で代替しやすくなる。例えばボタンの View をテストしたいとして、その構造表現はプラットフォーム固有 API でなく `<div>` や `<span>` であっても問題ないはず。

サード パーティー製 View コンポーネントの普及も見込める。プラットフォーム共通化が進むことで開発者は大幅に増加するだろう。結果、View コンポーネントをライブラリーとして配信する動きが現在より活発となり、[GrapeCity](https://www.grapecity.co.jp/) のようにコンポーネント販売ビジネスする企業も増えそうだ。

### 文書

CSS で View = 組版を定義できるなら、組版ソフトウェアと Web ブラウザー間で処理エンジンを共有する方向に進むだろう。自作にこだわる強い理由がない限り、既存エンジンを利用するほうが開発コスト的に好ましい。

Web ブラウザーでは Opera と Microsoft が独自エンジンをやめて Chromium を採用した。これは多様性の観点では損失だが、仕様の再現性としてはメリットになる。エンジン開発の優劣を競うより、それを利用する部分に注力したほうがよいと判断したのだろう。組版ソフトウェアでもそうなるかもしれない。

例えば自動組版。これを Adobe InDesign で処理する場合は ExtendScript Toolkit や XML などを駆使するわけだが、CSS で組版可能なら Web ブラウザーも選択肢となり得る。本書の作成に用いられた Vivliostyle はその実例で、Headless Chrome により Chrome を呼び出して組版している。

いずれはアプリケーションと文書の垣根さえも取り去られ、グラフィック デザイナーがどちらも扱う時代がくるかもしれない。
