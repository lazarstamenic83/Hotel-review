
		$(document).ready(function() {						

								$('.show_reviews').click(function(p){
									p.preventDefault();
                          					$('.review, .short_line').stop().slideToggle( "500", "linear" );
											$('.positive_negative_review').stop().fadeToggle( "200", "linear" );
											$('.image_holder, .hotel_description').toggleClass("show_border");
								
								        	$.ajax({
            									url: "https://prodynafakeapi.herokuapp.com/api/reviews?hotel_id=13ef1108-7f18-40c7-ac0f-0e743b015755/count=5",
            									type: 'GET',
           										dataTypes: 'json',
            									success: function (data1) {
            									console.log(data1);
            									//data1 function
            									$(data).each(function (index1, hotel1) {

            										});
										     	}
											});
								        });	//show_reviews
								});
