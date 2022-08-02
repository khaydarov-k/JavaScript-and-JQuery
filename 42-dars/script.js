var elProductName = document.querySelector('.product_name');
var elBtnLeft = document.querySelector('.btn_left');
var elBtnRight = document.querySelector('.btn_right');
var elProductIndex = document.querySelector('.product_index');
var elBtnRemove = document.querySelector('.btn_remove');
var elProductList = document.querySelector('.product_list');
let bozorlik = [];

elBtnLeft.addEventListener('click', function(){
    if(elProductName.value){
        if(bozorlik.indexOf(elProductName.value) == -1){
            bozorlik.unshift(elProductName.value);
            elProductList.innerHTML = bozorlik.join("<br>");
            elProductName.value = '';
            elProductName.focus();
        }else{
            alert("Bundey mahsulot royxatda bor");
        }

    }else{
        alert("Mahsulot nomini kiriting");
    }
});

elBtnRight.addEventListener('click', function(){
    if(elProductName.value){
        if(bozorlik.indexOf(elProductName.value) == -1){
            bozorlik.push(elProductName.value);
            elProductList.innerHTML = bozorlik.join("<br>");
            elProductName.value = '';
            elProductName.focus();
        }else{
            alert("Bundey mahsulot royxatda bor");
        }

    }else{
        alert("Mahsulot nomini kiriting");
    }
});

elBtnRemove.addEventListener('click', function(){
    if(elProductIndex.value){
        if(elProductIndex.value <= bozorlik.length){
            if(bozorlik.indexOf(elProductName.value)){
                bozorlik.splice(elProductName.value, 1);
                elProductList.innerHTML = bozorlik.join("<br>");
                elProductIndex.value = '';
                elProductIndex.focus();
            }else{
                alert("Bundey mahsulot royxatda bor");
            }
    
        }else{
            alert("Mahsulot id topilmadi");
        }
    }
})

