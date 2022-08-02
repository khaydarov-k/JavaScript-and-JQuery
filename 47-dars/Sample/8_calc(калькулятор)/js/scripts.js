window.addEventListener('load', function () {
    var num1 = this.document.querySelector('input[name=num1]');
    var num2 = this.document.querySelector('input[name=num2]');
    var select = this.document.querySelector('select');
    var btn = this.document.querySelector('.btn');
    var res = this.document.querySelector('.res');

    btn.addEventListener('click', function () {
        var inp1 = +num1.value;
        var inp2 = +num2.value;
        var answer = '';

        switch (select.value) {
            case 'sum':
                answer = inp1 + inp2;
                break;
            case 'sub':
                answer = inp1 - inp2;
                break;
            case 'mul':
                answer = inp1 * inp2;
                break;
            case 'div':
                answer = inp1 / inp2;
                break;


            default:
                break;
        }
        res.innerHTML = answer;


    })

    // console.log(num1);
    // console.log(num2);
    // console.log(res);
    // console.log(select);
    // console.log(btn);
})