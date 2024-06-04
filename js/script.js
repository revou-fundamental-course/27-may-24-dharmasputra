// This is where interactivity being set up
// Get username and insert into paragraph text in Home section
function getName() {
    let name = prompt("What is your name?", "");
    document.getElementById("username").innerHTML = name
}

getName();

// document.getElementById("change-name-button").addEventListener("click", function() {
//     getName();
// })

// let nameInput = document.getElementById("name-input")

// document.getElementById("submit-button").addEventListener("click", function() {
//     const name = nameInput.value

//     if(name == ""){
//         document.getElementById("error-name").innerHTML = "Name cannot be empty!"
//     }else{
//         document.getElementById("username").innerHTML = name
//     }
// })

function ValidateForm(){
    const name = document.forms["message-form"]["name-input"].value;
    const birthdate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthdate == "" || gender == "" || messages == ""){
        return false;
    }

    SetSenderDataUI(name, birthdate, gender, messages);

    return false;
}

function SetSenderDataUI(name, birthdate, gender, message){
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthdate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = message;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("slideshow");

    if (n > imgList.length){
        slideIndex = 1;
    }else if (n < 1) {
        slideIndex = imgList.length;
    }

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 3000)