
(function($,sr) {

  var debounce = function (func, threshold, execAsap) {
    var timeout;
    return function debounced () {
      var obj = this, args = arguments;
      function delayed () {
        if (!execAsap)
                          func.apply(obj, args);
        timeout = null;
      }
      ;
      if (timeout)
                    clearTimeout(timeout); else if (execAsap)
                    func.apply(obj, args);
      timeout = setTimeout(delayed, threshold || 100);
    }
    ;
  }
  // smartresize 
  jQuery.fn[sr] = function(fn) {
    return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
  }
  ;
}
)(jQuery,'smartresize');

$(function() {

    // Fix the Home Height

    var setHomeBannerHeight = function(){
	   var homeHeight= $(window).height();
	   $('#overlay-1').height(homeHeight);
    }
    setHomeBannerHeight();

    // Arrow drop effect

    var $scrollDownArrow = $('.bottom > a');

    // Smooth Scrolling and remove Hash tag from link

    // $('a[href*=#]:not([href=#])').click(function() {
       
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //         if (target.length) {
    //             $('html,body').animate({
    //                 scrollTop: target.offset().top
    //             }, 1000, function(){
                  
    //             });
    //             return false;
    //         }
    //     }
    // });


  ///////////////////////////////
  // Center Home Slideshow Text
  ///////////////////////////////
  function centerHomeBannerText() {
    var bannerText = jQuery('#header .middle');
    var bannerTextTop = (jQuery('#header').actual('height')/2) - (jQuery('#header .middle').actual('height')/2) - 20;
    bannerText.css('padding-top', bannerTextTop+'px');
    bannerText.show();
  }
  centerHomeBannerText();



    jQuery(window).smartresize(function() {
        setHomeBannerHeight();
        centerHomeBannerText();
    });
    
});



$(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});
$(function() {

  $(window).scroll(function() {

      if($(this).scrollTop() != 0) {

          $('#toTop').fadeIn();

      } else {

          $('#toTop').fadeOut();

      }

  });

  $('#toTop').click(function() {

      $('body,html').animate({scrollTop:0},800);

  });
});

/*
 $(".skill_main").each(function() {
   $(this).waypoint(function() {
       var progressBar = $(".progress-bar");
       progressBar.each(function(indx){
           $(this).css("width", $(this).attr("aria-valuenow") + "%")
       })
   }, {
       triggerOnce: true,
      offset: 'bottom-in-view'

   });
 });*/


