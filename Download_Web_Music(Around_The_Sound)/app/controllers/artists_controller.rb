class ArtistsController < ApplicationController
	def index
	end
	def show
		@artist_id = params[:id]
		artist_spotify = RSpotify::Artist.find(@artist_id)
		@artist = artist_spotify
		binding.pry
	end
end
