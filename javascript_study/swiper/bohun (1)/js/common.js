$(document).ready(function(){
    $(window).scroll(function() {
	    // top button controll
	    if ($(this).scrollTop() > 500) {
	        $('#topButton').fadeIn();
	    } else {
	        $('#topButton').fadeOut();
	    }
	});

	$("#topButtonImg").click(function() {
		$('html, body').animate({scrollTop:0}, '300');
	});
})