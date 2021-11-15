# CSS text-spacingサポート等Vivliostyle.jsの進化と今後の開発予定

2021-11-14 \
Shinyu Murakami \
Vivliostyle Foundation

# 目次 {.toc role="doc-toc"}

1. [Vivliostyle.js Updates](#vivliostyle-updates)
    1. [Vivliostyle.jsの最近の主な機能追加](#new-features)
2. [CSS text-spacing & hanging-punctuation](#css-ts-hp)
    1. [text-spacingで約物の詰め、和欧文間アキ](#text-spacing)
    2. [hanging-punctuation: force-end/allow-endで句読点の行末ぶら下げ](#hp-end)
    3. [hanging-punctuation: firstとlastの使い道](#hp-first-last)
3. [今後の開発予定](#upcoming)
    1. [優先度の高いVivliostyle.jsのissue](#todo)


# Vivliostyle.js Updates {#vivliostyle-updates}

## Vivliostyle.jsの最近の主な機能追加 {#new-features}

- v2.12 (2021-11-13)
  - [CSS Text hanging-punctuationプロパティ](https://drafts.csswg.org/css-text-3/#hanging-punctuation-property)をサポート
  - [CSS Text text-spacingプロパティ](https://drafts.csswg.org/css-text-4/#text-spacing-property)をサポート

以下については記事 [最近のVivliostyle.jsの進化について](https://vivliostyle.org/ja/blog/2021/10/12/recent-vivliostyle-js-updates/) 参照：

- v2.11 (2021-09-29)
  - Viewerにテキスト検索機能を追加
- v2.10 (2021-09-17)
  - [CSS unicode-range](https://www.w3.org/TR/css-fonts-3/#unicode-range-desc)をサポート、その他  
- v2.9 (2021-09-03)
  - [CSS `@supports`ルール](https://www.w3.org/TR/css-conditional-3/)をサポート

以下については、前回の発表「[Vivliostyle.js における CSS Paged Media の実装 (2021-04-10)](http://bit.ly/vivliostyle202104)」を参照：

- v2.8 (2021-04-16)
  - [CSS Page `:blank`ページセレクタ](https://drafts.csswg.org/css-page-3/#blank-pseudo)をサポート
- v2.7 (2021-04-07)
  - [CSS Page named page機能](https://drafts.csswg.org/css-page-3/#using-named-pages)をサポート
- v2.5 (2021-02-26)
  - [CSS GCPM `:nth()`ページセレクタ](https://drafts.csswg.org/css-gcpm/#document-page-selectors)をサポート
- v2.4 (2020-12-28)
  - [CSS GCPM named string機能](https://drafts.csswg.org/css-gcpm/#named-strings)をサポート

# CSS text-spacing & hanging-punctuation {#css-ts-hp}

## text-spacingで約物の詰め、和欧文間アキ {#text-spacing}

`text-spacing: normal` （デフォルトの約物詰め）の例：

<blockquote class="example" style="text-spacing: normal;">
<p>〈約物〉は、〈句点〉・〈読点〉「括弧（類）」、他！　「《英（数）》字ABC-123とか。」〈約物〉は、<b>〈句点〉</b>・<b>〈読点〉「括弧（類）」</b>「<i>《英（数）》</i>字<i>ABC-123</i>とか。」</b></p>
</blockquote>

`text-spacing: auto` の例：

<blockquote class="example" style="text-spacing: auto;">
<p>〈約物〉は、〈句点〉・〈読点〉「括弧（類）」、他！　「《英（数）》字ABC-123とか。」〈約物〉は、<b>〈句点〉</b>・<b>〈読点〉「括弧（類）」</b>「<i>《英（数）》</i>字<i>ABC-123</i>とか。」</b></p>
</blockquote>

- `auto`はデフォルトの約物詰め＋先頭詰め＋和欧文間アキ

`text-spacing: none` の場合：

<blockquote class="example" style="text-spacing: none;">
<p>〈約物〉は、〈句点〉・〈読点〉「括弧（類）」、他！　「《英（数）》字ABC-123とか。」〈約物〉は、<b>〈句点〉</b>・<b>〈読点〉「括弧（類）」</b>「<i>《英（数）》</i>字<i>ABC-123</i>とか。」</b></p>
</blockquote>

`normal`、`auto`、`none`のほかに指定できる値：

```
[ trim-start | space-start | space-first ] ||
[ trim-end | space-end | allow-end ] ||
[ trim-adjacent | space-adjacent ] ||
ideograph-alpha || ideograph-numeric
```

- `normal`は`space-first trim-end trim-adjacent`と同じ（注）
- `auto`は`trim-start trim-end trim-adjacent ideograph-alpha ideograph-numeric`と同じ

注：現在の[ドラフト仕様のtext-spacing: normalの定義](https://www.w3.org/TR/css-text-4/#valdef-text-spacing-normal)では`normal`は`space-start allow-end trim-adjacent`と同じとなっている。`space-start`（行頭を詰めない）を`space-first`（段落先頭を詰めないが折り返し行頭は詰める）に変更することについて、[仕様の議論中](https://github.com/w3c/csswg-drafts/issues/2462)。

- 値`auto`は、実装によりタイポグラフィ的に高品質になるような指定とされている（[CSS Text Level 4 Editor's Draftのtext-spacing: autoの定義](https://drafts.csswg.org/css-text-4/#valdef-text-spacing-auto)）。
- `ideograph-alpha`（漢字・カナと欧文文字の間にアキ）と`ideograph-numeric`（漢字・カナと数字の間にアキ）は個別に指定可能。アキの幅は1/6em（注：現在の[CSSドラフト仕様](https://www.w3.org/TR/css-text-4/#valdef-text-spacing-ideograph-alpha)や[JLREQ](https://www.w3.org/TR/jlreq/#id209)）では1/4emだが[その見直しの議論](https://github.com/w3c/jlreq/issues/280)がある。
- `allow-end`（行末約物を全角どりできなければ詰める）は未サポートで`trim-end`（行末約物を常に詰める）と同じ扱い。

- text-spacingによる約物の詰めは、実際に文字幅が全角幅である約物だけに機能し、フォントによってはプロポーショナルでもともと幅が狭い約物には影響しない。

`font-feature-settings: "palt"`（詰め組みフォント機能設定） を指定した例（`text-spacing`はデフォルトの`normal`だが`none`でも結果は変わらない）：

<blockquote class="example" style="text-spacing: normal; font-feature-settings: 'palt';">
<p>〈約物〉は、〈句点〉・〈読点〉「括弧（類）」、他！　「《英（数）》字ABC-123とか。」〈約物〉は、<b>〈句点〉</b>・<b>〈読点〉「括弧（類）」</b>「<i>《英（数）》</i>字<i>ABC-123</i>とか。」</b></p>
</blockquote>

## hanging-punctuation: force-end/allow-endで句読点の行末ぶら下げ {#hp-end}

`hanging-punctuation: force-end`（行末強制ぶら下げ）の例：

<blockquote class="example" style="hanging-punctuation: force-end; text-indent: 1em;">
<p>ごんは、村の小川の堤まで出て来ました。あたりの、すすきの穂には、まだ雨のしずくが光っていました。川はいつもは、水が少いのですが、三日もの雨で、水が、どっとましていました。ただのときは水につかることのない、川べりのすすきや、萩の株が、黄いろくにごった水に横だおしになってもまれています。ごんは川下の方へと、ぬかるみみちを歩いていきました。</p>
</blockquote>

`allow-end`のほうは、行末に収まらない句読点だけぶら下げる指定。（注：現在は未サポートで`force-end`と同じ扱い。）

## hanging-punctuation: firstとlastの使い道 {#hp-first-last}

### ①`text-indent: 1em`で段落行頭を1字下げするが開き括弧類は1字分も下げたくない場合 {#hp-first-last-1}

`text-indent: 1em; hanging-punctuation: first;` の使用例：

<blockquote class="example" style="hanging-punctuation: first; text-indent: 1em;">
<p>ふと見ると、川の中に人がいて、何かやっています。ごんは、見つからないように、そうっと草の深いところへ歩きよって、そこからじっとのぞいてみました。</p>
<p>「兵十だな」と、ごんは思いました。兵十はぼろぼろの黒いきものをまくし上げて、腰のところまで水にひたりながら、魚をとる、はりきりという、網をゆすぶっていました。</p>
</blockquote>

### ②引用符を突き出すスタイル {#hp-first-last-2}

`hanging-punctuation: first last;` の使用例：

<blockquote class="example" style="hanging-punctuation: first last; text-align: justify; text-align-last: end;">
<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus elit eu diam semper, ut feugiat elit mollis. Etiam lobortis hendrerit venenatis. Aliquam sagittis, nibh et rhoncus congue nibh arcu suscipit diam, id imperdiet lorem enim eu dui.”</p>
</blockquote>

- 行末ぶら下げ（force-end、allow-end）の対象文字は句読点（。 、 ． ， ）だが、段落先頭（first）・段落末（last）のぶら下げ対象は引用符・括弧類（欧文用・和文用を問わず）。


# 今後の開発予定 {#upcoming}

## 優先度の高いVivliostyle.jsのissue {#todo}

- [Support Web fonts loaded via JavaScript](https://github.com/vivliostyle/vivliostyle.js/issues/735)
  > Webフォントのサービスのうち、とくに日中韓国語フォントはダイナミックサブセッティングが使われているために、JavaScript 埋め込みコードによって利用するようになっています。
しかし、Vivliostyleでは HTML 文書内の JavaScript を無視するため、それを利用できません。

以下のCSSの機能は、数年前からWebブラウザで利用できて普及しているのに、Vivliostyle.jsで対応できてなかった：
- [Support CSS Grid Layout](https://github.com/vivliostyle/vivliostyle.js/issues/539)
- [Support CSS custom properties (variables)](https://github.com/vivliostyle/vivliostyle.js/issues/540)

これらを含め、今後も以下の課題に取り組んでいく予定：

- Webブラウザで利用できる標準のCSS機能がVivliostyle.jsで利用できない問題が残っているのを解消
- まだ多く残っている[不具合](https://github.com/vivliostyle/vivliostyle.js/issues?q=is%3Aopen+is%3Aissue+label%3Abug)を直して組版品質を高める
- CSS組版にとって重要なCSS機能の先行実装をさらに進める

Vivliostyle.jsのこれからに、乞うご期待！
