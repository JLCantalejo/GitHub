$(document).ready(function(){
	$(".buscar").on("click", function(){
		var art =  $("#artist-album-track").val();
		selectOption = $("input[name='search-field']:checked").val();

		$('ul').empty();
		console.log(selectOption);
		console.log(art);
			$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/search?type=" + selectOption + "&q=" + art,
			data: "",
			success: function(response){searchArtistAlbumTrack(response)},
			error: function(){alert("Error")},
			dataType: "json",
		});
	});
	var selectOption;
	var idAlbum;
	var idSong;

	function searchArtistAlbumTrack(element){
		//console.log(element);
		switch(selectOption){
			case "artist":
		total_length = element.artists.items.length;
			for(var i = 0; i < total_length; i++){
				if (element.artists.items[i].images[0] === undefined){
					$("ul").append("no hay imagen disponible");
				}else{
					$("ul").append("<img src='" + element.artists.items[i].images[1].url + "'></img>");

				};
				$('ul').append("<a href='artists/"+element.artists.items[i].id+"'><h2>" + element.artists.items[i].name + "</h2></a>");

			};
			break;
			case "album":
		total_length = element.albums.items.length;
			//console.log(element);
			for(var i = 0; i < total_length; i++){
				idAlbum = element.albums.items[i].id;
			//console.log(idAlbum);
				getAlbumsFromArtist(idAlbum);
			};
			break;
			case "track":
		total_length = element.tracks.items.length;
			for(var i = 0; i < total_length; i++){
				idSong = element.tracks.items[i].id;
			//console.log(idSong);
				getSongsFromArtist(idSong);
			};
			break;
		};
	};

	function getAlbumsFromArtist(idAlbum) {
		$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/albums/" + idAlbum,
			data: "",
			success: function(response){the_album(response)},
			error: function(){console.log("Error")},
			dataType: "json"
		});
	};
	
	function the_album(element2){
		
		total_length = element2.tracks.items.length;
		$('ul').append("<h2>" + element2.artists[0].name + (" - ") + element2.name + "(" + element2.release_date + ")" + "</h2>" + "<button class=buyAlbum id='"+element2.id+"'' >"+'Buy'+"</button>");
		if (element2.images[0] === undefined){
			$("ul").append("no hay imagen disponible");
		}else{
			$("ul").append("<img src='" + element2.images[1].url + "'></img>");

		};
			for(var i = 0; i < total_length; i++){
				console.log(element2);
			$('ul').append("<li>" + "Canción: " + element2.tracks.items[i].name + " - " + "Álbum: " + element2.name + " - " + "Artista: " + element2.artists[0].name + "</li>");
			$('ul').append("<audio src='" + element2.tracks.items[i].preview_url + "' controls ></audio>");
			
			};
	};

	

	$("body").on("click",".buy-album", function(){
		var idAlbumBuyGem = $(this)[0].id;
		localStorage.setItem('albumGem', idAlbumBuyGem);
		var idAlbumBoxGem = localStorage.getItem('albumGem');
		
		$('ul').append();
			$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/albums/" + idAlbumBoxGem,
			data: "",
			success: function(response){boxAlbumGem(response)},
			error: function(){alert("Error")},
			dataType: "json",
		});

		var nameAlbumBoxGem = [];
		function boxAlbumGem(element4){
			console.log(element4.name);
			console.log(element4, "hola");

			var namesGem = element4.name;

			nameAlbumBoxGem = localStorage.getItem('namesOfAlbumsGem')
			nameAlbumBoxGem += "," + element4.name
			localStorage.setItem('namesOfAlbumsGem', nameAlbumBoxGem);
		};
	});

		
	
	
	$("body").on("click",".buyAlbum", function(){
		var idCurrentAlbum = $(this)[0].id
		localStorage.setItem('album', idCurrentAlbum);
		var idAlbumBox = localStorage.getItem('album');

		$('ul').append();
			$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/albums/" + idAlbumBox,
			data: "",
			success: function(response){boxAlbum(response)},
			error: function(){alert("Error")},
			dataType: "json",
		});

		var nameAlbumBox = [];
		function boxAlbum(element4){
			console.log(element4.name);
			console.log(element4, "hola");

			var names = element4.name;

			nameAlbumBox = localStorage.getItem('namesOfAlbums')
			nameAlbumBox += "," + element4.name
			localStorage.setItem('namesOfAlbums', nameAlbumBox);
		};
	});
	
	var namesOfAlbumInBox = localStorage.getItem('namesOfAlbums') + localStorage.getItem('namesOfAlbumsGem')
	n = namesOfAlbumInBox.split(",");
	n.splice(0,1);
	for(var i = 0; i < n.length; i++){
		console.log(n)
		$('.box').append("<li class=listAlbums>" + "Album: " + n[i] + "<button class=destroyAlbum>"+'Delete'+"</button>" +"</li>");
		//$('.box').append("<li>" + "Álbum: " + element4.name + "</li>");
	};
	$("body").on("click",".destroy-all-albums", function(){
		localStorage.removeItem('namesOfAlbums');
		localStorage.removeItem('namesOfAlbumsGem');
	});
	

	function getSongsFromArtist(idSong) {
		$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/tracks/" + idSong,
			data: "",
			success: function(response){the_song(response)},
			error: function(){console.log("Error")},
			dataType: "json"
		});
	};

	function the_song(element3){
		//console.log(element3);
		$('ul').append("<li>" + "Canción: " + element3.name + " - " + "Álbum: " + element3.album.name + " - " + "Artista: " + element3.artists[0].name + "</li>");
		$('ul').append("<audio src='" + element3.preview_url + "' controls ></audio>");	
	};
	
});
