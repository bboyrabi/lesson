'use strict';
// ----------------------------------------------------------------------------------------------------
// 【JS】Web API 課題３
// ----------------------------------------------------------------------------------------------------
// GET LIST USERS
requestByAjax('https://reqres.in/api/users?page=2', callbackOfAjax);
// GET SINGLE USER
requestByAjax('https://reqres.in/api/users/2', callbackOfAjax);
// GET SINGLE USER NOT FOUND
requestByAjax('https://reqres.in/api/users/23', callbackOfAjax);
// GET <RESOURCE>
requestByAjax('https://reqres.in/api/unknown', callbackOfAjax);
// GET SINGLE <RESOURCE>
requestByAjax('https://reqres.in/api/unknown/2', callbackOfAjax);
// GET SINGLE <RESOURCE> NOT FOUND
requestByAjax('https://reqres.in/api/unknown/23', callbackOfAjax);

/**
 * Ajaxのコールバック関数です。
 * {@link requestByAjax}関数に引数として関数を渡す場合、
 * xhrにはthisでアクセスすることができます。
 */
function callbackOfAjax() {
    // リクエストの状態で 4 以外は未完了のため、終了します。
    // https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest/readyState
    if (this.readyState !== 4) return;

    if (this.status === 200) {
        // リクエストのレスポンスコードが 200(OK) 
        const jsObject = JSON.parse(this.responseText); // レスポンス結果(JSON)を JSオブジェクトに変換します。
        console.log('Ajaxで取得しました。', jsObject);     // jsObjectを コンソールに出力します。
    }
    else {
        // リクエストのレスポンスコードが 200以外(OKではない) 
        console.log('HTTP error', this.status, this.statusText);
    }
}

/**
 * Ajaxでリクエストします。
 * 
 * @param {*} url リクエスト先のURLです。
 * @param {*} callback コールバック関数です。
 */
function requestByAjax(url, callback) {
    if (!url) return;
    callback = callback || function () { }

    // 新しい XMLHttpRequest インスタンスを作成します。
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url); // リクエスト方法, リクエスト先のURL

    // リクエストの状態が変更したときに実行されるコールバック関数を設定します。
    xhr.onreadystatechange = callback

    // リクエストを開始します(open していないと実行できません)
    xhr.send();
}

// ----------------------------------------------------------------------------------------------------
// 【JS】Web API 課題４
// ----------------------------------------------------------------------------------------------------
// GET LIST USERS
requestByFetch('https://reqres.in/api/users?page=2')
// GET SINGLE USER
requestByFetch('https://reqres.in/api/users/2')
// GET SINGLE USER NOT FOUND
requestByFetch('https://reqres.in/api/users/23')
// GET <RESOURCE>
requestByFetch('https://reqres.in/api/unknown')
// GET SINGLE <RESOURCE>
requestByFetch('https://reqres.in/api/unknown/2')
// GET SINGLE <RESOURCE> NOT FOUND
requestByFetch('https://reqres.in/api/unknown/23')

/**
 * Fetchでリクエストします。
 * @param {*} url リクエスト先のURLです。
 */
function requestByFetch(url) {
    if (!url) return;
    fetch(url)  // リクエスト先のURL, リクエスト方法などのオプション
        .then(res => {
            if (!res.ok)
                // レスポンスが正常ではないのでエラーを発生させています。このエラーは下の.catchで処理されます。
                throw new Error(`${url}: ${res.status}`);
            // レスポンス結果(JSON)を JSオブジェクト に変更します。
            return res.json();
        })
        .then(jsObj => console.log(`Fetchで取得しました。`, jsObj))    // jsObjectを コンソールに出力します。
        .catch(err => console.error('error:', err));                // エラーの場合は コンソールに出力します。
}