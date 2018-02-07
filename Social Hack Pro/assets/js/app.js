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


	//Login
	const loginEmail = document.getElementById('login_username');
	const loginPassWord = document.getElementById('login_password');
	const loginButton = document.getElementById('login');


	//Lost Account
	const lostEmail = document.getElementById('lost_email');
	const lostButton = document.getElementById('lost');


	//Register Account
	const registerUsername = document.getElementById('register_username');
	const registerEmail = document.getElementById('register_email');
	var registerPassword = document.getElementById('register_password');
	var registerPassword2 = document.getElementById('register_password2');
	var firstName= document.getElementById('register_fname');
	var lastName= document.getElementById('register_lname');
	var age= document.getElementById('register_age');
	const registerButton = document.getElementById('register');
	


	loginButton.addEventListener('click', e=>{
		var email = loginEmail.value;
		var password = loginPassWord.value;
		const auth = firebase.auth();
		console.log(email,password)

		const promise = auth.signInWithEmailAndPassword(email,password);

		promise.catch(e=>console.log(e.message));
		alert('yaaay')

	});

	registerButton.addEventListener('click', e=>{
		var email = registerEmail.value;
		var password = registerPassword.value;
		const auth = firebase.auth();
		console.log(email,password)
		var promise;
		
		auth.createUserWithEmailAndPassword(email,password)
			    .catch(function(error) {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  if (errorCode == 'auth/weak-password') {
				    alert('The password is too weak.');
				  } else {
				    alert(errorMessage);
				  }
				  console.log(error);
				});


		var user = firebase.auth().currentUser;
		//promise.catch(e=>console.log(e.message));
		//alert(e.message);
		if (user) {
			  // User is signed in.
			  console.log(user);
			  writeUserData(user.uid,firstName.value,lastName.value,age.value,email,registerUsername);
			  //window.location.href = 'index.html';
			}	

		
	});

	 lostButton.addEventListener('click',e=>{
		firebase.auth().signOut();
		console.log(firebase.auth().currentUser);
	 });

	//Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if(firebaseUser){
			console.log('already is logged in');
			 window.location.href = 'index.html';
		}
		else{
			console.log('not logged in');
			// window.location.href = 'index.html';
			window.location.href = 'login.html';		

		}
	});


	function writeUserData(userId, fname, lname, age, email,username) {
	  firebase.database().ref('users/' + userId).set({
	    firstname: fname,
	    lastname: lname,
	    email: email,
	    age:age,
	    username: username
	  });
	}

}());

//Check to update user profile
	

