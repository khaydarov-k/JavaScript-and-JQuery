window.addEventListener('load', function(){
    var sl1 = new slider('.gallery-1 .next','.gallery-1 .prev','.gallery-1 img');
    var sl2 = new slider('.gallery-2 .next','.gallery-2 .prev','.gallery-2 img');
    var sl3 = new slider('.gallery-3 .next','.gallery-3 .prev','.gallery-3 img');

    console.log(sl1);
    console.log(sl2);
    console.log(sl3);




    function slider(btnNext,btnPrev,image){    
    this.prev = document.querySelector(btnNext);
    this.next = document.querySelector(btnPrev);
    this.img = document.querySelectorAll(image);
    this.i = 0;

    var slider = this;

 this.next.onclick = function() {
    slider.img[slider.i].classList.remove('active');
    slider.i++;
    if (slider.i >= slider.img.length) {
        slider.i = 0;
    }
   
    slider.img[slider.i].classList.add("active");
}
 this.prev.onclick = function () {
    slider.img[slider.i].classList.remove('active');
    slider.i--;
    if (slider.i < 0) {
        slider.i = slider.img.length - 1;
    }
   
    slider.img[slider.i].classList.add("active");
}

}
})