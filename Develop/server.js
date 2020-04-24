
// Dependencies 
const express = require('express');

// Sets express as the app variable and gives it a port
const app = express();
const PORT = process.env.PORT || 8080;

// Data Parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Route pathways 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
app.use(express.static("public"));

// listening 
app.listen(PORT, function(){
    console.log(`This app is listening to ${PORT}`)
});