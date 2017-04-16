// global. currently active menu item 
var current_item = 0;

// few settings
var section_hide_time = 1300;
var section_show_time = 1300;

// jQuery stuff
$(document).ready(function($) {

  // Switch section
  $(".menu-item", '.mainmenu').click(function() {
    if( ! $(this).hasClass('active') ) { 
      current_item = this;
      // close all visible divs with the class of .section
      $('.section:visible').fadeOut( section_hide_time, function() { 
        $('.menu-item', '.mainmenu').removeClass( 'active' );  
        $(current_item).addClass( 'active' );
        var new_section = $( $(current_item).attr('href') );
        new_section.fadeIn( section_show_time );
      });
      $('.dropdown').removeClass('open');
    }
    return false;
  });   
});


$('.presti-photos').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});