const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  //console.log(__dirname);
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.get('/leadersboard', (req, res) => {
  res.sendFile(__dirname + '/public/leadersboard.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.get('/logout', (req, res) => {
  res.sendFile(__dirname + '/public/logout.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})
const pathName = __dirname + '/public';


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});