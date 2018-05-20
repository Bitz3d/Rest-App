$(function() {

	var button = $('#loadButton')
	var trToAdd = $('#trToAdd');
	var test =0;;


	var buttons =0;
	var counter=0;
	

	button.on('click', function(event){

		event.preventDefault();
		bookTable ();

		button.off();

	});

	
	$('#table').on('click', '.moreInfo', function(event){

		event.preventDefault();
		$.ajax({

			url: 'http://localhost:8080/books/'+$(this).attr('id'),
			dataType: 'json',
			success: function(data){

				console.log(data.author);
				console.log($("#listOfBooks").find("#showMoreInfo"));
				$("#listOfBooks").find("#showMoreInfo").empty();
				$("#listOfBooks").find("#showMoreInfo").append("<p>More Info: <br>Author: "+data.author+" </p>"+"<p>ISBN: "+data.isbn +" </p>"+"<p>Publisher: "+data.publisher +" </p>"+"<p>Type: "+data.type +" </p>")

			}

		});
	});



		$('#table').on('click', '.deleteBook', function(event){

		event.preventDefault();
		$.ajax({

			url: 'http://localhost:8080/books/'+$(this).attr('id'),
			dataType: 'json',
			type: 'delete',
			success: function(data){

				

				
			},
			complete: function(data){ 
				

				$("#table tr").remove(); 
				bookTable ();
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

			url: 'http://localhost:8080/books',
			type: 'POST',
			dataType: 'json',

			data:JSON.stringify(order) ,
			
			success: function(){

				
				
			},
			error: function(data){ 
				
				document.getElementById("form").reset(); 

			},
			complete: function(data){ 
				
				$("#table tr").remove(); 
				bookTable ();
			}

		});

  
});



	function addToTable (id, author, isbn, publisher,title,type) {

		
		$('#table').append('<tr><td>'+id+'</td><td>'+author+'</td><td>'+isbn+'</td><td>'+publisher+'</td><td>'+title+'</td><td>'+type+'</td></tr>')
	};


	function bookTable () {

				$.ajax({


			url: "http://localhost:8080/books",
			dataType : "json",
			success: function( data ) {



				for(var i=0; i < data.length; i++)
				{


					$('#table').append('<tr><td>'+data[i].title+'</td><td><input id="'+data[i].id+'"" class="moreInfo" type="submit" value="Get more info"></td><td><input id="'+data[i].id+'"" class="deleteBook" type="submit" value="Delete Book"></td></tr>');


				}

				test = $('#table').find('.moreInfo');
			}


		});
	};




});
