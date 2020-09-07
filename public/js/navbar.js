$(document).ready(function(){
	var clicked = false;

	function openNavbar(){
		if (!clicked) {
			$(".main-navi .bars .bar").css({
				"background-color": "#86c232"
			});

			$(".navi-items .navi-item").each(function(i) {
			    $(this).delay(100 * i).fadeIn(200);
			});

			clicked = true;
		} else {
			$(".main-navi .bars .bar").removeAttr("style");

			$($(".navi-items .navi-item").get().reverse()).each(function(i) {
			    $(this).delay(100 * i).fadeOut(200);
			});

			clicked = false;
		}
	}

	$(".main-navi .bars").click(function(){
		openNavbar()
	});

})