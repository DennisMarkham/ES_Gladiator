// var express = require("express");
// var mysql = require("mysql");
// var bodyParser = require("body-parser");
// var path = require("path");
// var http = require("http");
// var fs = require("fs");

// // Create express app instance.
// var app = express();

// // Specify the port.
// var port = 3000;

// // MySQL DB Connection Information (remember to change this with our specific credentials)
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "esg_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
// //*******************

//  connection.query("SELECT * FROM opponents", function(err, result) {

//     // We then begin building out HTML elements for the page.
//     console.log(result)
//   });

//  //********************

// //  app.get("/", function(req, res) {
// //   // res.send("Welcome to the Star Wars Page!")
// //   res.sendFile(path.join(__dirname, "ESG.html"));
// // });

// function getOpponents()
// {
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "esg_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
// //*******************

//  connection.query("SELECT * FROM opponents", function(err, result) {

//     // We then begin building out HTML elements for the page.
//     console.log(result); 
//   });


// }

// var server = http.createServer(handleRequest);

// // Create a function for handling the requests and responses coming into our server
// function handleRequest(req, res) {

//   // Here we use the fs package to read our index.html file
//   fs.readFile(__dirname + "/ESG.html", function(err, data) {

//     // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//     // an html file.
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data);
//   });
// }

// // Starts our server
// server.listen(port, function() {
//   console.log("Server is listening on PORT: " + port);
// });

//******************

function Character(name, pic, strength, health) {
  this.name = name;
  this.pic = pic;
  this.strength = strength;
  this.health = health;
  };

var player = new Character("you", "orc.png", 50, 100);
var enemy = new Character("rat", "rat.png", 10, 20);

function attack(){
  console.log("Enemy health: " + enemy.health);
  console.log("Player strength: " + player.strength);
  enemy.health -= player.strength;
  console.log(player.name + " attacks");
  console.log("Enemy health: " + enemy.health);

  if (enemy.health < 1)
{
  console.log(enemy.name + " dead!")
  $("#enemy_x").css("z-index", "1");
}

}



if (player.health < 1)
{
  console.log(player.name + " dead!")
}