let x = parseFloat(prompt("Enter random year: "));

if (x % 4 == 0 && x % 100 != 0 || x % 100 == 0 && x % 400 == 0){
    alert(x + " is a leap year");
}
else{
    alert(x + " is not a leap year");
}