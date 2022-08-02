let elBtnPrev = document.querySelector('.btn-prev');
let elBtnNext = document.querySelector('.btn-next');
let image = document.querySelectorAll('.slider_img img');
let slider = document.querySelector('.slider');
let i = 0;
elBtnNext.onclick = function(){
    image[i].classList.remove('active');
    i++;
    if( i >= image.length){
        i = 0;
    }
    image[i].classList.add('active');
}
elBtnPrev.onclick = function(){
    image[i].classList.remove('active');
    i--;
    if(i < 0){

        i = image.length -1;
    }
    image[i].classList.add('active');
}
function sliderNext(){
    image[i].style.opacity = "0"
    i++;
    if(i >= image.length){
        i = 0;
    }
    image[i].style.opacity = "1"
}

function start (){
    return int = setInterval(sliderNext,2000);
}
start();

function stop (){
    clearInterval(int);
}

slider.onmouseover = function (){
    stop();
}
slider.onmouseout = function (){
    start();
}