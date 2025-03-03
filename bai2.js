let mathMark = parseFloat(prompt("điểm môn toán: "));
let vietMark = parseFloat(prompt("điểm môn văn: "));
let engMark = parseFloat(prompt("điểm môn anh: "));
let avg = (mathMark + vietMark + engMark) / 3;
if (avg >= 8.0){
    alert("Excellent");
}
else if (avg >= 6.5 && avg < 8.0){
    alert("Giỏi");
}
else if (avg >=5.0 && avg < 6.5){
    alert("khá");
}
else if ( avg > 0 && avg < 5.0){
    alert("trung bình");
}