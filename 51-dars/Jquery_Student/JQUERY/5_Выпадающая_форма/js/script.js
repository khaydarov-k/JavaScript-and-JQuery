$(document).ready(function(){
    $('#search').on('click',function(){
        $('.search').animate({
            top: 0,
            
        },1000)
    })
    $('#close').on('click',function(){
        $('.search').animate({
            top: '-150px',
            
        },1000)
    })
})