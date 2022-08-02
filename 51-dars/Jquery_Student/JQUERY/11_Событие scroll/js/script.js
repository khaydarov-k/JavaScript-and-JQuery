$(document).ready(function(){
    var $btn = $('#top');
    $(window).on('scroll',function(){
        if($(window).scrollTop() >= 250){
            $btn.fadeIn();
        }else{
            $btn.fadeOut();
        }
    });
    $btn.on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },1000)
    })
});
