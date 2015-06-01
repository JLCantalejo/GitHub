Artist.create( artist_name: "Vetusta Morla" )
Artist.create( artist_name: "Supersubmarina" )
Artist.create( artist_name: "Izal" )
Artist.create( artist_name: "Sidonie" )
Artist.create( artist_name: "Lori Meyers" )
Album.create( album_name: "Un día en el mundo", artist_id: 1 )
Album.create( album_name: "Mapas", artist_id: 1 )
Album.create( album_name: "Electroviral", artist_id: 2 )
Album.create( album_name: "Magia y efectos especiales", artist_id: 3 )
Album.create( album_name: "Agujeros de gusano", artist_id: 3 )
Album.create( album_name: "El incendio", artist_id: 4 )
Album.create( album_name: "Sierra y Canadá", artist_id: 4 )
Album.create( album_name: "Impronta", artist_id: 5 )
Song.create( name_track: "Valiente", duration_track: "3:29", album_id: 1 )
Song.create( name_track: "Cenas ajenas", duration_track: "4:03", album_id: 2 )
Song.create( name_track: "Niebla", duration_track: "3:15", album_id: 3 )
Song.create( name_track: "Eléctrico", duration_track: "4:09", album_id: 3 )
Song.create( name_track: "Qué bien", duration_track: "4:34", album_id: 4 )
Song.create( name_track: "28 Horas", duration_track: "4:01", album_id: 4 )
Song.create( name_track: "Despedida", duration_track: "2:48", album_id: 5 )
Song.create( name_track: "Hambre", duration_track: "3:25", album_id: 5 )
Song.create( name_track: "La sombra", duration_track: "3:19", album_id: 6 )
Song.create( name_track: "Yo soy la crema", duration_track: "3:19", album_id: 7 )
Song.create( name_track: "Zen", duration_track: "3:26", album_id: 8 )
Song.create( name_track: "Planilandia", duration_track: "3:41", album_id: 8 )


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
