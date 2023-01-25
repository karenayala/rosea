

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

function login(){
alert(document.getElementById('email').value);
auth.signInWithEmailAndPassword(document.getElementById('email'), document.getElementById('pass'))
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
	alert("Login exitoso!!!");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
	alert("fallo!!!--"+ errorMessage);
  });
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

