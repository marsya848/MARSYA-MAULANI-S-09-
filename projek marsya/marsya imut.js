var dialog = document.getElementById("confirmation-dialog");

document.querySelector("#open-popup").onclick = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username && password) {
        dialog.showModal(); 
    } 
};

document.querySelector(".IYA-btn").onclick = function() {
    dialog.close(); 
    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value; 


    if (username === "marsya" && password === "111") {
        window.location.href = 'halaman berikutnya.html'; 
    } 
    else {
        alert("akun tidak ditemukan");
    }
};

document.querySelector("#acucu-btn").onclick = function()  {
    dialog.close(); 
    alert("anda tidak login"); 
};
