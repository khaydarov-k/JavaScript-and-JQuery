$(document).ready(function () {
    var $modal = $('.popup');
    var $overlay = $('.overlay');
    var $btn = $('.btn');
    var $close = $('.close-btn');
    var $phone = $('.phone');

    // $btn.click(function (){
    //     $overlay.show();
    //     $modal.show();
    //   });
    //   $close.click(function(){
    //       $overlay.hide();
    //       $modal.hide();
    //     })


    $btn.click(function (){
        $overlay.show();
        $modal.addClass('popup_active');
        $($phone).html($(this).html());
      });

      $close.click(function (){
        $overlay.hide();
        $modal.removeClass('popup_active');
      });
});