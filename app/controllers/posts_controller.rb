class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")   # メモを降順にする
  end

  # def new   newアクション（新規投稿ページ）が不要なのでコメントアウト中
  # end

  def create
    Post.create(content: params[:content])
    redirect_to action: :index    # contentを保存したら、indexアクションにリダイレクトする
  end
end
