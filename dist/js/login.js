// Initialize Firebase
var config = {
    apiKey: "AIzaSyCiD85kKTnN6iVeP7nbsqBueKZqlK26bPk",
    authDomain: "artesanapp-1301.firebaseapp.com",
    databaseURL: "https://artesanapp-1301.firebaseio.com",
    projectId: "artesanapp-1301",
    storageBucket: "artesanapp-1301.appspot.com",
    messagingSenderId: "445449509107"
};
firebase.initializeApp(config);

function login(provider){
	firebase.auth().signInWithPopup(provider).then(function(result) {

		var token = result.credential.accessToken;
		var user = result.user;
		localStorage.setItem("email", user.email);
		localStorage.setItem("name", user.displayName);
		console.log('user',user);

		console.log(+localStorage.getItem("email"))
	}).then(function(result){
		location.href = "static/views/piezas.html"
	}).catch(function(error) {
		var errorMessage = error.message;
		console.log('error',errorMessage)
	});
};
function ingresarGoogle (){
	var provider = new firebase.auth.GoogleAuthProvider();
	login(provider);
}

function ingresarFacebook (){
	var provider = new firebase.auth.FacebookAuthProvider();
	login(provider);
};

var facebook = document.querySelector("#login-facebook");
var gmail = document.querySelector('#login-gmail');

facebook.addEventListener('click', ingresarFacebook);
gmail.addEventListener('click', ingresarGoogle);
