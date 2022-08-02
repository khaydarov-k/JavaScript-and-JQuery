window.addEventListener('load',function(){
    var input = this.document.querySelector('input');
    var link = this.document.querySelector('.btn');

    console.log(link);
    console.log(input);

    link.addEventListener('click', function(){
        if(input.getAttribute('type') == 'password'){
            input.setAttribute('type','text');
        }else{
            input.setAttribute('type','password');
        }
    })
})