var totalTime;
var error;
var Gspd;

var username;
var profilePic;
var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;

  username = user.displayName
  profilePic = user.photoURL 
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});



function holdValues(totalTime,error,Gspd){
	//Uploads the values to firebase	
  	var database = firebase.database();
  	firebase.database().ref('User/' + username).set({
  	"displayname": username,
  	"profilePic": profilePic,	
    "time": totalTime,
    "mistake": error,
    "wpm ": Gspd
  });
}



<!-- Begin
msg = new Array("Practicing with your typing can greatly help your overall computer skills.",
"A new computer is sold in the US every hour!",
"When do birds migrate from North to South?",
"Perplexing phrases, like this one, are tougher to type.")

function findMissing(arr1,arr2){
   //Compares the typed words with the provided texts and gets the number of mistakes recorded. 
    var count = 0;

    for (var i=0; i<arr2.length; i++){
    var exists=false;
        for (var j=0; j<arr1.length; j++){
            if (arr2[i]==arr1[j]){
                exists=true;
                
            }
        }
        if (exists==false ){ 
            count++;
        }
   }
return count;
    
}


function beginIt() {
//Gets the time at the start of the app
//Provides the user with a random text	
randNum = Math.floor((Math.random() * 10)) % 4;
msgType = msg[randNum];
word=msgType.split(/\s+/);
day = new Date();
startType = day.getTime();
document.theForm.given.value = msgType
document.theForm.typed.focus();
document.theForm.typed.select();
}

function cheat() {
	// Prevents the user from copy and paste
alert("You can not change that!");
document.theForm.typed.focus();
}

function stopIt() { 
// Performs the basic calculations for words per minute, time taken and mistakes made 
dayTwo = new Date();
endType = dayTwo.getTime();
userwords= document.theForm.typed.value;
words2=userwords.split(/\s+/);
error=findMissing(words2,word);
totalTime = ((endType - startType) / 1000);
Gspd = Math.round((word.length/totalTime) * 60);
Nspd=Gspd-error;
var accuracy= (Nspd/Gspd)*100;

holdValues(totalTime,error,Gspd);
alert("HERE ARE YOUR RESULTS:"+"\n\n"+"Time spent:"+totalTime+"\n\n"+"Speed:"+Gspd+"\n\n"+"Mistake:"+error+"\n\n");
}


