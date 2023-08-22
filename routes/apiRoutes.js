const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const notesData = require('../db/db.json');

let notes = notesData

const saveNotes = () => {
    fs.writeFileSync(path.resolve(__dirname, '..db/db.json'), JSON.stringify(notes))
}

router.get("/notes", (req,res) => {
    let allNotes = notes.map((item, index) => ({
        ...item,
        id: index
    })
    )
    res.json(allNotes)
})

router.post("/notes", (req,res) => {
    notes.push(req.body)
    saveNotes()
    res.json(notes)
})

router.delete("/notes/:id", (req,res) => {
    notes.splice(req.params.id, 1)
    notes = notes.filter((note) => note.id !== req.params.id);
    saveNotes()
    res.json()
})
   

module.exports = router;
