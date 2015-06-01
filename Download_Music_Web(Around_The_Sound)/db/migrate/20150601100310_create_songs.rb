class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
    	t.string :artists
    	t.string :tracks
    	t.string :albums
      t.timestamps null: false
    end
  end
end
