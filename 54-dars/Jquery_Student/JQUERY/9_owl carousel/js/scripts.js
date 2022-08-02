$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        responsive:{
            320:{
                items:1,
                nav:true,
               
            },
            576:{
                items:3,
                nav:true,
                loop:true, 
                
            },
            976:{
                items:5,
                nav:true,
                loop:true,
                autoplay: true,
            }
        }
    
        
    })
    
  });