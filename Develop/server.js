
// Dependencies 
const express = require('express');
const path = require('path')

// Sets express as the app variable and gives it a port that allows it to function with heroku
const app = express();
const PORT = process.env.PORT || 8080;

// Data Parsing and middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

// Route pathways 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// listening and sets up the server
app.listen(PORT, function(){
    console.log(`This app is listening to ${PORT}`)
});