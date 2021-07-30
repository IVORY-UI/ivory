$( document ).ready(function() {

  $('.nav-item a').click(function(e) {
    e.preventDefault();

    if ( $('.burger-container').hasClass('menu-opened') && $('.doc-nav').hasClass('menu-opened') ) {
      $('.burger-container').removeClass('menu-opened');
      $('.doc-nav').removeClass('menu-opened');
    }

    let target = e.target.attributes['data-target'].value;
    $('.nav-item a').removeClass('active');
    $('.docs-section').removeClass('section-active');
    $(e.target).addClass('active');
    $('#'+target).addClass('section-active');
    window.scrollTo(0,0);
  });

  $('.burger-container').click(function(e) {
    $('.burger-container').toggleClass('menu-opened');
    $('.doc-nav').toggleClass('menu-opened');
  });

});