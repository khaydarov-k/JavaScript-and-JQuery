$(document).ready(function(){
    $('.show').on('click',function(){
        $('section').animate({
           
            opacity:'1'
        },1000)
    })
    $('.hide').on('click',function(){
        $('section').animate({
            
            opacity:'0',
          
        },1000)
    })
})