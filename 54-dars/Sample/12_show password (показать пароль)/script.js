window.addEventListener('load',function(){
    let input = this.document.querySelector('input');
    let link = this.document.querySelector('.btn');

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