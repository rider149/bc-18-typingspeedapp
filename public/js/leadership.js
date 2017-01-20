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
    {
        var userDetails = snapshot.val();
      
        for(var customer of userDetails) {
  var tdFN = document.createElement('TD');
  tdFN.innerHTML = customer.profilePic;
  
  var tdLN = document.createElement('TD');
  tdLN.innerHTML = customer.displayname;

  var tdLN = document.createElement('TD');
  tdLN.innerHTML = customer.time;

  var tdLN = document.createElement('TD');
  tdLN.innerHTML = customer.wpm;

  var tdLN = document.createElement('TD');
  tdLN.innerHTML = customer.mistake;
  
  var tr = document.createElement('TR');
  tr.appendChild(tdFN);
  tr.appendChild(tdLN);
  
  document.querySelector('table.table.table-striped tbody').appendChild(tr);
}
    });

