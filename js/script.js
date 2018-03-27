	
$(document).ready(function() {
var nextR = true;	
		$('.load_hotels ').click(function (e) {
if(nextR){
        e.preventDefault();
        $.ajax({
            url: "https://prodynafakeapi.herokuapp.com/api/hotels?count=5",
            type: 'GET',
            dataTypes: 'json',
            success: function (data) {
				$(data).each(function (index, hotel) {

						console.log(index);

					    var block_of_code = '<div class="hotel_holder"><div class="image_holder"></div><div class="hotel_description"><div class="star_holder"><i class="fa fa-star" id="first' +index+'"></i><i class="fa fa-star" id="second' +index+'"></i><i class="fa fa-star" id="third' +index+'"></i><i class="fa fa-star" id="fourth ' +index+'"></i><i class="fa fa-star" id="fifth ' +index+'"></i></div><div class="hotel_name"><h1>' + hotel.name + '</h1><p>' + hotel.city + '</p><p>' + hotel.country + '</p><p>' + hotel.description + '</p></div><div class="show_reviews"><p>Show reviews</p></div><div class="price_date"><h1>' + hotel.price + ' &#8364 </h1><p>' + hotel.date_start.substring(0, 10) + '</p><p> - </p><p>' + hotel.date_end.substring(0, 10) + '</p></div></div><div class="review"><div class="positive_negative_review"><i class="fa fa-plus"></i></div><div class="review_holder"><h1>Hermina Lowe</h1><p>Odio neque aut quia voluptatem aut repudiandae consequuntur exlicabo. Eum dolor nisi quia delenitiut aliquid eum neque. Tempore voluptatem aut. Repellendus magni dolorem ex ullam ex. Repellat dolor saepe</p></div></div><div class="short_line"></div><div class="review"><div class="positive_negative_review"><i class="fa fa-minus"></i></div><div class="review_holder"><h1>Martina Mraz</h1><p>Non ex qui molestiae quisquam molestias. Ut quaerat esse. Occaeti labore est deserunt voluptas enim quidem. Pariatur non in velrepellat illum est libero. Reprehenderit et ullam tempore incidunt consectetur et fugit ullam maxime.</p><p>Quia ea non qui. Doloremque aut accusantium molestiae. Ut et et ut distinctio. Ut ullam et dolorum sunt dolore atque sed. Ut doloresid cumque. Ut officia unde</p></div></div></div>';
					
						$('body').append(block_of_code);
					
					
							$('.image_holder').css('background-image', 'url('+ hotel.images[0] +')');
                   
							$('.hotel_holder').stop().fadeIn( "200", "linear" );
							$('.review, .short_line').stop().slideUp( "500", "linear" );
							$('.positive_negative_review').stop().fadeOut( "200", "linear" );
							$('.image_holder, .hotel_description').removeClass("show_border");
							
							if (hotel.stars === 1) {
											$('#first' + index).css('color', 'black');
									}else if (hotel.stars === 2){ 
											$('#first' + index).css('color', 'black');	
											$('#second' + index).css('color', 'black');
										}
									else if (hotel.stars === 3){ 
											$('#first' + index).css('color', 'black');
											$('#second' + index).css('color', 'black');	
											$('#third' + index).css('color', 'black');	
										}
									else if (hotel.stars === 4){ 
											$('#first' + index).css('color', 'black');
											$('#second' + index).css('color', 'black');	
											$('#third' + index).css('color', 'black');	
											$('#fourth' + index).css('color', 'black');	
										}
									else{ 
											$('#first' + index).css('color', 'black');
											$('#second' + index).css('color', 'black');	
											$('#third' + index).css('color', 'black');	
											$('#fourth' + index).css('color', 'black');	
											$('#fifth' + index).css('color', 'black');	
										}
										
										$('.show_reviews ').click(function(){
											$('.review, .short_line').stop().slideToggle( "500", "linear" );
											$('.positive_negative_review').stop().fadeToggle( "200", "linear" );
											$('.image_holder, .hotel_description').toggleClass("show_border");
										});
										
						});
            }
        });
        nextR = false;
		}     
    })

});
			
	
	
	
