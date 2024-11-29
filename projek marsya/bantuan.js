var dialog = document.querySelector("dialog");

document.querySelector("#open-popup").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
       dialog.showModal();
    } 
});

document.querySelector(".IYA-btn").addEventListener("click", function() {
    dialog.close();
});

document.querySelector("#acucu-btn").addEventListener("click", function() {
    dialog.close();
});