
// Variables to access our stored json

const notes = require("../db/db.json")
const fs = require("fs")
const uuid = require("uuid/v4")
const util = require('util')

// allow these functions to be used by other files

module.exports = function(app){
    
    app.get("/api/notes",function(req, res){
        readNotes()
    });
    
    app.post("/api/notes",function(req, res){
        addNote(req.body)
    })

    app.delete("/api/notes/:id"),function(req,res){
        removeNote(req.params.id)
    }
}

// function that  reads the db file and converts the object to a string form and returns it
function readNotes(){
    util.promisify(fs.readFile("../db/db.json", "utf8")).then(function(error,data){
        if (error){
            return console.log(error)
        }
        let notes = [].concat(JSON.parse(note))
        return notes
    })
}

// Allows for a user input note to added to the json object in the db folder
// This also attaches a unique uuid to the note
function addNote(note){
    const newNote = {title,text,id : uuid}
    return this.getNotes()
    .then(note => [...note, newNote])
    .then(newerNotes => this.write(updatedNotes))

}

function removeNote(id){
    return this.getNotes()
    .then(note => note.filter(note => note.id != id))
    .then(filteredNotes => this.write(filteredNotes))
}
