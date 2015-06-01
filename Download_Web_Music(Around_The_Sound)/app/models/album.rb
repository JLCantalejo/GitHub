class Album < ActiveRecord::Base
	has_many :songs
	belong_to :artists
end
