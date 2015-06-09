class ArtistsController < ApplicationController
	def index
		@artists = Artist.all
	end
	def show
		artist_id = params[:id]
		artist_spotify = RSpotify::Artist.find(artist_id)
		@artists = artist_spotify
	end
end
