$(document).ready(function(){
  var $links =  $('.menu a');
    $links.click(function(e){
        e.preventDefault();

        var target = $(this).attr('href');
        var id = $(target).offset().top -60;


        $('html,body').animate({scrollTop: id,},1000)
    })

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        console.log(scroll);

        $links.each(function(){
            var target = $(this).attr('href');
            var selector = $(target).offset().top -60;
            if(scroll>= selector){
                $links.removeClass('active');
                $(this).addClass('active');
            }
        })
    })
})