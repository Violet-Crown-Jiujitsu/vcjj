/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

// Use this variable to set up the common and page specific functions. If you
// rename this variable, you will also need to rename the namespace below.
var Base = {
  // All pages
  common: {
    init: function() {
      $(document).ready( function() {
        
        $beaconLogo = $('.beacon-logo');
        $beaconMsg = $('.beacon-welcome-text');
        $beaconClose = $('.beacon-close');
        $beaconBox = $('.beacon');

        $beaconLogo.click(function () {
            if ($beaconBox.hasClass('active')) {
                $beaconBox.removeClass('active');
                $beaconMsg.removeClass('active');
            } else {
                $beaconBox.addClass('active');
                $beaconMsg.addClass('active');
            }
            if ($(window).width() < 670) {
              $beaconHeight = $( ".beacon-options" ).height() + 30;
              $('.beacon-info').css('bottom',  $beaconHeight + 'px');
              $('.all-site').css('position', 'fixed');
              $('.all-site').css('top', '0px');
              $('.all-site').css('bottom', '0px');
              $('.mobile-menu').css('display', 'none');
            }
        })

        $beaconClose.click(function () {
          if ($beaconBox.hasClass('active')) {
              $beaconBox.removeClass('active');
              $beaconMsg.removeClass('active');
          } else {
              $beaconBox.addClass('active');
              $beaconMsg.addClass('active');
          }
          $('.all-site').css('position', 'relative');
          $('.all-site').css('top', 'auto');
          $('.all-site').css('bottom', 'auto');
          $('.mobile-menu').css('display', 'block');
          if ($(window).width() < 670) {
            window.location.reload()
          }
      })

      $('.beacon-option-pop').click(function(){
        if ($(window).width() < 670) {
          if ($beaconBox.hasClass('active')) {
            $beaconBox.removeClass('active');
            $beaconMsg.removeClass('active');
          } else {
              $beaconBox.addClass('active');
              $beaconMsg.addClass('active');
          }
          $('.all-site').css('position', 'relative');
          $('.all-site').css('top', 'auto');
          $('.all-site').css('bottom', 'auto');
          $('.mobile-menu').css('display', 'block');
        }
      })

      $(window).scroll(function(){
        if ($(window).width() > 670) {
          if($(window).scrollTop()>100){
            $(".beacon-logo").css({"bottom":"80px"})
            $(".beacon-box").css({"bottom":"170px"})
          }else{
            $(".beacon-box").css({"bottom":"110px"})
            $(".beacon-logo").css({"bottom":"10px"})
          }
        }
     });



        // Ajax

        $('.beacon-chat-button').click(function () {
            $chatBox = $('.beacon-info');
            $title = $(this).text();

            dataQuestion = {
                action: 'beacon_question',
                title: $title
            };

            $.get(frontEndAjaxUrl.mcajaxurl, dataQuestion, function (response) {

                $chatBox.append(response);
                $chatBox.animate({ scrollTop: $chatBox[0].scrollHeight }, 1500);
                $chatBox.find('.freeze').addClass('anim');
                $chatBox.find('.freeze').removeClass('freeze');


                dataAnswer = {
                    action: 'beacon_answer',
                    title: $title
                };

                $.get(frontEndAjaxUrl.mcajaxurl, dataAnswer, function (response) {

                    $chatBox.append(response);
                    $chatBox.animate({ scrollTop: $chatBox[0].scrollHeight }, 350);


                    var freeze = $('.freeze');

                    var counter = 0,
                        timer = setInterval(function(){
                            changeClass(freeze[counter]);
                            counter++
                            if (counter === freeze.length) {
                                clearInterval(timer);
                            }
                        },350);
                    function changeClass(item) {
                        $(item).addClass('anim');
                    }

                })

            })

        })
        $('iframe[src*="youtube"]').parent().fitVids();
        
        var stickyOffset = 150;

        $(window).scroll(function(){
          var sticky = $('.sticky-top-bar'),
              scroll = $(window).scrollTop();

          if (scroll >= stickyOffset) sticky.addClass('fixed');
          else sticky.removeClass('fixed');
        });
        if ($(window).width() > 560) {
          $('.all-faqs').masonry({
            itemSelector: '.indiv-faq',
            columnWidth: '.indiv-faq',
            gutter: '.faq-grid-sizer'
          });
        }

        $("header #header-navigation > li").hover(
          function() {
            $('ul', this).stop().slideDown(200);
          },
          function() {
            $('ul', this).stop().slideUp(200);
          }
        );
        $(".sticky-top-bar ul > li").hover(
          function() {
            $('ul', this).stop().slideDown(200);
          },
          function() {
            $('ul', this).stop().slideUp(200);
          }
        );
        $(document).on("click", ".pop-opt", function(){
          $( ".pop-optin" ).fadeToggle( "fast", "linear");
          $( ".pop-overlay" ).fadeToggle( "fast", "linear");
          $("html, body").animate({ scrollTop: 0 }, "fast");
          return false;
        });
        $( ".pop-opt" ).click(function() {
          $( ".pop-optin" ).fadeToggle( "fast", "linear");
          $( ".pop-overlay" ).fadeToggle( "fast", "linear");
          $("html, body").animate({ scrollTop: 0 }, "fast");
          return false;
        });
        $( ".pop-optin-close" ).click(function() {
          $( ".pop-optin" ).fadeToggle( "fast", "linear");
          $( ".pop-overlay" ).fadeToggle( "fast", "linear");
        });
        $( ".popup-centered .popup-close" ).click(function() {
          $( ".indiv-popup .popup-centered" ).fadeToggle( "fast", "linear");
          vimeoWrap = $('.centered-video-responsive');
          vimeoWrap.html(vimeoWrap.html());
        });
        $( ".popup-card .popup-close" ).click(function() {
          $( ".indiv-popup .popup-card" ).addClass( "hide-on-close" );
        });
        $(window).scroll(function(){
          if($(window).scrollTop()>200){
            $(".indiv-popup").removeClass( "show-on-scroll" );
            $(".indiv-popup").removeClass( "show-on-scroll-card" );
          }
        });

        $('.top-tabs a:not(:first)').addClass('inactive');
        $('.tab-content .indiv-tab-content').hide();
        $('.tab-content .indiv-tab-content:first').show();
            
        $('.top-tabs a').click(function(){
            var t = $(this).attr('id');
            if($(this).hasClass('inactive')){ //this is the start of our condition 
              $('.top-tabs a').addClass('inactive');           
              $(this).removeClass('inactive');
            
              $('.indiv-tab-content').hide();
              $('.'+ t).show();
            }
        });

        $(window).scroll(function(){
          if ($(window).width() > 670) {
            if($(window).scrollTop()>100){
              $(".popup-card").css({"bottom":"73px"})
            }else{
              $(".popup-card").css({"bottom":"15px"})
            }
          }
       });
        $( ".hamburger" ).click(function() {
          $( ".all-site" ).toggleClass( "is-active" );
          $( "body" ).toggleClass( "is-active" );
        });

        $('.email-field').blur(function() {
          // Does value contain yahoo.com?
          if ($(this).val().indexOf("webmai.co") != -1)
          {
              // clear the value
              $(this).val("");
          }
          if ($(this).val().indexOf("bdcimail.com") != -1)
          {
              // clear the value
              $(this).val("");
          }
          if ($(this).val().indexOf("ifastnet1.com") != -1)
          {
              // clear the value
              $(this).val("");
          }
          if ($(this).val().indexOf("usaaxa.com") != -1)
          {
              // clear the value
              $(this).val("");
          }
      });

        $( ".mobile-menu .btn" ).click(function() {
          $( ".all-site" ).toggleClass( "is-active" );
          $( "body" ).toggleClass( "is-active" );
        });
        
        $( ".faq-accordions .indiv-faq" ).click(function() {
          $( ".faq-answer", this ).slideToggle( "fast", function() {
            // Animation complete.
            $('.all-faqs').masonry();
          });
        });

        $( ".select-location" ).click(function() {
          $( ".select-location ul" ).slideToggle( "fast", function() {
            // Animation complete.
          });
        });

        var swiper = new Swiper(".banner-carousel", {
          spaceBetween: 0,
          slidesPerView: 1,
          effect: "fade",
          loop: true,
          autoplay: {
            delay: 4500,
          },
        });

        function initMap( $el ) {

          // Find marker elements within map.
          var $markers = $el.find('.marker');

          // Create gerenic map.
          var mapArgs = {
              zoom        : 14,
              mapTypeId   : google.maps.MapTypeId.ROADMAP,
              disableDefaultUI: true,
              styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
          };
          var map = new google.maps.Map( $el[0], mapArgs );

          // Add markers.
          map.markers = [];
          $markers.each(function(){
              initMarker( $(this), map );
          });

          // Center map based on markers.
          centerMap( map );

          // Return map instance.
          return map;
        }

        /**
        * initMarker
        *
        * Creates a marker for the given jQuery element and map.
        *
        * @date    22/10/19
        * @since   5.8.6
        *
        * @param   jQuery $el The jQuery element.
        * @param   object The map instance.
        * @return  object The marker instance.
        */
        function initMarker( $marker, map ) {

            // Get position from marker.
            var lat = $marker.data('lat');
            var lng = $marker.data('lng');
            var latLng = {
                lat: parseFloat( lat ),
                lng: parseFloat( lng )
            };

            // Create marker instance.
            var marker = new google.maps.Marker({
                position : latLng,
                map: map
            });

            // Append to reference for later use.
            map.markers.push( marker );

            // If marker contains HTML, add it to an infoWindow.
            if( $marker.html() ){

                // Create info window.
                var infowindow = new google.maps.InfoWindow({
                    content: $marker.html()
                });

                // Show info window when marker is clicked.
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open( map, marker );
                });
            }
        }

        /**
        * centerMap
        *
        * Centers the map showing all markers in view.
        *
        * @date    22/10/19
        * @since   5.8.6
        *
        * @param   object The map instance.
        * @return  void
        */
        function centerMap( map ) {

            // Create map boundaries from all map markers.
            var bounds = new google.maps.LatLngBounds();
            map.markers.forEach(function( marker ){
                bounds.extend({
                    lat: marker.position.lat(),
                    lng: marker.position.lng()
                });
            });

            // Case: Single marker.
            if( map.markers.length == 1 ){
                map.setCenter( bounds.getCenter() );

            // Case: Multiple markers.
            } else{
                map.fitBounds( bounds );
            }
        }

        // Render maps on page load.
        $(document).ready(function(){
            $('.acf-map').each(function(){
                var map = initMap( $(this) );
            });
        });

        var reviewSlider = new Swiper('.reviews-container', {
          // Optional parameters
          speed: 400,
          direction: 'horizontal',
          loop: true,
          autoHeight: true,
          slidesPerView: 1,
        
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

        });

        var gallerySlider = new Swiper('.gallery-container', {
          // Optional parameters
          speed: 400,
          direction: 'horizontal',
          loop: true,
          autoHeight: true,
          autoplay: true,
          slidesPerView: 1,
          breakpoints: {
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 4,
            }
          }

        });
        
      });
      var $allReviews = $('.all-reviews-masonry').masonry({
        itemSelector: '.indiv-review',
        columnWidth: '.indiv-review',
        gutter: '.review-grid-sizer'
      });
      $allReviews.imagesLoaded().progress( function() {
        $allReviews.masonry('layout');
      });
      /*$('body').css('display', 'none');
      $('body').fadeIn(500);
      $('.link').click(function(event) {
        event.preventDefault();
        newLocation = $('.link a').attr("href");
        $('body').fadeOut(500, newpage);
      });
      function newpage() {
        window.location = newLocation;
      }*/
    }
  },
  // Home page
  home: {
    init: function() {
      // JavaScript to be fired on the home page
      
    }
  },
  // About us page, note the change from about-us to about_us.
  about_us: {
    init: function() {
      // JavaScript to be fired on the about us page
    }
  }
};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = Base;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};

$(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
