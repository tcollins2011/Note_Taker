const path = require('path');

// allows these functions to be used by other files
module.exports = function (app){

    // Switches the html to the notes html when /notes is called
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    })

    // Default case returns index html for everything else
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
}