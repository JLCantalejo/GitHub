class AlbumsController < ApplicationController
	def index
		artist_id = params[:artist_id]
		artist_spotify = RSpotify::Artist.find(artist_id)
		@albums = artist_spotify.albums
		binding.pry

	end
	def show
	end
	def view_albums
		@albums = Album.all
	end
end
 