//
//
//	Ladybug House custom scripts
//
//

(function ($) {
    $(function () {

		//Give Today Popup:
		injectPopup();
		openPopup();
		closePopup();

		//Media items filters
		mediaItemsTagsToClasses();
		mediaItemsClassesToFilters();
		mediaFilters();

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

	var mediaItemsTagsToClasses = function ()
	{
			var mediaContainer = $(".summary-item-list-container");

			mediaContainer.find(".summary-item").each(function(){
				var tag = $(this).find(".summary-metadata-container--above-title .summary-metadata--secondary .summary-metadata-item--tags > a").text();
				tagLower = tag.toLowerCase();
				$(this).addClass("tag-"+tagLower);
				$(this).addClass("mix");
				$(this).attr("data-tag",tagLower);
				tag = "";
			});
	}
	var mediaItemsClassesToFilters = function ()
	{
		var mediaContainer = $(".summary-item-list-container");

			var filters = [];
			mediaContainer.find(".summary-item").each(function(){
				var tag = $(this).data("tag");
				filters.push(tag);
			});

			uniqueFilters = $.unique(filters);

			mediaContainer.before("<div id='filter-tags'><span>Filter by: </span><ul><li class='filter active' data-filter='all'>VIEW ALL</li></ul></div>")

			$.each(uniqueFilters, function( index, value ) {

			  $("#filter-tags > ul").append("<li class='filter' data-filter='.tag-"+value+"'>"+value+"</li>")

			});
	}
	var mediaFilters = function()
	{
		var mediaContainer = $(".summary-item-list-container > div");
		mediaContainer.mixItUp();
	}


}(jQuery));
