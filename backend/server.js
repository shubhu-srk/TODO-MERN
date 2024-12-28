const express = require("express");
const notes = require("./data/notes.js") 
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());




const port = process.env.PORT ||5000;
app.use('/api/users',userRoutes);
app.use(notFound)
app.use(errorHandler);



app.listen(port,(req,res)=>{
    console.log("Server is running on port" ,{port});
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