# JavaScript学習

- プログラムは基本的に上から下に順番に実行されます

## コンソールの使い方

`console.log('コンソールに表示させる文字列');`

### 警告を表示する

`console.warn('警告を表示します');`

### エラーを表示する

`console.error('エラーを表示します');`

## コメントの記述方法

コメント（メモ）はプログラム内に書くことができます。

### 1行をコメントする

行の先頭に`//`を記述する

`// console.log('これはコメントなので実行されません');`

### ブロックでコメントする

複数行をまとめてコメントとするには`/**/`で囲みます。
```
/*
  console.log('これはコメントなので実行されません');
  if(true) {
    console.log('これはコメントなので実行されません');
  }
 */
```

## 値と変数

値とは、文字列や数値などのプログラミングで扱うデータのことです。

```
  // 数値をコンソールに表示する
  console.log(0123); // 0123 と表示されます。
  // 文字列をコンソールに表示する
  console.log('文字列を表示する'); // 文字列を表示する と表示されます。
```
文字列は、 ' (シングルクォート)で囲みます。
数値は、そのままです。

数値をシングルクォートで囲むと文字列になります。

```
  console.log(123 + 1); // 124 と表示されます。
  // 文字列123 に 数値の1を足す。
  console.log('123' + 1); // '1231' と表示されます。
```

変数とは、値を格納する箱のようなものです。値をそのまま使用することはほとんどないため、変数を用いてプログラミングを行います。
```
  // 変数を表示する
  let test = 0123;
  console.log(test); // 0123 と表示されます。
  test = '文字列を表示する';
  console.log(test); // 文字列を表示する と表示されます。
```

変数は`const`または`let`というキーワードを使って作成します。

`const`で作成された変数は、以降その内容を変更できません。

`let`で作成された変数は、内容を変更することが可能です。

```
  const name = 'のびのびた';
  name = 'みなもとしずか'; // できません

  let result = 0;
  result = result + 100; // できます
```

## 演算について

足し算や引き算、掛け算、割り算など演算ができます。

演算する際に使用する +、-、\*、/、などの記号を`演算子`といいます。

```
  console.log(1 + 2); // 3 が表示されます。

```

またJavaScriptでは`+`演算子を使用することで文字列を結合することができます。
```
  const name = 'のびた'；
  console.log('私の名前は' + name + 'です'); // 私の名前はのびたです
```

### インクリメントとデクリメント

変数が`数値`かつ`let`で作成されたものであれば、演算子`+`または`-`を使用して「1を足す（インクリメント）」「1を引く（デクリメント）」をすることができます。

```
  let i = 0;
  i++; // +を2つ記述することでインクリメント
  console.log(i); // 1

  i--; // -を2つ記述することでデクリメント
  console.log(i); // 0
```
また、記号を前につけるか後につけるかで実行内容が変わります。

`前につけた場合`は、すぐに演算が行われますが、`後につけた場合`は、行の処理が終了した後に演算が行われます。
```
  let i = 0;
  console.log(i++); // 0 -> まだ0のまま
  console.log(i);   // 1 -> 行が終わったので1になる
  console.log(--i); // 0 -> すぐ実行されるので0になる
```
`後に付けるインクリメント`は以下と同義です。
```
  let i = 0;
  i = i + 1;
```

### 代入記号
`i = i + 1;`のような処理を簡略化できます。
```
  let i = 0;
  i += 1; // i = i + 1 と同義
  i *= 4; // i = i * 4 と同義
```

## 真偽値と条件文

真偽値`true`および`false`を使って、真偽を表現することができます。
```
  let result = true;
  console.log(result); // true が表示されます。
```
### 演算について
#### AND演算、OR演算
真偽値ではAND演算(&&)、OR演算(||)を使用することができます。

AND演算は、日本語でいう「かつ」と同じ意味で、例えば`xxxかつyyy` であれば`xxx`も`yyy`も`true`の場合のみtrueとなります。
```
  let xxx = true, yyy = true;
  console.log(xxx && yyy); // true が表示されます。
  yyy = false;
  console.log(xxx && yyy); // false が表示されます。
```
OR演算は、日本語でいう「または」と同じ意味で、例えば`xxxまたはyyy`であれば`xxx`か`yyy`のどちらかでも`true`の場合のみtrueとなります。
```
  let xxx = true, yyy = true;
  console.log(xxx || yyy); // true が表示されます。
  yyy = false;
  console.log(xxx || yyy); // true が表示されます。
```
#### 比較演算
数値の大小を比較する`比較演算子(<、>、<=、>=, ===)`を使用することができます。
```
  let x = y = 100; // xとyに100をまとめて代入

  // x が y より小さければtrue
  console.log(x < y);   // false が表示されます。
  // x が y と同等か小さければtrue
  console.log(x <= y);  // true が表示されます。
  // x が y と同等であればtrue
  console.log(x === y);  // true が表示されます。
```

この真偽値は主にプログラミングにおける条件分岐が必要な際に使用されます。

### if文について
条件分岐を表現するには`if`という関数を使用します。

書き方は、`if(真偽値) {}`というように `if`の後に`()`を書きその中に条件となる真偽値を書きます。さらに、この条件に一致した処理を記述するためにブロック`{}`を使用し、この中に処理を記述します。
```
  if(条件文) {
    条件が真だった場合の処理
    ブロック内で複数行記述でき
  }
```
また、条件に一致しなかった場合の処理を記載する`else`や、一致しない場合に改めて条件を設定する`else if`を使用することができます。

```
  if(条件文1) {
    条件文1が真だった場合の処理
  } else if(条件文2) {
    条件文1が偽で条件文2が真だった場合の処理
  } else {
    いずれも偽だった場合の処理
  }
```
例題：
`100未満かつ0以上の数値xが、1桁の数値であれば先頭に0を追加して文字列としてコンソールに表示する。2桁であればそのまま文字列として表示させる。`
```
  // 0以上100未満の数値をランダムで取得する
  let x = Math.floor(Math.random() * Math.floor(100));
  if(x < 10) {
    // x が 10未満であれば1桁であるため先頭に0を追加してコンソールに表示する。
    console.log('0' + x); // 文字列結合
  } else {
    console.log('' + x); // 空文字と結合することで数値を文字列に変換する
  }
```
### switch文について
変数の値によって複数の条件分岐がある場合は`switch`を使用することで書きやすくなります。

例題：
変数animalの値に該当する動物の鳴き声をコンソールに表示する。動物は、'dog'は'わん'、'cat'は'にゃん'、'bird'は'ちゅん'、それ以外は'サイレント'と表示する。

if文で書いた場合
```
  const animal = 'dog'; // dog または cat または bird または それ以外が入る想定
  if(animal === 'dog') {
    console.log('わん');
  } else if(animal === 'cat') {
    console.log('にゃん');
  } else if(animal === 'bird') {
    console.log('ちゅん');
  } else {
    console.log('サイレント');
  }
```
switchで書いた場合
```
  const animal = 'dog'; // dog または cat または bird または それ以外が入る想定
  switch(animal) {
    case 'dog':
      // 'dog'と一致した場合の処理
      console.log('わん');
      break; // switchから抜けます。記載しなかった場合は下記の'cat'の処理も行われます。
    case 'cat':
      console.log('にゃん');
      break;
    case 'bird':
      console.log('ちゅん');
      break;
    default:
      // どのケースにも当てはまらなかった場合の処理を記載します。省略できます。
      console.log('サイレント');
  }
```

## ループ(for文)
ループ文には`for`や`while`、`do...while`などがありますが、
ほぼほぼ`for`文で事足りるため`for`文を覚えておけば問題ありません。

for文の書き方
```
  for ([初期化式]; [条件式]; [加算式]) {
    処理
  }
```

1. 初期化式には、ループさせる条件に必要な変数の宣言などを行います。カウンタの宣言など。
2. 条件式はループ処理を継続する条件を記述します。
3. 加算式はループの終了後かつ条件式判定前に処理される式を記述します。通常はカウンタのインクリメントなど。

例題：
0から99までの数値をコンソールに表示させる処理。
```
  for(let i = 0; i < 100; i++) {
    console.log(i);
  }
```

#### continueについて
`continue`を使用してループの途中で処理を中断し、加算式に移行することができます。
```
  const animals = ['dog', 'cat', 'bird', 'other']; // 配列をanimalsに代入します。
  // 配列の最初のindexは0から始まり、以降1ずつ増えていきます。
  // 配列の'dog'はindex番号0で参照可能です。(animals[0]は'dog'です。)

  for(let i = 0; i < animals.length; i++) { // 配列の長さ(animals.length)だけループさせます。
    if(animals[i] === 'cat')
      continue;
    console.log(animals[i] + 'はcatではありません'); // catの場合は表示されません
  }
```

#### breakについて
`break`を使用してfor文から強制的に抜けることができます。
```
  const animals = ['dog', 'cat', 'bird', 'other'];
  for(let i = 0; i < animals.length; i++) {
    if(animals[i] === 'cat') {
        console.log('catのindex番号は' + i + 'です');
        break;
    }
    console.log(i); // index番号1でbreakするため、0以降はコンソール表示されません。
  }
```
## function
ある処理をひとまとめにした関数`function`を作成することができます。

同じ処理が繰り返し行われる場合などに関数を定義しておくと、プログラミングの可読性の向上や、修正などのメンテナンスが容易になります。

関数には`無名関数`、`名前付き関数`などがあり、JavaScriptの場合、作成した関数は変数に代入することができます。

functionの書き方
```
  // 無名関数
  function(引数) {
    処理
  }
  // 名前付き関数
  function 関数名(引数) {
    処理
  }
```
functionの作成と実行
```
  // 無名関数を作成しfに代入します
  const f = function() {
    console.log('無名関数を作成しました。');
  }
  // fを実行します
  f(); // '無名関数を作成しました。'が表示されます。

  // 名前付き関数を作成し実行します
  hello('山本'); // 名前付き関数の場合は関数が定義されていれば作成と呼び出しの順序は関係ない.
  function hello(name) {
    console.log('Hello ' + name);
  }
```

#### 引数と返り値
引数とは関数内で使用するパラメータです。引数は複数使用可能で、`,`で区切ります。

関数で処理した結果を返却する必要がある場合は`return 返却値;`を実行します。返却値は引数と違って複数返すことができません。返却値がない場合は`return`のみで関数の処理を終了します。関数の最終行の返り値なし`return`は省略することができます。

例題：
２つの引数を乗算した結果を返却する関数を作成し、実行した結果をコンソールに表示する
```
  function mult(x, y) {
    return x * y; // xとyを乗算し結果を返却します
  }

  let result = mult(4, 8); // mult関数を実行し、得られた結果をresultに設定します
  console.log(result); // 32
```

#### デフォルトパラメータ
引数の値にデフォルトの値を設定しておくことが来ます。
```
  const notSetDefaultPrams = function(param) {
    console.log(param);
  };
  console.log(notSetDefaultPrams());              // 未定義である'undefined'が表示されます。
  console.log(notSetDefaultPrams('set param'));   // 'set param'が表示されます。

  const enabledDefaultPrams = function(param = 'default') {
    console.log(param);
  };
  console.log(enabledDefaultPrams());             // 'default'が表示されます。
  console.log(enabledDefaultPrams('set param'));  // 'set param'が表示されます。
```
