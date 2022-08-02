$(document).ready(function () {
    var $links = $('.nav a');
    $links.click(function(e){
        e.preventDefault();
        $links.parent().removeClass('active');
        $(this).parent().addClass('active');

        var $target = $(this).attr('href');

        $('.tab-pane').removeClass('active');
        $($target).addClass('active')
    })
});