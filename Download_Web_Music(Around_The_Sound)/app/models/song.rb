class Song < ActiveRecord::Base
	belong_to :albums
end
