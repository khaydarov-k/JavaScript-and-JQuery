window.onload = function(){
    let div = document.querySelectorAll('.text');
    console.log(div);
    // div[0].addEventListener('click',function(){
    //     this.style.color = 'red';
    // });
    // div[1].addEventListener('click',function(){
    //     this.style.color = 'green';
    // });
    // div[2].addEventListener('click',function(){
    //     this.style.color = 'blue';
    // });
    // div[3].addEventListener('click',function(){
    //     this.style.color = 'yellow';
    // });
    let color = ['black', 'white', 'blue', 'yellow'];
    
    for( let i = 0; i <= div.length; i++){
        div[i].addEventListener('click',function(){
            var rand = Math.floor(Math.random() * color.length);
                this.style.background = color[rand];
            });
    }
}




