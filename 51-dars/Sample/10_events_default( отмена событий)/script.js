window.addEventListener('load',function(){
    var img = this.document.querySelectorAll('img');
    var link = this.document.querySelectorAll('a');

    for(let i =0; i < img.length;i++){
        img[i].addEventListener('contextmenu', function(e){
            e.preventDefault();
        });
        img[i].addEventListener('mousedown', function(e){
            e.preventDefault();
        })
    };

    for(let i =0; i < link.length; i++){
        link[i].onclick = function(){
            if(confirm('Otishni holayszmi')){
                return true;
            }else{
                return false;
            }
        }
    }
})
