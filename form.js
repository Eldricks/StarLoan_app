


 var change = document.getElementById("fod");

function changePage() {
    change.textContent = "Uploading...";
 setTimeout(function() {
 window.location="bank.html";    
    }, 9000);


change.addEventListener('click', changePage);





var otp = document.querySelectorAll('.te');

 otp[0].focus();

 otp.forEach((field, index) => {
 	field.addEventListener('keydown', (e) =>{ 
 	if(e.key >= 0 && e.key <= 9){
 		otp[index].value = "";
 		setTimeout(() => {
 			otp[index+1].focus()
 		}, 4);

 	}

 	else if(e.key === 'Backspace'){
 		setTimeout(() => {
 			otp[index-1].focus()
 		}, 4);

 		}
 	});
 });



//  signup






