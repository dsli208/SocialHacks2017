(function(){

	 // Initialize Firebase
	const config = {
	    apiKey: "AIzaSyAG2uIVe9hgaJasfov6E_pmMJ1wMqb-gg0",
	    authDomain: "social-hack-db-d42e3.firebaseapp.com",
	    databaseURL: "https://social-hack-db-d42e3.firebaseio.com",
	    storageBucket: "social-hack-db-d42e3.appspot.com",
	    messagingSenderId: "477070119675"
	 };
	firebase.initializeApp(config);
}());


//Get all information
//Registration
const regFirstname = document.getElementById('registerFirstName');
const regLastName= document.getElementById('registerLastName');
const regEmail = document.getElementById('registerEmail');
const regPassWord = document.getElementById('registerPassword');
const regButton = document.getElementById('doRegister');

//Login

const loginEmail = document.getElementById('loginEmail');
const loginPassWord = document.getElementById('loginPassword');
const loginButton = document.getElementById('doLogin');


loginButton.addEventListener('click', e=>{
	var email = loginEmail.value;
	var password = loginPassword.value;
	const auth = firebase.auth();

	const promise = auth.signInWithEmailAndPassword(email,password);

	promise.catch(e=>console.log(e.message));


});

