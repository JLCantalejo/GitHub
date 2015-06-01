Rails.application.routes.draw do
  get '/' => 'artists#index'
  resources :artists
end
