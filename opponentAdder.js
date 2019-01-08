var inquirer = require("inquirer");
var mysql = require("mysql");
// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is their name?",
      name: "opName"
    },
    {
      type: "input",
      message: "What is their picture file?",
      name: "pic"
    },
{
      type: "input",
      message: "What their strength?",
      name: "strength"
    },
{
      type: "input",
      message: "What is their health?",
      name: "health"
    },

    
  ])
  .then(function(inquirerResponse) {

  var name = inquirerResponse.opName;  
  var pic = inquirerResponse.pic;  
  var strength = inquirerResponse.strength;
  var health = inquirerResponse.health;



  if (isNaN(strength) == true || isNaN(health) == true)
  {
    console.log("Inappropriate values")
  }
  else
  {
    console.log("Uploading")

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


// connection.query("INSERT INTO opponents (name, pic, strength, health) VALUES (" + name + ", " + pic + ", " 
//   + strength + ", " + health + ")", 
//   function(err, result) {

//     console.log(err);

//   });

connection.query("INSERT INTO opponents (name, pic, strength, health) VALUES ('" + name + "', '" + pic + "', '" + strength + "', '" + health + "')", 
  function(err, result) {

    console.log(err);

  });

}


  });