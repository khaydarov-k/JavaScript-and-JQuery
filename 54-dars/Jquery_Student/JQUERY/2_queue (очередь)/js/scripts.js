$(document).ready(function(){
    $('.ask').on('click',function(){
        var answer = $(this).next();
        $('.answer').not(answer).slideUp();
        answer.slideToggle();
    })
})