window.addEventListener('load', function(){
    let div = this.document.querySelectorAll('.text');
    console.log(div);

    for(let i = 0; i<= div.length;i++){
        div[i].addEventListener('click', function(){
            let color = this.getAttribute('data-color');
            console.log(color);
            div[i].style.background = color;
        })
    }
})