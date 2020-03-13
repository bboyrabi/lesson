# Bootcamp


## DAY 1

### プログラミング学習に必要な心構え

 * アウトプットする => コードを書いて試す
 * 分からなかったらググる => 検索の仕方を覚える
 * 概念を理解する => 最初は細かいことに拘りすぎなくていい

### プログラミングに必要なスキル

 * タイピング => ショートカットキーを使いこなす
 * 問題解決能力 => 原因の調査とその解決
 * 英語耐性 => ストレスなく読めればベスト

### Webの概念

  * HTML

     * Webブラウザで表示される`.html`拡張子のファイル

  * Webサーバ
     * HTMLファイルを配信する
     * リクエストに応じた結果を返す

  * IPアドレスとポート番号
  * ドメイン(URL)とDNS

### 開発環境構築

  * ブラウザ`Google Chrome`をダウンロードして使えるようにする
    => Google Chromeの開発者用コンソールの使い方
  * 統合開発環境`Atom`をダウンロードして使えるようにする

### index.htmlを作成

  * 書き方
  ```
  <!DOCTYPE html>
  <html lang=ja dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>タイトル</title>
      </head>
      <body>
        <h1>こんにちは世界</h1>
      </body>
  </html>
  ```
  * タグで囲む`<html>囲まれている</html>`
  * `<head></head>`タグの中身はWebブラウザに表示されない
  * `<body></body>`タグの中身がWebブラウザに表示される
  * `h1, h2, h3...h6`は見出しタグ
  * `br`タグは改行タグで、閉じなくていい
  * `a`タグはリンクタグで画面を遷移する
  * `img`タグは画像を表示する
  * やってみよう
    * `a`タグを使ってページ遷移する
    * `img`タグを使って画像を表示する
      * 問題: 画像をクリックしたら画面を遷移するにはどうする？
    * `form`タグと`input`タグを使ってテキスト入力を試す
    * 時間があれば他のタグにも触れてみよう

### CSS

  * Webページのスタイルを指定する
  * CSSを使うには
    * 通常`<head></head>`タグ内でCSSを読み込んだり、記述したりする
    * `<style></style>`タグの中で定義されるか、外部から読み込まれる
    * 外部から読み込む場合は`<link rel="stylesheet" href="外部のCSSのアドレス">`
  * 書き方
    ```
      セレクタ {
        プロパティ: 値;
      }
    ```
    * 実際の例(=> aタグの文字色を赤色に指定する)
    ```
      a {
        color: red;
      }
    ```
    * 実際の例(=> `classがcard`の枠線を1pxで黒色に指定する)
    ```
      .card {
        border: solid 1px black;
      }
    ```
    * 実際の例(=> `idがmainContainer`の内幅を上下左右16px、外幅をautoに指定する)
    ```
      #mainContainer {
        padding: 16px;
        margin: auto;
      }
    ```
  * CSSで遊んでみよう
    * GoogleChromeの開発者用コンソールで試して、ファイルに反映する
    * セレクタについて理解しよう => classやid、書き方など

  * やってみよう
      * 文字色を青色にしてみよう
      ```
      <span class="text-blue">あいうえお</span>
      ```
      * それぞれの文字サイズを変更してみよう
      ```
      <div id="small">小さい</div><div id="big">大きい</div>
      ```
      * 黄色で四角の図形に変更してみよう
      ```
      <div id="box"></div>
      ```
      * 青色で丸い図形に変更してみよう
      ```
      <div id="circle"></div>
      ```
      * 日本の国旗をCSSで作ってみよう

  * CSSフレームワーク
    * CSSフレームワークについての参考記事（<https://webdesign-trends.net/entry/2177>）
  * Bootstrapを使ってみる(<https://getbootstrap.com/>)

### JavaScript

  * まずはpaiza(<https://paiza.io/ja/projects/new?language=javascript>)でJSを試してみよう
  * 基礎１(<https://github.com/bboyrabi/lesson/tree/master/front/html-005>)
  * 基礎２(<https://github.com/bboyrabi/lesson/tree/master/front/html-007>)
  * htmlと一緒に使ってみる
  ```
  ...
    <body>
      <h1></h1>
      <script type="text/javascript">
        // ここにJavaScriptを記述する
      <script>
    </body>
  ...
  ```
  * イベントについて (例: ボタンの`click`イベントが発生すると`_onClickButton`関数を実行する)
  ```
  ...
    <body>
      <button onclick="_onClickButton();">ボタン</button>
      <script type="text/javascript">

        function _onClickButton() {
          window.alert('ボタンをクリックしました！');
        }

      </script>
    </body>
  ...
  ```
  * イベントについて (例: body内の要素がすべて読み込まれると`onload`イベントが発生し`_onload`関数を実行する)
  ```
  ...
    <body onload="_onload();">

      <script type="text/javascript">

        function _onload() {
          window.alert('読み込まれました！');
        }

      </script>
    </body>
  ...
  ```
  * DOMを操作する
  ```
  ...
  <body>
      <button onclick="_onClickButton();">ボタン</button>
      <div id="container"></div>
      <script type="text/javascript">

        function _onClickButton() {
          // 1. 要素を取得する
          const element = document.getElementById('container');
          // 2. 要素内にタグを追加する
          element.innerHTML = '<span>こんばんは世界</span>';
          // 3. 要素のスタイルを変更する
          element.style.color = 'red';
        }

      </script>
  </body>
  ...
  ```
  * APIと通信する
    ```
    function fetchSomething() {

      fetch(`https://...`) // urlを設定する.
        .then(res => res.json()) // 受け取ったデータからJSONデータを抽出する
        .then(myJson => console.log({myJson})) // JSONをコンソールに表示する
        .catch(error => console.error('エラー', error)); // エラーがあればコンソールに表示する

    }
    ```
  * GoogleBooksAPIを利用して本を検索する
    ```
    /**
     * 引数のクエリで本のリストを検索する.
     *
     * @param query {string}
     */
    function searchBooksBy(query) {
      if(!query) {
        return [];  // queryがないため検索を行わない.
      }
      // https://developers.google.com/books/docs/v1/getting_started?hl=ja#rest-in-the-books-api
      const by = 'relevance';
      const fields = 'fields=items(id,volumeInfo/*,accessInfo(embeddable,country,viewability))';
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${by}&${fields}&download=epub&maxResults=20`)
        .then(res => res.json())
        .then(data => _itemsChanged(data.items)) // _itemsChanged を作る必要がある
        .catch(() => console.error(`Search books fetch error. query is ${query}`));
    }
    ```
  * 上記の検索結果にある本の`id`を利用して詳細を検索する
  ```
  /**
     * 引数のクエリで本の詳細を検索する.
     *
     * @param id {string}
     */
    function searchBookBy(id) {
      if(!id) {
        return {};  // idがないため検索を行わない.
      }
      // https://developers.google.com/books/docs/v1/reference/volumes?hl=ja
      fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(res => res.json())
        .then(data => _itemChanged(data)) // _itemChanged を作る必要がある
        .catch(() => console.error(`Search book fetch error. id is ${id}`));
    }
  ```

## DAY 2

  本の検索サービスを作ってみよう

### 必要なページと機能
  1. トップページ
    * トップページの例

    ![トップページ画像](https://github.com/bboyrabi/lesson/blob/master/bootcamp/book/images/book_top_page.jpg?raw=true)
    * 検索formがあり、検索ボタンが押されたら`検索結果ページ`に遷移する
  2. 検索結果ページ
    * 検索結果ページの例

    ![検索結果ページ画像](https://github.com/bboyrabi/lesson/blob/master/bootcamp/book/images/book_results_page.jpg?raw=true)
    * URLのパラメータから`検索クエリ`を読み込む
    * 検索クエリで`fetch検索`し、得た結果を`画面に表示する`
    * 表示された検索結果をクリックすると`詳細ページ`に遷移する
  3. 詳細ページ
    * 詳細ページの例

    ![詳細ページ画像](https://github.com/bboyrabi/lesson/blob/master/bootcamp/book/images/book_detail_page.jpg?raw=true)
    * URLのパラメータから`id`を読み込む
    * idで`fetch検索`し、得た結果を`画面に表示する`

  * URLのパラメータを取得する関数
  ```
  /**
     * URLのパラメータから引数で指定されたパラメータ名の値を返却する.
     *
     * @param name {string}
     * @return {string}
     */
  function getParamater(name) {
      if(!name)
        return '';
      const url = new URL(location.href);
      return url.searchParams.get(name);
  }
  ```
