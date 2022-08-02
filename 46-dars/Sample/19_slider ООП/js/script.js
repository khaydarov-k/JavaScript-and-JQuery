var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var img = document.querySelectorAll(".photo img");
var i = 0;

next.onclick = function () {
    img[i].classList.remove('active');
    i++;
    if (i >= img.length) {
        i = 0;
    }
   
    img[i].classList.add("active");
}
prev.onclick = function () {
    img[i].classList.remove('active');
    i--;
    if (i < 0) {
        i = img.length - 1;
    }
   
    img[i].classList.add("active");
}