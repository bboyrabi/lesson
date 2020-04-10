# レスポンシブデザイン

画面サイズによって適用するCSSを指定します。

```
<!--
    width=device-width は、
    アクセスした端末の画面サイズに合わせて文字などの大きさを調整する。
    initial-scale は、
    画面を表示したときの倍率を指定する。
 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
```
@media screen and (max-width: 500px) {
  /* 500px以下の画面に適用されるCSS */
}
```
