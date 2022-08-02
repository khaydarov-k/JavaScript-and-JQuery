alert(1);
window.onload =function(){
    let div = document.querySelector('.text');
    alert(2);
    console.log(div);
    div.onclick = function(){
        div.style.background = 'red';
    }
}
alert(3);