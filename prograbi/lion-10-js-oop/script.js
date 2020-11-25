'use strict';

// 【JS】オブジェクト指向プログラミング 課題１
class Animal {
    name = '';
    weight = 0;
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    /**
     * 【JS】オブジェクト指向プログラミング 課題２
     * weightを0.5追加し、増加後の数値をコンソールに出力します。
     */
    eat() {
        this.weight += 0.5;
        console.log(`現在のweightは${this.weight}です。`)
    }
}

// 【JS】オブジェクト指向プログラミング 課題３
const animal1 = new Animal('ココ', 500);

// 【JS】オブジェクト指向プログラミング 課題４
animal1.eat(); // 現在のweightは500.5です。

// 【JS】オブジェクト指向プログラミング 課題５
class Dog extends Animal {

    constructor(name, weight) {
        super(name, weight);
    }

    /**
     * weightを1追加し、増加後の数値をコンソールに出力します。
     */
    eat() {
        this.weight += 1;
        console.log(`現在のweightは${this.weight}です。`)
    }
}

// 【JS】オブジェクト指向プログラミング 課題６
const dog1 = new Dog('ポチ', 2000);

// 【JS】オブジェクト指向プログラミング 課題７
dog1.eat(); // 現在のweightは2001です。