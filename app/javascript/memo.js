const buildHTML = (XHR) => {    // XHRを引数とした、定数buildHTMLを定義
  const item = XHR.response.post;
      // レスポンスの中からpostという投稿されたメモの情報を抽出して、定数itemに格納
      // createアクションにrender文（postキーと投稿されたメモ内容が紐づけ）があるから。
  const html = `      
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;    // 定数itemの情報をもとにHTMLを記述して、それを定数htmlに格納
  return html;    // 定数htmlの返り値はココ。新たに生成したHTML（定数htmlに記述している情報）を持ったhtml。
  };

function post () {    // postという関数宣言

  // 送信ボタンを押すと、フォーム内容を取得して、ブラウザに表示する
  const submit = document.getElementById("submit");
      // getElementByIdで取得したidの要素<%= form.submit %>を、定数submitに格納
  submit.addEventListener("click", (e) => {
      // 定数submitがaddEventListenerで指定したイベント、クリックされると以下のイベントが起こる
    e.preventDefault();
        // 「投稿ボタンをクリックした」という情報を持ったeを無効化し、
        // クリックした直後にブラウザからリクエストが送信されるの防ぐ
    const form = document.getElementById("form");
        // getElementByIdで取得したidの要素<%= form_with %>を、定数formに格納
    const formData = new FormData(form);
        // 定数formから、フォームに入力された値を取得し、定数formDataに格納
    const XHR = new XMLHttpRequest();
        // 新しくオブジェクト（{キー: バリュー}）を生成し、定数XHRに格納
    XHR.open("POST", "/posts", true);
        // リクエストの内容を非同期trueで、リクエスト先/postに、保存POSTする
    XHR.responseType = "json";
        // レスポンスのフォーマットをJSON形式にする
    XHR.send(formData);
        // 定数formDataに格納された内容をサーバー側に送信する
    XHR.onload = () => {
        // リクエストの送信が成功したときに呼び出されるプロパティ、以下がその内容
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`)
        return null;
      }
          // HTTPステータスが200じゃなかったらエラーメッセージがアラートで表示され、この行以降の処理を行わない
      const list = document.getElementById("list");
          // 取得したidの要素<div id="list">を、定数listに格納
      const formText = document.getElementById("content");
          // id="content"の要素<%= form.text_field %>を定数formTextに格納し、（1）
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
          // 引数がXHRの定数buildHTMLを、定数listの直後に挿入する
      formText.value = "";
          // （1）定数formTextのvalue属性に空の文字列を入れて、フォームの中身をリセットしている
    };
  });
};

window.addEventListener('load', post);
    // ページが読み込まれたら、post関数の処理を実行する