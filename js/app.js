jQuery(document).foundation();

jQuery (function($){
    $('#search_btn').on('click', function(){

        var recipe = $('#recipe_name').val();
        var postData = {
            action: 'advancedSearch',
            search_recipe: recipe
        }
        jQuery.ajax({
            url: admin_url.ajax_url,
            type: 'post',
            data: postData
        }).done(function(response){
            $.each(response, function(index, object){
                var recipe_meal = '<li class="medium-4 small-12 columns">'+
                    object.image +
                    '<div class="content">'+
                    '<h3 class="text-center">'+
                    '<a href="'+object.link+'">' +
                    object.name +
                    '</a>' +
                    '</h3>' +
                    '</div>' +
                    '</li>';

                $('#meal-per-hour').append(recipe_meal);
            });
        });
    });

    $('.simplefilter li').click(function(){
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });

    if($('.filtr-container').length){
        $('.filtr-container').filterizr();
    }

    if($('.filtr-container-packed').length){
        $('.filtr-container-packed').filterizr({layout: 'packed'});
    }

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

   var date = new Date();
   var time = date.getHours();
   var meal;
   if(time<=10){
       meal = "breakfast"
   } else if (time >= 11 && time <= 17){
       meal = "lunch"
   } else {
       meal = "dinner";
   }
  $('h2#time').append('<span>' +meal+ '</span>');

    jQuery.ajax({
     url: admin_url.ajax_url,
       type: 'post',
       data: {
         action: 'recipe_' +meal
       }
    }).done(function(response){
       $.each(response, function(index, object){
          var recipe_meal = '<li class="medium-4 small-12 columns">'+
                             object.image +
                             '<div class="content">'+
                             '<h3 class="text-center">'+
                             '<a href="'+object.link+'">' +
                             object.name +
                             '</a>' +
                             '</h3>' +
                             '</div>' +
                             '</li>';

             $('#meal-per-hour').append(recipe_meal);
       });
    });
  });