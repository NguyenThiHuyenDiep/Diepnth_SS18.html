let x = parseFloat(prompt("Nhập một năm bất kì: "));

if (x % 4 == 0 && x % 100 != 0 || x % 100 == 0 && x % 400 == 0){
    alert(x + " là năm nhuận");
}
else{
    alert(x + " Không phải năm nhuận");
}