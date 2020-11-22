'use strict';

/**
 * 【イベント処理】課題１で使用します。
 * idがcountである要素の内容をインクリメントします。
 * 
 * @param {event} e 
 */
function _onClickCountBtn(e) {
    let countElement = document.getElementById('count');
    let count = countElement.innerText * 1;

    console.log(`countの値は${count + 1}です`);
    countElement.innerText = ++count;
}

/**
 * 【イベント処理】課題２で使用します。
 * idがhideである要素を非表示にします。
 * 
 * @param {event} e 
 */
function _onClickHideBtn(e) {
    // hidden属性をtrueに設定します。
    document.getElementById('hide').hidden = true;

    // 別解です。
    // document.getElementById('hide').style.display = 'none';
}

/**
 * 【DOMの操作】課題１
 */
function viewCurrentURL() {
    console.log(location.href);
}

/**
 * 【DOMの操作】課題２
 */
function updateTitle() {
    document.title = 'JavaScriptのDOM操作';
}

/**
 * 【DOMの操作】課題３
 */
function addImageContainer() {
    const imgElement = document.createElement('img');
    imgElement.src = 'https://picsum.photos/200';
    imgElement.alt = 'Image';
    const divElement = document.createElement('div');
    divElement.appendChild(imgElement);
    document.body.appendChild(divElement);
}

/**
 * 【DOMの操作】課題４で使用します。
 */
function addOptions() {
    // 以下の配列をJavaScriptでループさせて、option を作成し、select に追加します                
    // option の値配列
    const feelingList = [
        {
            value: 'very good',
            text: 'Very Good'
        },
        {
            value: 'good',
            text: 'Good'
        },
        {
            value: 'not good',
            text: 'Not Good'
        },
        {
            value: 'bad',
            text: 'Bad'
        }
    ];
    const selectElement = document.getElementById('feeling');
    for (let i = 0; i < feelingList.length; i++) {
        const opt = document.createElement('option');
        opt.value = feelingList[i].value;
        opt.innerText = feelingList[i].text;
        selectElement.appendChild(opt);
    }
}

window.addEventListener('load', viewCurrentURL);
window.addEventListener('load', updateTitle);
window.addEventListener('load', addImageContainer);
window.addEventListener('load', addOptions);