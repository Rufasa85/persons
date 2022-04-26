const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

const people = [ 
    {
        id:1,
        name:"Joe",
        role:"Instructor"
    },
    {
        id:2,
        name:"Niles",
        role:"TA"
    },
          {
        id:3,
        name:"Stefan",
        role:"Student"
    }
]

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/index.html"))
})

app.get("/persons",(req,res)=>{
    res.json(people)
})

app.post("/persons",(req,res)=>{
    console.log(req.body);
    people.push(req.body)
    res.send("post request recieved")
})

app.listen(PORT,()=>{
    console.log("listening to port " + PORT)
})