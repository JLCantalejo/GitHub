class AlbumsController < ApplicationController
	def index
		artist_id = params[:artist_id]
		artist_spotify = RSpotify::Artist.find(artist_id)
		@albums = artist_spotify.albums
	end

	def show
	end
end
 