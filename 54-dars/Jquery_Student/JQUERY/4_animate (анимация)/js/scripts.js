$(document).ready(function(){
    $('.answer').on('click',function(){
        $(this).animate({
            opacity: 1,
            width: '50%',
            marginLeft: '100px',
            height: '300px'
        },500).animate({
            opacity: 0,
            width: '100%',
            marginLeft: '200px',
            height: '200px'
        },1000)
    })
})
