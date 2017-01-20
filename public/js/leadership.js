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
    firebase.database().ref('/User/').once('value', (snapshot) => {
        var userDetails = snapshot.val();
      console.log(userDetails);
        //getUsername(userDetails.name);
        //setPicture(userDetails.profile_picture)

        for(customer in userDetails) {
        	console.log(customer);
        	console.log(userDetails[customer])
        	// for(details in userDetails[customer]) {
     //    		var tdFN = document.createElement('TD');
			  // tdFN.innerHTML = userDetails[customer]['profilePic'];
			  
			  var tdLN = document.createElement('TD');
			  tdLN.innerHTML = userDetails[customer]['displayname'];

			  var tdT = document.createElement('TD');
			  tdT.innerHTML = userDetails[customer]['time'];

			  var tdW = document.createElement('TD');
			  tdW.innerHTML = userDetails[customer]['wpm']

			  var tdM = document.createElement('TD');
			  tdM.innerHTML = userDetails[customer]['mistake'];
			  
			  var tr = document.createElement('TR');
			  // tr.appendChild(tdFN);
			  tr.appendChild(tdLN);
			  tr.appendChild(tdT);
			  tr.appendChild(tdW);
			  tr.appendChild(tdM);

			  
			  document.querySelector('table.table.table-striped tbody').appendChild(tr);


        	 // }
        }
 
    });

