//Install express server
const express = require('express');
const path = require('path');
var str1 = "Hello";
try {
  const fs = require('fs');

  str1 += path.join('./') + fs.existsSync(path.join('./');

} catch (e) {
    str1 += "Error1: " + e;
}
// fs.readdir(path.join('./'), (err, files) => {
//   if (err) str1 += "<br>Erro: " + err + "</br>";
//   try {
//     files.forEach(file => {
//       str1 += file + "</br>");
//       console.log(file);
//     });
//   } catch(e) {
//     str1 += "</br>Error2: " + e + "</br>";
//   }

// })

const app = express();

// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist/angular-app'));

app.get('/*', function(req,res) {
  
res.send('string</br>' + str1);
//res.sendFile(path.join(__dirname+'/dist/angular-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
