Rails.application.routes.draw do
  get '/' => 'songs#index', as: 'root'
  resources :songs
end
