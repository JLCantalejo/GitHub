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
		switch(selectOption){
			case "artist":
				total_length = element.artists.items.length;
				for(var i = 0; i < total_length; i++){
					if (element.artists.items[i].images[0] === undefined){
						$("ul").append("<div class=image-artist>" + "<img src='/nophotos.jpg'></img>" + "</div>");
					}else{
						$("ul").append("<div class=image-artist>" + "<img src='" + element.artists.items[i].images[0].url + "'></img>" + "</div>");
					};
					$('ul').append("<a href='artists/"+element.artists.items[i].id+"'><h2 class=name-artist>" + element.artists.items[i].name + "</h2></a>");
				};
				break;
			case "album":
				total_length = element.albums.items.length;
				for(var i = 0; i < total_length; i++){
					idAlbum = element.albums.items[i].id;
					getAlbumsFromArtist(idAlbum);
				};
				break;
			case "track":
				total_length = element.tracks.items.length;
				for(var i = 0; i < total_length; i++){
					idSong = element.tracks.items[i].id;
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
		$('#lista').append("<div class=description-album>"+"<h4>" + "Artist: " + element2.artists[0].name + "</h4>" + "</div>");
		$('#lista').append("<div class=description-album>"+"<h5>" + "Album: " + element2.name + " ( " + element2.release_date + " ) " + "</h5>"+ "</div>");
		$('#lista').append("<button class=buyAlbum id='"+element2.id+"'' >" + "<img class=add-cart-blue src='  /addtocartblue.png  '></img>" + "</button>");

		if (element2.images[0] === undefined){
			$("#lista").append("no hay imagen disponible");
		}else{
			$("#lista").append("<img class=imagenAlbum src='" + element2.images[0].url + "'></img>");
		};
			for(var i = 0; i < total_length; i++){
				$('#lista').append("<li class=tracks>" + "Track: " + element2.tracks.items[i].name + "</li>"+ "<br>");
				$('#lista').append("<li class=tracks>" +"<audio src='" + element2.tracks.items[i].preview_url + "' controls ></audio>" + "</li>" +"<br>")
			};
				$('#lista').append("<hr class=line-artists>");
	};

	var nameAlbumBoxGem;

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

		var priceAlbumGem;
		var nameAlbumBoxGem;
		function boxAlbumGem(element4){
			nameAlbumBoxGem = localStorage.getItem('namesOfAlbumsGem')
			if (nameAlbumBoxGem == null){
				nameAlbumBoxGem = []
			}
			nameAlbumBoxGem += element4.name + ","
			localStorage.setItem('namesOfAlbumsGem', nameAlbumBoxGem);

			priceAlbumGem = localStorage.getItem('priceAlbumBoxGem')
			if (priceAlbumGem == null){
				priceAlbumGem = []
			}
			priceAlbumGem += element4.tracks.total + "," 
			localStorage.setItem('priceAlbumBoxGem', priceAlbumGem);
		};
	});
	var nameAlbumBox;

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
		var priceAlbum;
		var nameAlbumBox;
		function boxAlbum(element4){
			nameAlbumBox = localStorage.getItem('namesOfAlbums')
			if (nameAlbumBox == null){
				nameAlbumBox = []
			}
			nameAlbumBox += element4.name + ","
			localStorage.setItem('namesOfAlbums', nameAlbumBox);

			priceAlbum = localStorage.getItem('priceAlbumBox')
			if (priceAlbum == null){
				priceAlbum = []
			}
			priceAlbum += element4.tracks.total + "," 
			localStorage.setItem('priceAlbumBox', priceAlbum);
		};
	});
	if (localStorage.getItem('namesOfAlbumsGem') == null){
		var namesOfAlbumInBox = localStorage.getItem('namesOfAlbums') + localStorage.getItem('namesOfAlbumsGem')
	}else{
		var namesOfAlbumInBox = localStorage.getItem('namesOfAlbumsGem') + localStorage.getItem('namesOfAlbums')
	}
	var n = namesOfAlbumInBox.split(",");
	n.pop();

	for(var i = 0; i < n.length; i++){
		$('.box1').append("<li>" + "<strong>" + "Album: " + n[i] /*+ "<button class=destroyAlbum>"+'Delete'+"</button>"*/ + "</strong>" + "</li>" + "<br>" + "<hr>");
	};
	if (localStorage.getItem('priceAlbumBoxGem') == null){
		var pricesOfALbumsInBox = localStorage.getItem('priceAlbumBox') + localStorage.getItem('priceAlbumBoxGem')
	}else{
		var pricesOfALbumsInBox = localStorage.getItem('priceAlbumBoxGem') + localStorage.getItem('priceAlbumBox')
	}
	var x = pricesOfALbumsInBox.split(",");
	x.pop();
	
	var totalPrice = 0

	for(var i = 0; i < x.length; i++){
		totalPrice += parseFloat(x[i]);
		$('.box2').append("<li>"+ "<strong>" + "Price: " + x[i] + " €" + "</strong>" + "</li>" + "<br>" + "<hr>");
	};
	$('.total-price span').append("<span>" + totalPrice + " €" + "</span>");

	$("body").on("click",".destroy-all-albums", function(){
		localStorage.clear();
	});

	$("body").on("click",".destroyAlbum", function(){
		localStorage.removeItem('namesOfAlbums')
		/*var nameAlbumDelete = $(this).val();
		console.log(nameAlbumDelete)*/
		//nameAlbumDelete.remove();
		
		/*nameAlbumBox = localStorage.getItem('namesOfAlbums');
		nameAlbumBox -= "," + nameAlbumDelete
		localStorage.setItem('namesOfAlbums', nameAlbumBox);*/
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
		$('ul').append("<li>" + "Canción: " + element3.name + " - " + "Álbum: " + element3.album.name + " - " + "Artista: " + element3.artists[0].name + "</li>");
		$('ul').append("<audio src='" + element3.preview_url + "' controls ></audio>");	
	};
});