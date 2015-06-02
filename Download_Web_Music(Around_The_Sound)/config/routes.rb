Rails.application.routes.draw do
  get '/' => 'artists#index', as: 'root'
  resources :artists do
    resources :albums do
    resources :songs
  end
  end
end
