const express = require("express");
const notes = require("./data/notes.js") 
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const port = process.env.PORT ||5000;

app.listen(port,(req,res)=>{
    console.log("Server is running on port 3000");
})

app.get('/api/notes',(req,res)=>{
    res.json(notes);
})

app.get('/api/notes/:id',(req,res)=>{
    
    const note = notes.find((n)=>{
        return req.params.id==n._id
    })
    res.send(note);
    console.log(note);

})