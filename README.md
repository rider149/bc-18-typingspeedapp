Typing Speed App

Build Status Coverage Status Code Issues
Introduction

    Typing Speed App is a Node.js Powered Typing Speed App.
    It has the following features;
        Login via Gmail
        Generates random text for user to type
        Measures how fast a user types by words per minute
        Displays the number of errors the user made
        Displays the time taken to type the given text 
    Click here to access the app on Heroku

Dependencies
Back End Dependencies

    This app's functionality depends on multiple Node packages including;
        Express.js - This framework helps in the creation of object relational models and it also handles routing on the back end.
        Firebase - This is used for data storage and the necesssary CRUD operations.
        Firebase-auth - This package provides a social authentication/ registration mechanism and has support for various auth providers, including Facebook, Twitter, Dropbox, Github among others. For this app, it was used to intergrate Gmail authentication.
        Nodemon - This package provides automatic reload of the server during development stage. 
Front End Dependencies

    Bootstrap - The app's styling and responsive handling was implemented with twitter's Bootstrap.
    Javascript - 
    Alertify plugin - This plugin is used to handle the pop ups.
Installation and setup

    Navigate to a directory of choice on terminal.

    Clone this repository on that directory.

        Using SSH;

            git clone git@github.com:rider149/bc-18-typingspeedapp.git

        Using HTTP;

            https://github.com/rider149/bc-18-typingspeedapp.git

    Navigate to the repo's folder on your computer
        cd bc-18-typingspeedapp/
    Install the app's backend dependencies. For best results, I included all the necessary dependencies in the node_module folder.
     You don't need to install the packages for the app to run.   

    
    Run the app
        nodemon server.js
        Running the command above will produce output that's similar to the sample below.

      [nodemon] 1.11.0
      [nodemon] to restart at any time, enter `rs`
      [nodemon] watching: *.*
      [nodemon] starting `node server.js`
      Node app is running on port 5000



