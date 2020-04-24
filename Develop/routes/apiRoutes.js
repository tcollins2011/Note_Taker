
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
// opens the json filer and then runs an error check
// If there are no errors it will set noes equal to an empty array and then concat on the JSON note
// this is then returned to be displayed on the front end
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
// Creates a new object that takes in a title, text and id
// It then runs the get note function and attaches the new note to the end of the array
// It then writes this updated note array to the db.json file
function addNote(note){
    const newNote = {title,text,id : uuid}
    return this.getNotes()
    .then(note => [...note, newNote])
    .then(newerNotes => this.write(updatedNotes))

}

// This will start a function and take in an id variable
// it will then run the getNotes function and filter that array by id
// The new array that is generated will only have the entries that did not contain the sent id
// Then the new filtered list is written to the db.json thereby eliminating the note with the targeted id
function removeNote(id){
    return this.getNotes()
    .then(function(note){
        note.filter(note => note.id != id)
    })
    .then(filteredNotes => this.write(filteredNotes))
}
