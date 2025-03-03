let a = parseFloat(prompt("Enter a: "));
let b = parseFloat(prompt("Enter b: "));
let operation = prompt("Enter operation (+, -, *, /): ");
let ans;
switch (operation){
    case "+":
        ans = a + b; 
        break;
    case "-":
        ans = a - b;
        break;
    case "*":
        ans = a * b;
        break;
    case "/":
        ans = a / b;
        if (b !== 0) {
            ans = a / b;
        } else {
           ans = "Can't / 0";
        }
        break;
    default:
        ans = "Invalid operation";
        break;
       
}

alert(ans);