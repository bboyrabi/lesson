## オブジェクト指向

オブジェクト指向は、現在のプログラミングの正解で最もメジャーな設計思想です。

ある関連するデータを一つのオブジェクトという塊として捉え、
このオブジェクト自身に関数を定義したりすることで、データの処理をオブジェクト自身で行えるようにします。 => `カプセル化`、


以下は`jsonデータ`を`personData`に代入しています。
`jsonデータ`はJavaScriptのオブジェクト型データです。
```
// Person オブジェクトのテストデータ.
const personData = {
    firstName: 'Yukichi',
    lastName: 'Fukuzawa',
    countryCode: 'JP',
    languageCode: 'ja',
    gender: 1
};
```

上記のままでは、オブジェクトのデータのみで関数などを持ちません。

オブジェクト自身に関数を定義させたりするには`class`を定義します。
```
class TestClass {
  constructor() {
    // インスタンス化時に1度だけ実行される処理を記述する.
    // プロパティの初期化など.
    // 例
    this.firstName = '';
  }

  // firstName の getter メソッド
  get firstName() {
    return this.firstName;
  }

  // firstName の setter メソッド
  set firstName(firstName) {
    this.firstName = firstName;
  }

  // このclassをインスタンス化したときに使用できるメソッド
  yourName() {
    return 'あなたの名前は' + this.firstName + 'です。';
  }

  // インスタンス化しなくても使用できるメソッド
  static testName() {
    return 'test name';
  }
}
```

実際に`Personクラス`を定義してみます.
```
// Person クラスを定義する.
class Person {

    // Person インスタンス化時に1度だけ実行されるコンストラクタ.
    // また、コンストラクタは class で一つしか作成できない.
    // 作成は、new Person() や new Person(data) で行い、引数はあってもなくても良い.
    constructor(personData) {
        if(personData) {
            // personData が設定されている場合
            this.firstName = personData.firstName;
            this.lastName = personData.lastName;
            this.countryCode = personData.countryCode;
            this.languageCode = personData.languageCode;
            this.gender = 0;       
        } else {
            // personData が未設定の場合
            this.firstName = '';
            this.lastName = '';
            this.countryCode = '';
            this.languageCode = '';
            this.gender = 0;
        }
    }

    // get プロパティ名(){} で getter を作成します。
    // getter を作成したプロパティは setter を作成しなければプロパティに設定できません。
    /**
     * fullName の getter メソッド.
     *
     * @return string
     */
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    // これは class 内の メソッド です。
    /**
     * firstName と lastName が設定されていればtrueを返却する.
     *
     * @return boolean
     */
    isKnownUserName() {
        return !!(this.firstName && this.lastName);
    }

    // static のをつけたメソッドは 静的メソッド と呼ばれ、
    // 静的メソッドは、クラスのインスタンス化なしで呼ばれ、インスタンス化されていると呼べません。
    /**
     * 人間の挨拶を返却する.
     *
     * @param languageCode - 言語コード
     * @return string
     */
    static greeting(languageCode = 'ja') {
        switch(languageCode) {
            case 'ja':
                return 'こんにちは';
            case 'en':
                return 'Hello';
            case 'ko':
                return '안녕하세요';
            default:
                return '未設定の言語です';
        }
    }

    // static がついてないなメソッドはインスタンス化しなければ呼べません.
    /**
     * インスタンス化された人物の言語に応じた挨拶を返却する.
     *
     * @return string
     */
    greeting() {
        switch(this.languageCode) {
            case 'ja':
                return 'こんにちは';
            case 'en':
                return 'Hello';
            case 'ko':
                return '안녕하세요';
            default:
                return '未設定の言語です';
        }
    }
}
```

クラスをインスタンス化してメソッドを実行してみます.
```
// Person クラスをインスタンス化して person1 に代入する. インスタンス化する際は new を先頭に付けます.
const person1 = new Person(personData);
console.log(person1.fullName); // フルネームを表示します
console.log(person1.greeting()); // greeting メソッドを実行します
```

クラスの`staticメソッド`を実行してみます.
```
// static メソッドの使い方. インスタンス化しないため new は必要ありません.
console.log(Person.greeting('ko')); // static メソッドを実行します
```

今回のコードは[https://paiza.io/projects/aZ7bYswUezaIYu6KfQV10A](https://paiza.io/projects/aZ7bYswUezaIYu6KfQV10A)で確認できます。
