let mathMark = parseFloat(prompt("Enter math mark: "));
let vietMark = parseFloat(prompt("Enter vnm mark: "));
let engMark = parseFloat(prompt("Enter english mark: "));
let avg = (mathMark + vietMark + engMark) / 3;
if (avg >= 8.0){
    alert("Excellent");
}
else if (avg >= 6.5 && avg < 8.0){
    alert("Good");
}
else if (avg >=5.0 && avg < 6.5){
    alert("average");
}
else if ( avg > 0 && avg < 5.0){
    alert("weak");
}