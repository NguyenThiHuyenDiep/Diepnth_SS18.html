let exp = parseInt(prompt("Enter year experiences: "));
if (exp < 1){
    alert("Fresher");
}
else if (exp >=1 && exp <= 3){
    alert("Juniour");
}
else if (exp >= 4 && exp <= 6){
    alert("Seniour");
}
else{
    alert("PM");
}