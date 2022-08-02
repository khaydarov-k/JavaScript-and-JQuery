window.onload = function(){
    let div = document.querySelector('.text');
    console.log(div);
    div.addEventListener('click', function(){
        console.log(this);
    })
    var hz = {
        some: function(){
            console.log(this);
        }
    }
    hz.some();
    
}
