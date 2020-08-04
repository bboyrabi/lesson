'use strict';

// -----------------------------------------------------------------------------------------------------
// Ajaxリクエスト
// -----------------------------------------------------------------------------------------------------
function _onClickAjaxReqButton(e) {
    _readUsersByAjaxAnd(1, createUsersList); // 1ページ目のデータを読み込みます
}

function _readUsersByAjaxAnd(pageNum, callback) {
    pageNum = pageNum || 1; // pageNumが空であれば 1 を初期値にします
    // 新しい XMLHttpRequest インスタンスを作成します
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=' + pageNum); // リクエスト方法, リクエスト先のURL

    // リクエストの状態が変更したときに実行されるコールバック関数を設定します
    xhr.onreadystatechange = function () {

        // リクエストの状態で 4 以外は未完了のため、終了します
        // https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest/readyState
        if (xhr.readyState !== 4) return;

        if (xhr.status === 200) {
            // リクエストのレスポンスコードが 200(OK) 
            const jsObject = JSON.parse(xhr.responseText);  // レスポンス結果のJSONを JSオブジェクトに変換します
            console.log(jsObject);                          // jsObjectを コンソールに出力します
            callback(jsObject);
        }
        else {
            // リクエストのレスポンスコードが 200以外(OKではない) 
            console.log('HTTP error', xhr.status, xhr.statusText);
        }
    };

    // リクエストを開始します
    xhr.send();
}

// -----------------------------------------------------------------------------------------------------
// Fetxhリクエスト
// -----------------------------------------------------------------------------------------------------
function _onClickFetchReqButton(e) {
    _readUsersByFetchAnd(1, createUsersList);
}

function _readUsersByFetchAnd(pageNum, callback) {
    pageNum = pageNum || 1; // pageNumが空であれば 1 を初期値にします
    fetch('https://reqres.in/api/users?page=' + pageNum, { method: 'GET' })   // リクエスト先のURL, リクエスト方法などのオプション
        .then(response => response.json())        // レスポンス結果(JSON)を JSオブジェクト に変更します
        .then(jsObject => callback(jsObject))          // jsObjectを コンソールに出力します
        .catch(error => console.error('error:', error));  // エラーの場合は コンソールに出力します
}


// -----------------------------------------------------------------------------------------------------
// Common
// -----------------------------------------------------------------------------------------------------
function createUsersList(jsObject) {
    const usersList = document.getElementById('usersList');

    for (let i = 0; i < jsObject.data.length; i++) {
        const user = jsObject.data[i];
        console.log(user);
        const usernameElement = document.createElement('h2');
        usernameElement.innerText = user['first_name'] + ' ' + user['last_name'];
        usersList.appendChild(usernameElement);
    }
}