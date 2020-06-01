const util = require("util");
const fs = require("fs");


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
// function that  reads the db file and converts the object to a string form and returns it
// opens the json filer and then runs an error check
// If there are no errors it will set noes equal to an empty array and then concat on the JSON note
// this is then returned to be displayed on the front end
  fetchNotes() {
    return readFileAsync("db/db.json", "utf8").then(notes => {
      let savedNotes;

      savedNotes = [].concat(JSON.parse(notes)) || [];
     
      return savedNotes;
    });
  }


// Creates a new object that takes in a title, text  and checks to make sure there are true
// It then runs the get note function and attaches the new note to the end of the array after adding a random ID
// It then writes this updated note array to the db.json file
  addNotes(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }


    const newNote = { title, text, id: this.generateRandomID()};

    // Get all notes, add the new note, write all the updated notes, return the newNote
    return this.fetchNotes()
      .then(notes => [...notes, newNote])
      .then(updatedNotes => writeFileAsync("db/db.json", JSON.stringify(updatedNotes)))
      .then(() => newNote);
  }

  // Creates a random number
  generateRandomID() {
    return Math.floor((1 + Math.random() * 10000))
  }

 
  removeNotes(id) {
    // Get all notes, remove the note with the given id by wring a new array that doesn't include it, 
    // write the filtered notes on to the page
    return this.fetchNotes()
      .then(notes => notes.filter(note => note.id !== parseInt(id)))
      .then(filteredNotes => writeFileAsync("db/db.json", JSON.stringify(filteredNotes)));
  }
}

module.exports = new Store();