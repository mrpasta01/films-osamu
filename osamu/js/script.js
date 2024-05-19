let offset=0;

function next(){
	offset +=5;
	load_films();
}

function prev(){
	offset -=5;
	load_films();
}

function load_films(){
	if(offset==0)	$('#but_prev').attr('disabled', true)
	if(offset>1)	$('#but_prev').attr('disabled', false)
	if(offset==10) 	$('#but_next').attr('disabled', true)
	if(offset<10) 	$('#but_next').attr('disabled', false) 
		$.ajax({
		url: 'http://217.71.129.139:4589/osamu/api/get_videos.php?count=5&offset='+offset,
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
				$(document).scrollTop(0)
			})
		}
	});
}
