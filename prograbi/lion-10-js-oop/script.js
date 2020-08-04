'use strict';

class User {

    firstName = '';
    lastName = '';

    #id = 1;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullname() {
        console.log(this.firstName + ' ' + this.lastName);
    }

    static sayHello() {
        console.log('こんにちは');
    }

    get id() {
        return this.#id;
    }
}

class newUser extends User {
    age = 1;
    gender = 'male';
    constructor(age, gender) {
        super('Taro', 'Rakuma');
        this.age = age;
        this.gender = gender;
    }

    fullname() {
        // super.fullname();
    }
}

const user = new User('Taro', 'Rakuma');
// user.fullname();
// User.fullname(); // static はクラスからは呼び出せない

// User.sayHello();
// user.sayHello(); // static はインスタンスからは呼び出せない

// user.firstName = 'Hanako';
// console.log(user.firstName);

// user.#id = 4;
// console.log(user.id);


const reqResData = '{"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"}],"ad":{"company":"StatusCode Weekly","url":"http://statuscode.org/","text":"A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."}}';
const jsObject = JSON.parse(reqResData);

console.log(jsObject);

// ReqResのUserデータを class ReqResUser を使って 出力してみよう

class ReqResUser {
    constructor(userObj) {
        this.firstName = userObj['first_name'];
        this.lastName = userObj['last_name'];
        this.avatar = userObj.avatar;
        this.id = userObj.id;
        this.email = userObj.email;
    }

    fullname() {
        return this.firstName + ' ' + this.lastName;
    }

    htmlTags() {
        return `
            <div class="user">
                <img src="${this.avatar}" alt="${this.fullname()}の画像">
                <span>${this.fullname()}</span>
            </div>
        `;
    }
}

let htmlTags = '';
for (let i = 0; i < jsObject.data.length; i++) {
    const user = new ReqResUser(jsObject.data[i]);
    user.fullname();
    htmlTags += user.htmlTags();

}
const userListEle = document.getElementById('usersList');
userListEle.innerHTML = htmlTags;