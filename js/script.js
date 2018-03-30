$(document).ready(function() {
var nextR = true;	

		$('.load_hotels ').click(function (e) {
			
if(nextR){

		$(document).ajaxStart(function() {
				$(".loading_spinner").show();
			});
	

        e.preventDefault();
        $.ajax({
            url: "https://prodynafakeapi.herokuapp.com/api/hotels?count=5",
            type: 'GET',
            dataTypes: 'json',
            success: function (data) {
            	console.log(data);
				$(data).each(function (index, hotel) {
					    var block_of_code = '<div class="hotel_holder" id="hotel_holder'+index+'"><div class="image_holder" id="image_holder'+
					    index+'"></div><div class="hotel_description" id="hotel_description'+index+
					    '"><div class="star_holder"><i class="fa fa-star" id="first' +index+
					    '"></i><i class="fa fa-star" id="second' +index+
					    '"></i><i class="fa fa-star" id="third' +index+
					    '"></i><i class="fa fa-star" id="fourth ' +index+
					    '"></i><i class="fa fa-star" id="fifth ' +index+'"></i></div><div class="hotel_name"><h1>' + hotel.name +
					     '</h1><p>' + hotel.city +'</p><p>' + hotel.country + '</p><div class="descript_wrapper"><p>' + hotel.description + 
					     '</p></div></div><div class="show_reviews" id="show_reviews'+index+
					     '"><p>Show reviews</p></div><div class="price_date"><h1>' + 
					     hotel.price + ' &#8364 </h1><p>' + hotel.date_start.substring(0, 10) +
					      '</p><p> - </p><p>' + hotel.date_end.substring(0, 10) +
					      '</p></div></div>'+

					      '<div class="review" id="review'+index+'">'+
					      '</div>';
					
						$('body').append(block_of_code);
							
					
							$('#image_holder' +index).css('background-image', 'url('+ hotel.images[0] +')');
                   
							$('.hotel_holder').stop().fadeIn( "200", "linear" );

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
										var stop_loading = true; //stop loading reviews

						$('#show_reviews' + index).click(function(p){
							if(stop_loading){
									p.preventDefault();
								        	$.ajax({
            									url: "https://prodynafakeapi.herokuapp.com/api/reviews?hotel_id="+hotel.id,
            									type: 'GET',
           										dataTypes: 'json',
           										complete: function(){$(".loading_spinner").hide();},
            									success: function (data1) {
            										console.log(data1);
            										$(data1).each(function (index1, review) {
       															//positive negative review
            													if(review.positive === false){
            														$("#review" +index).append('<div class="review_holder" id="review_holder'+index+'"></div>');
            														$("#review_holder" +index).append("<div class='review_score'id='review_holder"+index+"'><i class='fa fa-minus'></i></div>");
            														$("#review_holder" +index).append("<h1>"+review.name+"</h1><p>"+review.comment+"</p><div class='short_line'></div>");
            														console.log(index);
            													}else{
            														$("#review" +index).append('<div class="review_holder" id="review_holder'+index+'"></div>');
            														$("#review_holder" +index).append("<div class='review_score'id='review_holder"+index+"'><i class='fa fa-plus'></i></div>");
            														$("#review_holder" +index).append("<h1>"+review.name+"</h1><p>"+review.comment+"</p><div class='short_line'></div>");
            													}
            													//positive negative review

            													//short line display none if name count=1
            													if(review.name === 1){
            														$('.short_line').css('display', 'none');	
            													}
            													//short line display none if name count=1			
            											}); 
            										stop_loading=false;
										     }

										});
								        	}
								        	$('#review' +index).stop().slideToggle( "500", "linear" );
											$('#positive_negative_review' + index).stop().fadeToggle( "200", "linear" );
											$('#hotel_description'+index).toggleClass("show_border");
											$('#image_holder' +index).toggleClass("show_border");
											
										});	
								

								});  //index, hotel

            },

            error: function(XMLHttpRequest, textStatus, errorThrown) { 
       $('body').append('<div class="error_message"><p>An error occured</p></div>');
    },
    complete: function(){$(".loading_spinner").hide();},       

        });
        nextR = false;

		}   

    });  

});
			
	
	
	
