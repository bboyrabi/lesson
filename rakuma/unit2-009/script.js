'use strict';

let myDog = {};
console.log(myDog);

myDog.type = 'dog';
myDog.name = 'ポチ';
myDog.age = 2;
myDog.gender = 'メス';
myDog.feeds = ['ユニ・チャーム愛犬元気', 'ドギーマン チーズキューブ', 'おいしい犬ごはん'];
console.log(myDog);

console.log(myDog.name);

for( let i = 0; i < myDog.feeds.length; i++ ) {
    console.log(myDog.feeds[i]);
}

let myCat = {
    age: 4,
    feeds: ['銀のスプーン', 'ジューシー'],
    gender: "メス",
    name: "ミイ",
    type: "cat"
}

let obj = {
    snake_case: 1234
}

console.log(obj.snake_case);


let weather = '晴れ';
const makeWeatherSentense = function( werather ) {
    if(!werather) {
        werather = '不明';
    }
    return '今日の天気は、' + werather + 'です';
}
let sentense = makeWeatherSentense( weather );
console.log(sentense);

function viewWeatherSentense ( weather ) {
    console.log(makeWeatherSentense( weather ));
}
viewWeatherSentense( weather );


let hello = 'Hello!';
function greeting() {
    console.log(hello);
}
greeting();

function sayHello() {
    let hello = 'Hello World!';
    console.log(hello);
}
sayHello();

// エラーが出ます
// function setGoodMorning() {
//     let greet = 'Good morning!';
// }
// console.log(greet);


let scope = 'global';
const demo = function() {
    let scope = 'function';
    if( true ) {
        let scope = 'block';
        console.log( scope );
    }
    console.log( scope );
}
demo();
console.log( scope );

// 課題１の答え
// 0 - 23までの整数が返却されるプログラム
let hour = Math.floor(Math.random() * Math.floor(24))
// ここからコーディングしてください
function viewHour(hour) {
    let text;
    if(hour < 12) {
        text = '午前' + hour + '時です';
    } else if(hour === 12) {
        text = '正午です';
    } else {
        text = '午後' + (hour - 12) + '時です';
    }
    console.log(text);
}
console.log('hour: ' + hour);
viewHour(hour);

/**
 * 任意の名前の引数で値を受け取り、
 * 引数が数値なら 50を足し、文字列であれば 任意の文字列を末尾に足した値を
 * 戻り値として返却する関数を作成して呼び出し、返ってきた値をコンソールに出力してください。
 * 関数名や足す文字列は自由でOKです。
 */

function test2(val) {
    switch(typeof val) {
        case 'number':
            return val + 50;
        case 'string':
            return val += '[任意の文字列]';
     }
 }
 console.log(test2('文字列'));
 console.log(test2('22'));
 console.log(test2(42));
 console.log(test2([]));
 console.log(test2(true));
 console.log(test2({}));
