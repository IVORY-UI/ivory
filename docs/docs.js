$( document ).ready(function() {
  $('.nav-item a').click(function(e) {
    e.preventDefault();
    let target = e.target.attributes['data-target'].value;
    $('.nav-item a').removeClass('active');
    $('.docs-section').removeClass('section-active');
    $(e.target).addClass('active');
    $('#'+target).addClass('section-active');
  });
});