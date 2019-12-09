jQuery(document).foundation();

jQuery (function($){
    $('#recipes > div').not(':first').hide();
    $('#filter .menu li:first-child').addClass('active');

   $('#filter .menu a').on('click', function() {
          $('#filter .menu li').removeClass('active');
          var recipe_link = $(this).attr('href');
          $(this).parent().addClass('active');

          console.log(recipe_link);
          $('#recipes > div').hide();
          $(recipe_link).show();
          return false;
   });
});