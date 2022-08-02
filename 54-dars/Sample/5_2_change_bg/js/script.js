window.addEventListener('load',function(){
    let nav = this.document.querySelector('.navbar');
    let btn = this.document.querySelectorAll('button');
    console.log(btn);
    console.log(nav);

    for(let i = 0;i<= btn.length;i++){
        btn[i].addEventListener('click',function(){
            let colors = this.getAttribute('data-color');
            nav.style.background = colors
           
        })
    }
})