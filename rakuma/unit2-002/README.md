# CSSの基礎


CSSとは、HTMLで書かれているファイルをブラウザで見たときに反映される「色や形などのデザイン」を
指定するものである


1. CSSの指定の仕方
   - htmlタグのstyle属性（プロパティ）で指定する
   - headタグ内にstyleタグを作成し、その中で指定する
     - タグやclassなどのグループで指定する
     - idで指定する
   - 外部のCSSから読み込む


2. CSSの書き方
    - CSSの属性（プロパティ）: 値;

        [例]
        ```
        color: red;
        ```
    - セレクタについて

        [書き方]
        ```
        セレクタ名 {
            color: red;
            font-size: 16px;
        }
        ```
        [例]
        ```
        div {
            color: red;
            font-size: 16px;
        }
        ```

    - セレクタの指定の仕方について

        [書き方]
        ```
        div h1 {...}
        [結果] div内のh1に適用される
        ```

        [書き方]
        ```
        div > h1 {...}
        [結果] div直下のh1に適用される
        ```
        [書き方]
        ```
        div, h1 {...}
        [結果] divとh1に適用される
        ```

    - html属性（プロパティ）のclassとidについて
        - classやidはCSSのセレクタで指定することができる
            - `class`は、`.class-name`のように先頭に` .（ドット）`を付けて指定する

                => classは同じ名前でも複数使うことができる
            - `id`は、 `#firstName` のように先頭に、 `#（シャープ）`を付けて指定する

                => idは画面内で一意となる名前を付ける必要がある

    - 優先順位について
        - 上から下に読み込まれるため、あとに書いたCSSのほうが優先度が高い

            [例]
            ```
            h1 { color: red; }
            h1, div {color: blue; }
            [結果] color: blue; が適用される
            ```
        - セレクタの指定方法が複雑な方が優先される

            [例]
            ```
            h1 { color: red; }
            body h1 {color: blue; }
            [結果]] color: blue; が適用される
            ```
        - classよりidが優先される

            [例]
            ```
            .hello { color: red; }
            #greeting {color: blue; }
            [結果]] color: blue; が適用される

            <div class="hello" id="greeting">hello world<div>
            ```
