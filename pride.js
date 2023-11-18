


var change = document.getElementById("bolt");

function changePage() {
    change.textContent = "Uploading...";
 setTimeout(function() {
 window.location="app.html";    
    }, 10000);}


change.addEventListener('click', changePage);
