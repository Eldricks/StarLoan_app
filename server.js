


var change = document.getElementById("fod");

function changePage() {
    change.textContent = "Uploading...";
 setTimeout(function() {
 window.location="bank.html";    
    }, 9000);}


change.addEventListener('click', changePage);
