function load_films(){
		$.ajax({
		url: 'http://217.71.129.139:4589/osamu/api/get_videos.php?count=12&offset=0',
		method: 'get',  
		dataType: 'json',
		success: function(data){
		$('#films').html('')
			data['film'].forEach(function(film){
				let div = $('<div class="film">')
				div.append('<div class="foto"><img src="'+film['POSTER']+'"></div>')
				div.append('<p class="ustal"><b>'+film['Title']+'</b>, <i>'+film['Year']+'</i> год </p>')
				div.append('<p class="ustal">Режисёр: <b>'+film['Rezishor']+'</b></p>')
				div.append('<p class="opisanie">'+film['Opisanie']+'</p>')
				$('#films').append(div)
			})
		}
	});
}
