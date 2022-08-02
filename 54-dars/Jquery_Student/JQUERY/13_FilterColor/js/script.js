$(document).ready(function () {

    function filterColor(color){
        $('.color').filter('.'  + color).slideDown();
        $('.color').not('.'  + color).slideUp();
      
    }


    $('.f-red').click(function(){
        filterColor('red')
    });
    $('.f-green').click(function(){
        filterColor('green')
    });
    $('.f-blue').click(function(){
        filterColor('blue')
    });
      $('.f-all').click(function(){
        filterColor('color')
    });
    
});
