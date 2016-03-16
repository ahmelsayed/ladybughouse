//
//
//	Ladybug House custom scripts
//
//

(function ($) {
    $(function () {

		injectPopup();
		openPopup();
		closePopup();

    });

	var injectPopup = function () {
		var href = window.location.href;
		var thisPage = href.split('/').pop();

		var tarr = href.split('/'); //
		var thisPageWithSlash = tarr[tarr.length-2];

		if (thisPage == "give" || thisPageWithSlash == "give"){
			$("body").prepend("<div class='overlay'></div><div id='donate-popup'><div class='close-popup'>X</div><iframe src='https://entry.donorsnap.com/forms/oForms.aspx?id=NTI3YjQwOWYtZWYyNi00NTVmLWJiNWMtYzY1ZGI0MWEzZGI3'></iframe</div>");
		}
	}

	var openPopup = function ()
	{
		jQuery("a[href='#donate-popup']").on("click",function(e){
			e.preventDefault();
			$(".overlay, #donate-popup").fadeIn();
		});
	};
	var closePopup = function ()
	{
		jQuery("#donate-popup .close-popup").on("click",function(){
			$(".overlay, #donate-popup").fadeOut();
		});
	};


}(jQuery));
