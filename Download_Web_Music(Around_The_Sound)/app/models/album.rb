class Album < ActiveRecord::Base
	belongs_to :artists
	has_many :songs
end