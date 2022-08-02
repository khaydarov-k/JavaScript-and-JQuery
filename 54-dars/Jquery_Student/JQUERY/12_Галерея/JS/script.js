$(document).ready(function(){
    $('#small a').click(function(e){
        e.preventDefault();
        var id =$(this).attr('href');
        console.log(id);
        $('#big img').fadeOut(function(){
            $(this).attr('src',id).fadeIn();
        })
    })
})