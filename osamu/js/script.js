function load_films(){
		$.ajax({
		//url: 'http://172.17.4.160/osamu/api/get_videos.php?count=11&offset=0',
		url: 'http://217.71.129.139:4589/osamu/api/get_videos.php?count=11&offset=0',
		method: 'get',  
		dataType: 'json',
		success: function(data){
		$('#films').html('')
			data['film'].forEach(function(film){
				let div = $('<div class="film">')
				div.append('<div class="foto"><img src="'+film['POSTER']+'"></div>')
				div.append('<h6 class="ustal">'+film['Title']+', '+film['Year']+' год </h6>')
				div.append('<p class="ustal">Режисёр: '+film['Rezishor']+'</p><p class="">'+film['Opisanie']+'</p>')
				$('#films').append(div)
			})
		}
	});
}
