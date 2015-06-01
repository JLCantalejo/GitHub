Rails.application.routes.draw do
  get '/' => 'artists#index', as: 'root'
  resources :artists do
    resources :albums
    resources :songs
  end
end
