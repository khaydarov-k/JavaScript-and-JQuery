window.addEventListener('load',function(){
    var input = this.document.querySelector('input');
    var link =this.document.querySelectorAll('.list-group-item a');
    console.log(link);
    input.addEventListener('input', function(){
        var filter = input.value.toLowerCase();

        for(let i =0; i< link.length; i++){
            var city = link[i].innerHTML;
            city = city.toLowerCase();

            if(city.indexOf(filter) == -1){
                link[i].classList.add('hide');
            }else{
                link[i].classList.remove('hide');
            }
        }
        
    })
})