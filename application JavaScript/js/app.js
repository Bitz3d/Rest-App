$(function() {

	var button = $('#loadButton')
	var trToAdd = $('#trToAdd');
	var test =0;;


	var buttons =0;
	var counter=0;
	

	button.on('click', function(e){

		e.preventDefault();
		$.ajax({


			url: "http://localhost:8081/booksRest/books",
			dataType : "json",
			success: function( data ) {



				for(var i=0; i < data.length; i++)
				{


					$('#table').append('<tr><td>'+data[i].title+'</td><td><input id="'+data[i].id+'"" class="moreInfo" type="submit" value="Get more info"></td></tr>');


				}

				test = $('#table').find('.moreInfo');
			}


		});

		button.off();

	});

	
	$('#table').on('click', '.moreInfo', function(event){

		event.preventDefault();
		$.ajax({

			url: 'http://localhost:8081/booksRest/books/'+$(this).attr('id'),
			dataType: 'json',
			success: function(data){

				console.log(data.author);
				console.log($("#listOfBooks").find("#showMoreInfo"));
				$("#listOfBooks").find("#showMoreInfo").empty();
				$("#listOfBooks").find("#showMoreInfo").append("<p>More Info: <br>Author: "+data.author+" </p>"+"<p>ISBN: "+data.isbn +" </p>"+"<p>Publisher: "+data.publisher +" </p>"+"<p>Type: "+data.type +" </p>")

			}

		});
	});




$( "#form" ).submit(function( event ) {

		event.preventDefault();

		
		var order = {

			isbn: $('#isbn').val(),
			title: $('#title').val(),
			author: $('#author').val(),
			publisher: $('#publisher').val(),
			type: $('#type').val(),

		};


		console.log(order)

		$.ajax({

		headers: { 
        	'Accept': 'application/json',
        	'Content-Type': 'application/json' 
    		},

			url: 'http://localhost:8081/booksRest/books',
			type: 'POST',
			dataType: 'json',
			
			data:JSON.stringify(order) ,
			
			success: function(){

				console.log('succes');
				
			},
			error: function(){ 

				console.log('fail');

			}

		});

  
});



	function addToTable (id, author, isbn, publisher,title,type) {

		
		$('#table').append('<tr><td>'+id+'</td><td>'+author+'</td><td>'+isbn+'</td><td>'+publisher+'</td><td>'+title+'</td><td>'+type+'</td></tr>')
	};





});
