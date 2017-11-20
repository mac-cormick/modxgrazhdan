$(document).ready(function() {

	$('nav.mainmenu>ul').attr('id', 'mainmenu');

  var links = $('header.header-mobile #mainmenu li');
  for (var i=0; i<links.length; i++) {
    if (links[i].children.length == 2) {
      var spanelem = document.createElement("span");
      spanelem.classList.add("spanelem");
      links[i].children[0].after(spanelem);
    }
  }

  $('span.spanelem').click(function() {
    // $(this).next().css('height','auto');
    $(this).next().slideToggle();
  });

	$(window).scroll(function() {
		if ( $(window).scrollTop() > 100 ) {
			$('div#logo').hide();
		} else {
			$('div#logo').show();
		}
	});

	$('.owl-carousel').owlCarousel({
  	loop:true,
  	autoplay:true,
  	autoplaySpeed:2000,
  	autoplayTimeout: 1000,
  	dots: true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        }
    }
  });

  $('.owl-carousel').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  removalDelay: 350,
  	mainClass: 'mfp-fade',
  	gallery: {
    // options for gallery
    enabled: true
  	}
	});

  $('.magnif').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    removalDelay: 350,
    mainClass: 'mfp-fade',
    gallery: {
    // options for gallery
    enabled: true
    }
  });

  // $("#lightgallery").lightGallery();

});