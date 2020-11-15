'use strict';

// 【JS】配列と繰り返し処理回答例
// https://rabico.dev/js-iteration/

// 課題１
const doraemonMembers = ['のび太', 'ドラえもん', 'しずか', 'ジャイアン', 'スネ夫'];
console.log(doraemonMembers[3]);

// 課題２
const tmp = doraemonMembers[2];
doraemonMembers[2] = doraemonMembers[3];
doraemonMembers[3] = tmp;
console.log(doraemonMembers[3]);

// 課題３
const gennders = ['男', '女', '女', '女', '男', '女', '男', '男', '女', '男', '女'];
let numberOfMen = 0;
for (let i = 0; i < gennders.length; i++) {
    if(gennders[i] === '男')
        numberOfMen++;
}
console.log(`男の数は${numberOfMen}個です。`)

// 課題４
const wallys = ['ウーフ', 'ウェンダ', 'しろひげ', 'ウォーリー', 'オドロー', 'ウォーリー親衛隊'];
const wally = 'ウォーリー';
let foundPosition = -1;
for (let i = 0; i < wallys.length; i++) {
    if(wallys[i] === wally)
        foundPosition = i;
}
console.log(`${wally}は、${foundPosition === -1 ? '見つかりませんでした。': `インデックス番号${foundPosition}番です。`}`)

// 【JS】オブジェクトと関数、変数スコープ回答例
// https://rabico.dev/js-function/

// 課題１
let person = {
    name: {
        first: 'のび太',
        last: '野比',
        fullname: function() {
            return this.last + ' ' + this.first;
        }
    },
    gender: 'male',
    country: 'JP'
}

console.log(person.name.fullname());

// 課題２
person.hobby = '寝ること';
console.log(person.hobby);

// 課題３
// 0 - 23までの整数が返却されるプログラム
let hour = Math.floor(Math.random() * Math.floor(24))
console.log(`hour is ${hour}`);
viewHour(hour);
function viewHour(hour) {
    if(isNaN(hour))
        return; // Number以外は何も処理しません。
    if(hour >= 0 && hour <= 11)
        console.log(`午前${hour}時です`);
    else if(hour === 12)
        console.log('正午です');
    else if(hour >= 13 && hour <= 23)
        console.log(`午後${hour - 12}時です`);
}

// 課題４
function test2(any, suffix = 'はString型です。') {
    if(typeof any === 'string')
        return any + suffix;
    else if(typeof any === 'number')
        return any + 50;
}
// 確認コード
console.log(test2('文字列'));    // 文字列[任意の文字列]
console.log(test2('22'));       // 22[任意の文字列]
console.log(test2(42));         // 92
console.log(test2([]));         // undefined
console.log(test2(true));       // undefined
console.log(test2({}));         // undefined