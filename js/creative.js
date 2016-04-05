/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

// Slider Code
var slider = {
  
  el: {
    slider: $("#slider"),
    allSlides: $(".slide"),
    sliderNav: $(".slider-nav"),
    allNavButtons: $(".slider-nav > a")
  },
  
  timing: 800,
  slideWidth: 700, 
 
  init: function() {
    this.bindUIEvents();
  },
  
  bindUIEvents: function() {
    // You can either manually scroll...
    this.el.slider.on("scroll", function(event) {
      slider.moveSlidePosition(event);
    });
    // ... or click a thing
    this.el.sliderNav.on("click", "a", function(event) {
      slider.handleNavClick(event, this);
    });
  },
  
  moveSlidePosition: function(event) {
    // Magic Numbers =(
    this.el.allSlides.css({
      "background-position": $(event.target).scrollLeft()/ "px 0"
    });  
  },
  
  handleNavClick: function(event, el) {
    event.preventDefault();
    var position = $(el).attr("href").split("-").pop();
    
    this.el.slider.animate({
      scrollLeft: position * this.slideWidth
    }, this.timing);
    
    this.changeActiveNav(el);
  },
  
  changeActiveNav: function(el) {
    this.el.allNavButtons.removeClass("active");
    $(el).addClass("active");
  }
  
};

slider.init();
