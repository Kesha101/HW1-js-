function checkData(data) {

    let regexString = new RegExp('^[a-zA-z]+$');
    let regexNumber = new RegExp('^[0-9]+$');

    if(data.match(regexString)) 
    {
        return "String"; 
    }
    else if (data.match(regexNumber))
    {
        return "Number";
    }
    else 
    {
        return false;
    }
}


let userName = prompt("Enter your name:", "Name");

while (!(checkData(userName) == "String")) 
{
    userName = prompt("Enter your name:", "Name");
}

let userAge = prompt("Enter your age:", 18);

while (!(checkData(userAge) == "Number")) 
{
    userAge = prompt("Enter your age:", 18);
}

if (userAge < 18) {
    console.log("You are not allowed to visit this website");
}
else if (userAge >= 18 && userAge <= 22) {
    let userChoose = confirm("Are you sure you want to continue?");

    if (userChoose == true) {
        console.log("Welcome " + userName);
    }
    else {
        console.log("You are not allowed to visit this website");
    }
}
else {
    console.log("Welcome " + userName);
}