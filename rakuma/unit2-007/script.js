'use strict';

let flag = false;
console.log(flag); // false
console.log(!flag); // true

// 真 かつ 真
console.log(true && true); // true
// 真 かつ 偽
console.log(true && false); // false

// 偽 または 真
console.log(false || true); // true
// 偽 または 偽
console.log(false || false); // false

// 否定(真 かつ 偽)
console.log(!(true && false)); // true

let i = 100;
if( i === 100 ) {
    console.log('変数 i の値は 100 です');
    i += 50;
}

if( i > 150) {
    i--;
} else if (i > 100){
    i += 50;
} else {
    i++;
}
console.log('変数 i の値は ' + i + ' です');

let val = null;
if( val ) {
    console.log('真です');
} else {
    console.log('偽です');
}

val = 0;
if( val ) {
    console.log('真です');
} else {
    console.log('偽です');
}

val = '';
if( val ) {
    console.log('真です');
} else {
    console.log('偽です');
}

val = undefined;
if( val ) {
    console.log('真です');
} else {
    console.log('偽です');
}

// 0以上100未満の数値をランダムでxに代入する
let x = Math.floor(Math.random() * Math.floor(100));
console.log(x);

switch('100 - 200') {
    case '100 - 200':
        console.log('100 - 200');
        break;
    case -100:
        console.log(-100);
        break;
    case true:
        console.log(true);
        break;
    case false:
        console.log(false);
}

const animal = '猫';
switch(animal) {
    case '犬':
        console.log('わんわん');
        break;
    case '鳥':
        console.log('ちゅんちゅん');
        break;
    case '猫':
        console.log('にゃんにゃん');
        break;
    default:
        console.log('その他の鳴き声');
}

const number = 2;
switch(number) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    default:
        console.log(-1);
}
// --------------------
// 年齢が 20歳未満 の 場合は 「未成人」、20歳以上なら 「成人」と コンソールへ出力 する場合
// --------------------
const age = 19;
let result;
if ( age < 20 ) {
    result = '未成人';
} else if ( age >= 20 ) {
    result = '成人';
}
console.log(result);

// --------------------
// 色の名前 によって その色に関連する物 を コンソールへ出力 する場合
// --------------------
const color = '赤';
let obj;

// if文で実行する場合
if ( color === '黄' ) {
    obj = 'バナナ';
} else if ( color === '赤' ) {
    obj = 'ポスト';
} else if ( color === '緑' ) {
    obj = '葉っぱ';
} else if ( color === '青' ) {
    obj = '海';
}
console.log(obj);

// switch文で実行する場合
switch ( color ) {
    case '黃':
        obj = 'バナナ';
        break;
    case '赤':
        obj = 'ポスト';
        break;
    case '緑':
        obj = '葉っぱ';
        break;
    case '青':
        obj = '海';
        break;
}


// 課題１の答え
// 0以上100未満の数値をランダムでxに代入する
let r = Math.floor(Math.random() * Math.floor(100));
// ここからコーディング
if(r >= 50) {
    console.log(r + ' は50以上です。');
} else {
    console.log(r + ' は50未満です。');
}

// 課題２の答え
// 0以上20未満の数値をランダムでxに代入する
let personsAge = Math.floor(Math.random() * Math.floor(20));
// ここからコーディング
if(personsAge < 6) {
    console.log(personsAge + '歳: 未就学児');
} else if(personsAge >= 6 && personsAge <= 12) {
    console.log(personsAge + '歳: 小学生');
} else if(personsAge >= 13 && personsAge <= 15) {
    console.log(personsAge + '歳: 中学生');
} else {
    console.log(personsAge + '歳: 義務教育は終了しました');
}

// 課題３の答え
const weathers = ['晴れ', '曇り', '雨', '台風'];
const weather = weathers[Math.floor(Math.random() * Math.floor(4))];
// ここからコーディング
let text = '';
switch(weather) {
    case '晴れ':
        text = '今日は天気がいいですね。';
        break;
    case '曇り':
        text = '明日は雨が降るかもしれません。';
        break;
    case '雨':
        text = '雨の音に癒やされますね。';
        break;
    default:
        text = '天気に注意してください。';
}
console.log(weather);
console.log(text);
