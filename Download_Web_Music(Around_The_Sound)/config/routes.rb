Rails.application.routes.draw do
  get '/' => 'artists#index', as: 'root'
  get '/artists/albums' => 'albums#view_albums'
  resources :artists do
    resources :albums do
    resources :songs
  end
  end
end
