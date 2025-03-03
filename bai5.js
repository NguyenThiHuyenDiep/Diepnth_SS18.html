let exp = parseInt(prompt("Nhập số năm"));
if (exp < 1){
    alert("Nhân viên mới");
}
else if (exp >=1 && exp <= 3){
    alert("Nv có kinh nghiệm");
}
else if (exp >= 4 && exp <= 6){
    alert("Chuyên viên");
}
else{
    alert("Quản lí");
}