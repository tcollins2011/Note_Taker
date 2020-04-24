// path dependency to allow targeting of html in other files 
const path = require('path');

// allows these functions to be used by other files
module.exports = function (app){

    // Switches the html to the notes html
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    })

    // Default case returns index html
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
}