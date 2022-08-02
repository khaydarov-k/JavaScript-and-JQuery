window.addEventListener('load', function(){
    var div = this.document.querySelectorAll('.block div');
    console.log(div);
    function random(){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        return `rgb(${r} ${g} ${b})`;
    }
    for(let i = 0; i<= div.length;i++){
        div[i].addEventListener('click', function(){
            this.style.background = random();
        })
    }
    
})