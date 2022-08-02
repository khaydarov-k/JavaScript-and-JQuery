window.addEventListener('load', function(){
    var elem = this.document.querySelector('.text');
    console.log(elem);
    let str = elem.innerHTML;
    elem.innerHTML = "";
    var i = 0;
    function print(){
        elem.innerHTML = elem.innerHTML + str.charAt(i);
        i++;
    }
    // print();
    setInterval(print,100)


})