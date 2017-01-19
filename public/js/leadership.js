var config = {
	    apiKey: "AIzaSyAn1Qa-y3eEEf0oVCz-Srtx3a9EDxyN6ow",
	    authDomain: "bc-18-typingspeedapp.firebaseapp.com",
	    databaseURL: "https://bc-18-typingspeedapp.firebaseio.com",
	    storageBucket: "bc-18-typingspeedapp.appspot.com",
	    messagingSenderId: "140024497891"
	  };
	  firebase.initializeApp(config);

localStorage.setItem("username", username);
var username = localStorage.getItem("username");

 //function to retrieve User details
    firebase.database().ref('/User/').once('value').then(function(snapshot){
        var userDetails = snapshot.val();
      console.log(userDetails);
        //getUsername(userDetails.name);
        //setPicture(userDetails.profile_picture)
    })