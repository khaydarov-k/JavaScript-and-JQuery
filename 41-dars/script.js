// DOM || document object modell

// let text = document.querySelectorAll("p");
// var elBtn = document.querySelector("#btn");

// elBtn.onclick = function(){
//     alert("Bosma");
// }

// console.log(text);
// console.log(elBtn);

// var elBtn = document.querySelector('#btn');
// 


// elBtn.onclick = function(){
//     elBtn.style.color = "red"
//     elBtn.style.padding = "10px"
//     elBtn.style.background = "blue"
//     elBtn.style.borderRadius = "13px"

// }
// elBtn.addEventListener("click", function(){
//     elBtn.style.color = "red"
//     elBtn.style.padding = "10px"
//     elBtn.style.background = "blue"
//     elBtn.style.borderRadius = "13px"
// })
// elBtn.addEventListener("mouseover", function(){
//     elBtn.style.color = "green"
//     elBtn.style.padding = "10px"
//     elBtn.style.background = "orange"
//     elBtn.style.borderRadius = "13px"
// })
// elBtn.addEventListener("mouseout", function(){
//     elBtn.style.color = "orange"
//     elBtn.style.padding = "10px"
//     elBtn.style.background = "green"
//     elBtn.style.borderRadius = "13px"
// })

 var elBtn = document.querySelector(".btn_right");
 var productName = document.querySelector('.product_name');
 var elList = document.querySelector(".list");
 var bozorlik = [];
 

 elBtn.addEventListener('click',function(){
    if(productName.value){
        bozorlik.push(productName.value);
        elList.innerHTML = bozorlik.join("<br>");
        productName.value = "";
    }else{
        alert("Mahsulot kiriting");
    }
 });

 var elBtn = document.querySelector(".btn_left");
 var productName = document.querySelector('.product_name');
 var elList = document.querySelector(".list");
 var bozorlik = [];

 elBtn.addEventListener('click',function(){
    if(productName.value){
        bozorlik.unshift(productName.value);
        elList.innerHTML = bozorlik.join("<br>");
        productName.value = "";
    }else{
        alert("Mahsulot kiriting");
    }
 });
 


 
