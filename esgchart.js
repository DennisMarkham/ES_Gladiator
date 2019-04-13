var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Specify the port.
var port = process.env.PORT || 3000;

// MySQL DB Connection Information (remember to change this with our specific credentials)

if (process.env.JAWSDB_URL){
connection = mySQL.createConnection(process.env.JAWSDB_URL);
}
else {
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "esg_db"
});
}

connection.connect();
module.exports = connection();
// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
app.get("/", function(req, res) {
var allRows = "";
  connection.query("SELECT * FROM opponents", function(err, result) {

   

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      console.log(result[i].name);
      newRow = "<tr><td>" + result[i].name + "</td><td>" + result[i].pic + "</td><td>" + result[i].strength + "</td><td>" + result[i].health + "</td></tr>";
      allRows += newRow;
    }

   res.send("<head> <style>td {border-style: solid}</style> </head><body> <html><h1> Elder Scrolls Chart </h1> <table style='width:100%; border-style:solid;'><tr><th>Name</th><th>Pic</th><th>Health</th><th>Strength</th></tr>" + allRows + "</table></html></body>")
  });

// res.send("<h1> Elder Scrolls Chart </h1> <table style='width:100%'><tr><th>Name</th><th>Pic</th><th>Health</th><th>Strength</th></tr>" + allRows + "</table>")
});

// Initiate the listener.
app.listen(port, function() {
  console.log("Listening on port:%s", port);
});