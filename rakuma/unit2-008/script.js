'use strict';

// 空の配列を変数に代入します
const array = [];
// 空の配列をコンソールに出力します
console.log(array);

// カレーの材料を格納した配列を変数に代入します
const curry = ['お肉', 'にんじん', 'たまねぎ', 'じゃがいも', 'ルー', '水', '油'];
// 配列をコンソールに出力します
console.log(curry);

// 配列の中身のデータ数をコンソールに出力します
console.log(curry.length); // 7

// 配列の先頭をコンソールに出力します
console.log(curry[0]); // お肉

// 配列の末尾のデータをコンソールに出力します
console.log(curry[curry.length - 1]); // 油

// 'たまねぎ' を '玉ねぎ' に変更します
curry[2] = '玉ねぎ';

// 配列の最後に新しいデータを追加します
curry.push('お米');
// 配列の最後のデータを削除します
curry.pop();

// 配列の先頭に新しいデータを追加します
curry.unshift('お米');
// 配列の先頭のデータを削除します
curry.shift();

for ( let i = 0; i < 100; i++ ) {
    console.log(i);
}

let text = 'カレーに必要な材料は、';
for ( let i = 0; i < curry.length; i++ ) {
    text += curry[i];
    if( i !== curry.length - 1 ) {
        text += '、';
    }
}
text += 'です';
console.log(text);

// 例: 次の配列内にある 数値 0 のインデックス番号を調べたい場合
const numberList = [23, 56, 2, 5, 0, 45, 6];
// index を宣言し -1 で初期化します
let index = -1;
for(let i = 0; i < numberList.length; i++) {
    if(numberList[i] === 0) {
        // 0 が見つかったので index に i を代入し、 break でループ処理を抜けます
        index = i;
        break;
    }
}
console.log('数値0のindex番号は ' + index + ' です' );

for(let i = 0; i < numberList.length; i++) {
    // 数値を 2で割った余り が 0 であれば、変数に true、そうでなければ false を代入します
    const isEvenNumber = numberList[i] % 2 === 0;
    // 偶数でなければ continue でこの後の処理をスキップして次のループに移行します
    if(!isEvenNumber) {
        continue;
    }
    console.log(numberList[i] + ' は偶数です');
}

// 課題１の答え
const names = ['ドラえもん', 'のびた', 'しずか', 'スネ夫', 'ジャイアン'];
console.log(names[3]);

// 課題２の答え
const _temp = names[2]; // データを退避させる
names[2] = names[3];    // ２に３のデータを格納する
names[3] = _temp;       // 退避させたデータを３に格納する
console.log(names[3]);

// 課題３の答え
const gennders = ['男', '女', '女', '女', '男', '女', '男', '男', '女', '男', '女'];
let numberOfMale = 0;
for(let i = 0; i < gennders.length; i++ ) {
    if(gennders[i] === '男') {
        numberOfMale++;
    }
}
console.log(numberOfMale);

// 課題４の答え
const wallys = ['ウーフ', 'ウェンダ', 'しろひげ', 'ウォーリー', 'オドロー', 'ウォーリー親衛隊'];
const wally = 'ウォーリー';
for(let i = 0; i < wallys.length; i++ ) {
    if(wally === wallys[i]) {
        console.log('見つけた！ウォーリーのインデックス番号は' + i + '番です！');
        break; // ループ終了
    }
}
