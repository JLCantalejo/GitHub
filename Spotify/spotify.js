$(document).ready(function(){
	$(".buscar").on("click", function(){
		var art =  $("#artist").val()
		
		console.log(art);
			$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/search?type=album&q=" + art,
			data: "",
			success: function(response){the_artist(response)},
			error: function(){alert("Error")},
			dataType: "json",
		});
	});

		function the_artist(element){
			/*var list = element.artists;
			var items = list.items;
			var images = items.images;
			var url_images = images.url_images;*/
			$("ul").empty();
			total_length = element.tracks.items.length;
					console.log(element);
				
				
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
