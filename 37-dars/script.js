// yoki operatori

// 0 (false) 0 (false) = 0 (false)
// 1 (true) 0 (false) = 1 (true)
// 0 (false) 1 (true) = 1 (true)
// 1 (true) 1 (true) = 1 (true)

// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let c = +prompt("uchinchi sonni kiriting");
// let res;
// if (isNaN(a) || isNaN(b) || isNaN(b)) {
//   res = "harf emas faqat son kiriting";

// } else if (a > b && a > c) {
//   res = a + "Bu eng katta raqam";

// } else if (b > a && b > c) {
//   res = a + "Bu eng katta raqam";
  
// } else {
//   res = a + "Bu eng katta raqam";
// }
// alert(res);

let month = +prompt('oyni kiriting');
let res;
if(month == 12 || month == 1 || month == 2){
    res = 'Qish'
}
else if(month >=3 && month <=5){
    res = 'Bahor'
}
else if(month >=6 && month <=8){
    res = 'Yoz'
}
else if(month >=9 && month <=11){
    res = 'Kuz'
}
else{
    res = 'Bunaqa fasl yoq'
}
alert(res);
