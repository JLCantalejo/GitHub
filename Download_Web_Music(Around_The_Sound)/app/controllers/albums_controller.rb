class AlbumsController < ApplicationController
	def index
		@artist = Artist.find params[:artist_id]
		@albums = @artist.albums
	end
	def show


		artist_id = params[:id]
		artist_spotify = RSpotify::Artist.find(artist_id)
		@albums = artist_spotify.albums
		
		
	end
	def view_albums
		@albums = Album.all
	end
end
 