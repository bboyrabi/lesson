console.log(window);

console.log( '画面の横幅は ' + window.innerWidth + 'px です' );
console.log( '画面の縦幅は ' + window.innerHeight + 'px です' );

console.log(window.location.href);
console.log(window.location.port);
console.log(window.location.protocol);
console.log(window.location.pathname);
// 検索パラメータを表示します
console.log(window.location.search);

console.log(document);
console.log(document.links);
for(let i = 0; i < document.links.length; i++) {
    console.log(document.links[i].href);
}

console.log(document.head);

console.log(document.title);
document.title = '変更しました';
console.log(document.title);

console.log(document.body);


let element;
// p要素 を 変数element に代入します
element = document.createElement('p');
element.id = 'demo1';
// bodyタグの一番下に p要素 を作成します
document.body.appendChild(element);

// createTextNode を使用した場合
element = document.createElement('p');
let textNode = document.createTextNode('<h1>エスケープする</h1>');
element.appendChild(textNode);
element.className = 'text-blue';
document.body.appendChild(element);

// innerHtml を使用した場合
element = document.createElement('p');
element.innerHTML = '<h1>エスケープする</h1>';
element.className = 'text-blue';
document.body.appendChild(element);

element = document.getElementById('demo1');
console.log(element);
element.innerText = 'テキストを更新';

let elementList = document.getElementsByClassName('text-blue');
console.log(elementList);
for( let i = 0; i < elementList.length; i++ ) {
    if( i == 1) {
        elementList[i].style = 'color: red;';
    }
}

// 課題１の答え
console.log(window.location.href);

// 課題２の答え
document.title = 'JavaScriptのDOM操作';

// 課題３の答え
element = document.createElement('img');
element.src = 'https://scontent-itm1-1.xx.fbcdn.net/v/t1.0-9/93258597_109329357408293_6938997864051769344_o.png?_nc_cat=103&_nc_sid=6e5ad9&_nc_oc=AQluLOVdx9JI5pv1w6s_4hXMBxBXi55ydnLJa9d4x8XrMYUCjPB8nf6mwi_g9pE_GPTngFsxHUpA01VcIc8_opnV&_nc_ht=scontent-itm1-1.xx&oh=0ebe9f9ce7987695b9755df925282aa4&oe=5EDC0908';
element.alt = 'Image';
let divElement = document.createElement('div');
divElement.appendChild(element);
document.body.appendChild(divElement);

// 課題４の答え
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
element = document.getElementById('feeling');
for (let i = 0; i < feelingList.length; i++ ) {
    let ele = document.createElement('option');
    ele.value = feelingList[i].value;
    textNode = document.createTextNode(feelingList[i].text);
    ele.appendChild(textNode);
    element.appendChild(ele);
}
