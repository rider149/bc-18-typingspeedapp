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

  username = user.displayName;
  localStorage.setItem("username", username);


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
 
 var username = localStorage.getItem("username");

 //function to retrieve User details
   $("#logout").on("click", function(){
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
          // console.log("signout");
          window.location.href = "/logout.html";
        }, function(error) {
          // An error happened.
        });
    })

function holdValues(totalTime,error,Gspd){
	//Uploads the values to firebase	
  	var database = firebase.database();
  	firebase.database().ref('User/' + username).set({
  	"displayname": username,
    
  	// "profilePic": profilePic,	
    "time": totalTime,
    "mistake": error,
    "wpm": Gspd
  });
}



<!-- Begin
msg = new Array("Mr. Edward Anthony Gomez, the lawyer to embattled President Yaya Jammeh of Gambia, has fled to Senegal and advised his client to step aside and respect the wishes of Gambian people as expressed in the presidential election results. Mr. Gomez said the decision to flee to Senegal along with his son was because of the increasing tension in Gambia and in the interest of peace and stability.The lawyer announced the development in a letter dated 17 January, which he personally signed. He said he escaped a round-the-clock security watch around his house to flee to neighboring Senegal, where he said he has now found some inner peace after being coerced to be part of President Jammeh’s plot to cling to power.",
"Marketers under the aegis of Depot and Petroleum Products Marketers Association (DAPPMA) said that the N660 billion debt owed to them by the Federal Government for products already imported, coupled with interest on bank loans, had been their major hindrance to petroleum importation.According to the Executive Secretary, Mr Olufemi Adewole, most marketers had stopped importing fuel due to government’s refusal to pay outstanding debt owed.The inability to pay or service the loans has not only stalled further importation of fuel but is threatening the operation of the affected banks and the nation’s financial industry at large.",
"Reuters reports that the Senegalese army will enter The Gambia if Mr. Jammeh does not step down by midnight, local time. Colonel Abdou Ndiaye, spokesperson for the Senegalese army, confirmed this to the news agency on Wednesday.We are ready and are awaiting the deadline at midnight. If no political solution is found, we will step in, Mr. Ndiaye told Reuters.In preparation for potential military intervention, Nigeria deployed a warship to the Gambian coast on Tuesday and is willing to contribute 200 troops to the ECOWAS regional force.",
"The Commissioner of Police (CP) in Lagos State, Fatai Owoseni, will be leaving his position days after he was accused of being part of a plot to harm the publisher of SaharaReporters, Omoyele Sowore.Police authorities have decided to send the CP to the National Institute of Policy and Strategic Studies (NIPSS). A police source disclosed that Mr. Owoseni’s conduct in the case involving Mr. Sowore hastened his redeployment.According to our source, the Oba of Lagos, Rilwan Akiolu, had reportedly obstructed the redeployment of the CP from Lagos until the recent incident. Oba Akiolu is a retired police officer.")

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


function startTypingTest() {
//Gets the time at the start of the app
//Provides the user with a random text	
randNum = Math.floor((Math.random() * 10)) % 4;
msgType = msg[randNum];
word = msgType.split(/\s+/);
day = new Date();
startTime = day.getTime();
document.theForm.given.value = msgType
document.theForm.typed.focus();
document.theForm.typed.select();
}

function preventCopyAndPaste() {
	// Prevents the user from copy and paste
alertify.alert("<h3>Trying to Cheat!</h3></br><p><h4>You cannot copy and paste. You must type the words yourself</h4></p>");
document.theForm.typed.focus();
}

function stopTypingTest() { 
// Performs the basic calculations for words per minute, time taken and mistakes made 
dayTwo = new Date();
endTime = dayTwo.getTime();
userwords = document.theForm.typed.value;
words = userwords.split(/\s+/);
error = findMissing(words,word);
totalTime = ((endTime - startTime) / 1000);
Gspd = Math.round((word.length/totalTime) * 60);
Nspd = Gspd-error;
var accuracy = (Nspd/Gspd)*100;

holdValues(totalTime,error,Gspd);
alertify.alert("<p style=\"text-align:center\"><h3>HERE ARE YOUR RESULTS:</br></br></h3>"+"<table class=\"table table-striped\"><tr><td>Time spent:</td><td>"+Math.round(totalTime)+"\t"+"seconds</td></tr>"+"<tr><td>Speed:</td><td>"+Gspd+"\t"+"words per minute</td></tr>"+"<tr><td>Mistake(s):</td><td>"+error+"\t"+"mistakes</td></tr></table>");
}


