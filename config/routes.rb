Rails.application.routes.draw do
  # get 'posts', to: 'posts#index' をメモ一覧をトップページにするため以下に編集
  root to: 'posts#index'

  # get 'posts/new', to: 'posts#new' 新規投稿ページへの遷移はないので削除

  post 'posts', to: 'posts#create'
end
