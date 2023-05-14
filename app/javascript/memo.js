function post () {    // postという関数宣言

  // 送信ボタンを押すと、フォーム内容を取得して、ブラウザに表示する
  const submit = document.getElementById("submit");
      // getElementByIdで取得したidの要素<%= form.submit %>を、定数submitに格納
  submit.addEventListener("click", (e) => {
      // 定数submitがaddEventListenerで指定したイベント、クリックされると以下のイベントが起こる
    e.preventDefault();
        // 「投稿ボタンをクリックした」という情報を持ったeを無効化し、クリックした直後にブラウザからリクエストが送信されるの防ぐ
    const form = document.getElementById("form");
        // getElementByIdで取得したidの要素<%= form_with %>を、定数formに格納
    const formData = new FormData(form);
        // 定数formから、フォームに入力された値を取得し、定数formDataに格納
    const XHR = new XMLHttpRequest();
        // 新しくオブジェクト（{キー: バリュー}）を生成し、定数XHRに格納
    XHR.open("POST", "/posts", true);
        // リクエストの内容を非同期trueで、リクエスト先/postに、保存POSTする
    XHR.responseType = "json";
        // レスポンスのフォーマットをJSON型にする
    XHR.send(formData);
        // 定数formDataに格納された内容をサーバー側に送信する
  });
};

window.addEventListener('load', post);
    // ページが読み込まれたら、post関数の処理を実行する