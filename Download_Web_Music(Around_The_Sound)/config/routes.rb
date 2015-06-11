Rails.application.routes.draw do
  	get '/' => 'artists#index', as: 'root'
  	get '/artists/albums' => 'albums#view_albums'
  	resources :artists do
    	resources :albums 
  	end
	resources :boxes
end
