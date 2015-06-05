$(document).ready(function(){
	$(".buscar").on("click", function(){
		var art =  $("#artist").val();
		$('ul').empty();

	
		//console.log(art);
			$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/search?type=album&q=" + art,
			data: "",
			success: function(response){the_artist(response)},
			error: function(){alert("Error")},
			dataType: "json",
		});
	});
		var idAlbum;
		function the_artist(element){
			/*var list = element.artists;
			var items = list.items;
			var images = items.images;
			var url_images = images.url_images;*/
			
			total_length = element.albums.items.length;
				//console.log(element);
				for(var i = 0; i < total_length; i++){
				idAlbum = element.albums.items[i].id;
				//console.log(idAlbum);
				getAlbumsFromArtist(idAlbum);
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
			console.log(element2);
					/*if (element2.artists[i] === undefined){
						$("ul").append("Nombre desconocido");
					}else{
						$('ul').append("<h3>" + element2.artists[i].name + "</h3>");
					};*/
					var dateAlbum = element2.release_date;
					console.log(dateAlbum);
					
					//var arrayOrdenado = rsort(element2.release_date);
					for(var i = 0; i < dateAlbum; i++){
						$dateAlbum.sort();
					}
					$('ul').append("<h2>" + element2.artists[0].name + (" - ") + element2.name + "(" + element2.release_date + ")" +  "</h2>");
					if (element2.images[1] === undefined){
						$("ul").append("no hay imagen disponible");
					}else{
						$("ul").append("<img src='" + element2.images[1].url + "'></img>");

					};
			for(var i = 0; i < total_length; i++){
			$('ul').append("<li>" + "Canción: " + element2.tracks.items[i].name + " - " + "Álbum: " + element2.name + " - " + "Artista: " + element2.artists[0].name + "</li>");
			$('ul').append("<audio src='" + element2.tracks.items[i].preview_url + "' controls ></audio>");

		};
		};
/*
	$(".buscar").on("click", function(){
		var art =  $("#artist").val()
		
		console.log(art);
			$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/search?type=album&query=" + art,
			data: "",
			success: function(response){the_album(response)},
			error: function(){alert("Error")},
			dataType: "json",
	});
});
		
	function the_album(element){
	$("ul").append();
	total_length = element.albums.items.length;
	console.log(element);	
		for(var i = 0; i < total_length; i++){
					$("ul").append("<li>" + element.albums.items[i].name + "</li>");
					if (element.albums.items[i].images[i] === undefined){
						$("ul").append("no hay imagen disponible")
					}else{
					$("ul").append("<img src='" + element.albums.items[i].images[i].url + "'></img>");
					};
				};
		};*/
});
