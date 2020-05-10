'use strict';

function _onClickButtonFromHandler(event) {
    console.log('handler', event);
}

function _onClickButtonFromListner_1(event) {
    console.log('listner 1', event);
}

function _onClickButtonFromListner_2(event) {
    console.log('listner 2', event);
}

window.onload = function() {
    console.log('すべての文章が読み込まれ、DOMツリーが構築されました');
    let buttonHandlerElement = document.getElementById('buttonHandler');
    buttonHandlerElement.onclick = _onClickButtonFromHandler;

    let buttonListnerElement = document.getElementById('buttonListner');
    buttonListnerElement.addEventListener('click', _onClickButtonFromListner_1, false);
    buttonListnerElement.addEventListener('click', _onClickButtonFromListner_2, false);

    // 課題２の答え（１）
    let hideButtonElement = document.getElementById('hideButton');
    hideButtonElement.addEventListener('click', _hideButton, false);
}

// 課題１の答え
function _onClickCount() {
    let countElement = document.getElementById('count');
    countElement.innerText = countElement.innerText * 1 + 1;
}

// 課題２の答え（２）
function _hideButton() {
    let hideElement = document.getElementById('hide');
    hideElement.style="display: none;";
}

// 課題３の答えは index.html
