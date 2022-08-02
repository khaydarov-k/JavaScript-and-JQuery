// uyga vazifa
let num1 = +prompt("son kiriting");
let pov = prompt("operatsiyani kiriting");
let num2 = +prompt("son kiriting");

switch (pov) {
  case "*":
    alert(num1 * num2);
    break;
  case "/":
    alert(num1 / num2);
    break;
  case "+":
    alert(num1 + num2);
    break;
  case "-":
    alert(num1 - num2);
    break;
  default:
      alert("XATO");
    break;
}
