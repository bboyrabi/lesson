'use strict';

/**
 * ボタンのクリックイベント処理
 * @param {*} event 
 */
function _onClickFetchReq(event) {
    console.log(event);
    // fetchリクエスト関数を呼び出す
    fecthUserReq();
}

function viewUsers(jsObject) {
    console.log(jsObject.data);

    for(let i = 0; i < jsObject.data.length; i++) {
        // userデータを変数に代入する
        const user = jsObject.data[i];

        // userのフルネームを変数に代入する
        const fullname = user.first_name + ' ' + user.last_name;

        // ■ 作りたいDOM
        // <div class="user">
        //    <img src="https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg" alt="user画像">
        //    <span>name</span>
        // </div>

        // <div class="user">を作る
        const userElement = document.createElement('div');
        userElement.className = 'user';
        // <img src="..." alt="...">を作る
        const imgElement = document.createElement('img');
        imgElement.src = user.avatar;
        imgElement.alt = fullname + 'のアバター';
        // <span>name</span>を作る
        const userNameElement = document.createElement('span');
        userNameElement.innerText = fullname;

        // <div class="user"> に <img src="..." alt="..."> を挿れる
        userElement.appendChild(imgElement);
        // <div class="user"> に <span>name</span>を を挿れる
        userElement.appendChild(userNameElement);
        
        // index.html の <div id="userList"></div> に作ったDOMを挿れる
        document.getElementById('userList').appendChild(userElement);
    }
}

/**
 * Fetchリクエストを実行する.
 * レスポンスJSオブジェクトを 関数viewUsers に渡す.
 */
function fecthUserReq() {
    fetch('https://reqres.in/api/users?page=2', { method: 'GET' })   // リクエスト先のURL, リクエスト方法などのオプション
        .then(response => response.json())        // レスポンス結果(JSON)を JSオブジェクト に変更します
        .then(jsObject => viewUsers(jsObject))          // jsObjectを コンソールに出力します
        .catch(error => console.error('error:', error));  // エラーの場合は コンソールに出力します
}