class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")   # メモを降順にする
  end

  # def new   newアクション（新規投稿ページ）が不要なのでコメントアウト中
  # end

  def create
    post = Post.create(content: params[:content])
        # 新しく投稿されたcontentをパラメーターの値として保存し、変数postに格納
    render json:{ post: post }
        # 変数postの値を、キーpost:を一緒に、JSON形式で、JavaScriptに送信する
  end
end
