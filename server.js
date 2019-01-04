//Install express server
const express = require('express');
const path = require('path');
const fs = require('fs');

var str1 = "Hello";
fs.readdir(path.join('./'), (err, files) => {
  files.forEach(file => {
    str1 += file + "</br>");
    console.log(file);
  });
})

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular-app'));

app.get('/*', function(req,res) {
  
res.send('string</br>' + str1);
//res.sendFile(path.join(__dirname+'/dist/angular-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
