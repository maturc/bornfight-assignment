var express = require('express')
var path = require('path');
var app = express()
const port = process.env.port || 3000;
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.get("/albums/", function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.get("/artist/:id", function (req, res) {
  res.sendFile(path.join(__dirname + '/public/artist.html'));
});

app.listen(port, err => {
  if(err) {
    return console.log("ERROR", err);
  }
  console.log(`Listening on port ${port}`);
})