let sign = prompt("Enter user name: ");
if(!sign){
    alert("I Don't know you");
}
else if (sign = "ADMIN"){
    let pass = prompt("Enter pass: ");
    if (pass = "TheMaster") {
        alert("Welcome");
    }
    else if (pass) {
        alert("Cancelled");
    }
    else{
        alert("Wrong password");
    }
}

