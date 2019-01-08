// Load the NPM Package inquirer
var inquirer = require("inquirer");
var mysql = require("mysql");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    {
      type: "list",
      message: "Which opponent do you choose?",
      choices: ["rat", "goblin", "troll"],
      name: "opponent"
    },
   {
      type: "list",
      message: "Which stat would you like to check?",
      choices: ["health", "strength"],
      name: "stat"
    }
  ])
  .then(function(inquirerResponse) {

  var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "esg_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//*******************

 // connection.query("SELECT '" + inquirerResponse.stat + "' FROM opponents WHERE name='" 
 //  + inquirerResponse.opponent + "'" , function(err, result) {

 //    // We then begin building out HTML elements for the page.
 //    console.log(result);
    
 //     console.log("The " + inquirerResponse.opponent + "'s " + inquirerResponse.stat
 // + " is " + 
 //    result);
 //  });

connection.query("SELECT * FROM opponents", function(err, result) {

    // We then begin building out HTML elements for the page.
    console.log(result[0][inquirerResponse.stat]);
  });
//this version works, so its not a problem with the connection


    //answer/result comes back undefined
   })