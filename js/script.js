$('.enter').on('click', function(){
  $('.mobi-menu').addClass('active');
})

$('.mobi-menu i').on('click', function(){
  $('.mobi-menu').removeClass('active');
})

$('.my_slick').slick({
  dots:true
});


$('.karusel').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
      autoplaySpeed: 2000,
        dots: true
      }
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
      autoplaySpeed: 2000,
        dots: true
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
      autoplaySpeed: 2000,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 2000,
      dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/*------------------------------ animation ---------------------*/

$(document).ready(function(){   
    $(".go_up").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            wrw = $(id).offset().top;
        $('body,html').animate({scrollTop: wrw}, 2000);
    });


    $(window).scroll(function () {

        if($(window).width() >= 1000){

            if ($(this).scrollTop() >= 400) {
                $('.shipping').addClass('anim_move2').removeClass('reanim_move2');
            }

            /*if ($(this).scrollTop() >= 1100) {
                $('.shipping').addClass('reanim_move2').removeClass('anim_move2');
            }*/


            if ($(this).scrollTop() >= 400) {
                $('.support').addClass('anim_move1').removeClass('reanim_move1');
            }

           /* if ($(this).scrollTop() >= 1100) {
                $('.support').addClass('reanim_move1').removeClass('anim_move1');
            }*/


            if ($(this).scrollTop() >= 400) {
                $('.return').addClass('hid').removeClass('rehid');
            }

            /*if ($(this).scrollTop() >= 1100) {
                $('.return').addClass('rehid').removeClass('hid');
            }*/


            if ($(this).scrollTop() >= 1000) {
                $('.column1 div, .column2 div, .peris').addClass('flash');
            }

            /*if ($(this).scrollTop() >= 2000) {
                $('.column1 div, .column2 div, .peris').removeClass('flash');
            }*/


            if ($(this).scrollTop() >= 3100) {
                $('.fashion_stylish').addClass('anim_move2').removeClass('reanim_move2');
            }

            /*if ($(this).scrollTop() <= 3000) {
                $('.fashion_stylish').addClass('reanim_move2').removeClass('anim_move2');
            }*/


            if ($(this).scrollTop() >= 3100) {
                $('.designer').addClass('anim_move1').removeClass('reanim_move1');
            }

            /*if ($(this).scrollTop() <= 3000) {
                $('.designer').addClass('reanim_move1').removeClass('anim_move1');
            }*/
        }
    });



});



