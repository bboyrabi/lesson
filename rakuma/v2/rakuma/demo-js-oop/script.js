'use strict';

// 以前の書き方
var User = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullname = function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

// var me = new User('Nobuyuki', 'Nakano');
// me.fullname();
// console.log(me.firstName);

// const user = {
//     firstName: 'Taro',
//     lastName: 'Rakuma',
//     fullname: function () {
//         console.log(this.firstName + ' ' + this.lastName);
//     }
// }

// user.fullname();
[
    {
        firstName: 'Taro',
        lastName: 'Rakuma'
    },
    {
        firstName: 'Hanako',
        lastName: 'Rakuma'
    }
]

const userObj1 = {
    firstName: 'Taro',
    lastName: 'Rakuma'
}
const userObj2 = {
    firstName: 'Hanako',
    lastName: 'Rakuma'
}

// 名前をコンソールに表示する
console.log(userObj1.firstName + ' ' + userObj1.lastName);
console.log(userObj2.firstName + ' ' + userObj2.lastName);

// または
function fullname() {
    console.log(this.firstName + ' ' + this.lastName);
}
userObj1.fullname = fullname;
userObj2.fullname = fullname;

userObj1.fullname();
userObj2.fullname();

// でも複数のデータを出力する場合は？

// カプセル化
// ポリモーフィズム
// 継承

// class User {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     fullname() {
//         console.log(this.firstName + ' ' + this.lastName);
//     }
// }
// class User {
//     firstName;  // プロパティ
//     lastName;   // プロパティ
//     constructor(firstName, lastName) {
//         // this. を先頭につけて参照
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// インスタンス化
// const user = new User('Taro', 'Rakuma');
// // インスタンス名.プロパティ名 で参照
// console.log(user.firstName); // Taro

// Classが使用できるようになってから
// ①クラス定義
class User {
    // ②プロパティ（public, private）
    firstName;  // public
    lastName;   // public
    #age;       // private
    // ③コンストラクタ
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // ④メソッド
    fullname() {
        console.log(this.firstName + ' ' + this.lastName);
    }

    printAge() {
        console.log(this.#age ? this.#age : '設定されていません');
    }

    // ⑤静的メソッド
    static sayHello() {
        console.log('こんにちは');
    }
}

// ⑥継承 extends
class ReqResUser extends User {
    #id = 1;  // private
    email;
    avatar;
    
    constructor(userData) {
        super(userData['first_name'], userData['last_name']);
        this.#id = userData.id;
        this.email = userData.email;
        this.avatar = userData.avatar;
    }

    get id() {
        return this.#id;
    }

    fullname() {
        return this.firstName + ' ' + this.lastName
    }
}

let me = new User('Nobuyuki', 'Nakano');
console.log(me.firstName);
me.fullname();
console.log(me.firstName);
// console.log(me.#age); // Error
me.printAge();
// me.sayHello(); // Error
User.sayHello();


const userDaya = {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
};

let user = new ReqResUser(userDaya);
console.log(user.fullname());
console.log(user.id);