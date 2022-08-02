let elBtnPrev = document.querySelector('.btn-prev');
let elBtnNext = document.querySelector('.btn-next');
let image = document.querySelectorAll('.slider_img img');
let slider = document.querySelector('.slider');
let i = 0;

elBtnNext.onclick = function(){
    image[i].style.display = 'none';
    i++;
    if(i >= image.length){
        i = 0;
    }
    image[i].style.display = 'block'
}
elBtnPrev.onclick = function(){
    image[i].style.display = 'none';
    i--;
    if(i < 0){

        i = image.length -1;
    }
    image[i].style.display = 'block'
}
console.log(i);
// console.log(elBtnPrev);
// console.log(elBtnNext);
// console.log(image);


function sliderNext(){
    image[i].style.display = "none"
    i++;
    if(i >= image.length){
        i = 0;
    }
    image[i].style.display = "block"
}

function start (){
    return int = setInterval(sliderNext,200);
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



// function style(){
//     alert("hammaga hayr");
// }

// setTimeout(style,1000);

// let stop = setInterval(style,1000);

// clearInterval(stop);

