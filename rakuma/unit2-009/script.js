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

let count = 0;
function incrimentCount() {
    return count++;
}
console.log(incrimentCount()); // 0
console.log(incrimentCount()); // 1
console.log(incrimentCount()); // 2
// 初期化します
count = 0;
console.log(incrimentCount()); // 0

// クロージャー関数
function closure() {
    // この count はこの関数が実行された場合に実行されます
    let count = 0;
    // 無名関数を 戻り値 として返します
    return function() {
        // 無名関数内で count をインクリメントします
        return count++;
    }
}

// 新しく closure を実行し、戻り値である 無名関数を closureDemo に代入します
let closureDemo = closure();
console.log(closureDemo()); // 0
console.log(closureDemo()); // 1
console.log(closureDemo()); // 2
// 新しく closure を実行したので count が初期化されています
closureDemo = closure();
console.log(closureDemo()); // 0

// 課題１の答え
let person = {
    name: {
        first: 'のび太',
        last: '野比'
    },
    gender: 'male',
    country: 'JP'
}
console.log(person.name.last + ' ' + person.name.first);

// [おまけ]関数を追加した場合
person.getFullname = function() {
    return this.name.last + ' ' + this.name.first;
}
console.log(person.getFullname());

// 課題２の答え
person.hobby = '寝ること';
console.log(person.hobby);

// 課題３の答え
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

// 課題４の答え
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
