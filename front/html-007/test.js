// =============================================================================
// 最後に課題があります
// =============================================================================


// Person オブジェクトのテストデータ.
const personData = {
    firstName: 'Yukichi',
    lastName: 'Fukuzawa',
    countryCode: 'JP',
    languageCode: 'ja',
    gender: 1
};

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
            this.gender = personData.gender;
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

// Person クラスをインスタンス化して person1 に代入する. インスタンス化する際は new を先頭に付けます.
const person1 = new Person(personData);
console.log(person1.fullName); // フルネームを表示します
console.log(person1.greeting()); // greeting メソッドを実行します

// static メソッドの使い方. インスタンス化しないため new は必要ありません.
console.log(Person.greeting('ko')); // static メソッドを実行します


// -----------------------------------------------------------------------------
// 以下から課題になります
// -----------------------------------------------------------------------------
// 課題１
// -----------------------------------------------------------------------------
// p1を使用してクラスをインスタンス化し、greetingを実行せよ
const p1 = {
    firstName: 'Atsuko',
    lastName: 'Asano',
    countryCode: 'JP',
    languageCode: 'ja',
    gender: 2
};
// -----------------------------------------------------------------------------
// 課題２
// -----------------------------------------------------------------------------
// 下記 unknownPerson の isKnownUserName メソッドを実行せよ
const unknownPerson = new Person();

// -----------------------------------------------------------------------------
// 課題３
// -----------------------------------------------------------------------------
// languageCode が'ja'の場合は、lastName + firstName、それ以外の場合は firstName + lastName を返却するメソッド fullNameByLang() を作成して実行せよ

// -----------------------------------------------------------------------------
// 課題４
// -----------------------------------------------------------------------------
// gender が 0 なら 'unknown'、1 なら 'male'、2 なら 'female' を返却する genderName の getter [ get genderName() ] を作成し、
// p1データを使用して実行せよ。また、実行結果はコンソールに表示すること

// -----------------------------------------------------------------------------
// 課題５
// -----------------------------------------------------------------------------
// 'JP' なら'Japan'、'US'なら'United State' 、それ以外であれば'Other'を返却する、
// 静的メソッド countryName [static countyName(country)] を作成し、実行せよ
