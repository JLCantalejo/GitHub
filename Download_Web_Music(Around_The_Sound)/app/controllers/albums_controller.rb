class AlbumsController < ApplicationController
	def index
		@artist = Artist.find params[:artist_id]
		@albums = @artist.albums
	end
	def show
		@artist = Artist.find params[:artist_id]
		@album = @artist.albums.find params[:id]
	end
	def view_albums
		@albums = Album.all
	end
end
 