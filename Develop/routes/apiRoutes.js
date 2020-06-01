const express = require("express")
const store = require("../db/store")


// Exported module that contains the three routes that interact with the db.json file
module.exports = function(app){
app.get("/api/notes", function(req, res){
    store.fetchNotes()
    .then(notes => res.json(notes))
})

app.post("/api/notes", function(req, res){
    store.addNotes(req.body)
    .then(notes => res.json(notes))
})

app.delete("/api/notes/:id", function(req, res){
    store.removeNotes(req.params.id)
    .then(() => res.json({ok: true}))
})
}