$('.nav-collapse').on('click', function() {
  $(this).find('i').toggleClass('fa-chevron-up');
});

$('#nav-logo').on('click', function() {
  $('aside').toggleClass('active');
  $('.overlay').toggle();
});