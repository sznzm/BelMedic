$(document).ready(function () {
	$('.bxslider').bxSlider({
		auto: true,
		autoControls: false,
		stopAutoOnClick: true,
		pager: true,
	});

	$("#openNav").click(function () {
		$("#myNav").toggle();
	});
});
