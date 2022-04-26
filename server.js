const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const fs = require("fs");
//parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//serves css/js/static assets
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/index.html"))
})

app.get("/persons",(req,res)=>{
    fs.readFile("./data/people.json","utf-8",(err,data)=>{
        if(err){
            throw err
        } else {
            const people = JSON.parse(data);
            res.json(people)
        }
    })
})

app.post("/persons",(req,res)=>{
    fs.readFile("./data/people.json","utf-8",(err,data)=>{
        if(err){
            throw err
        } else {
            
            const people = JSON.parse(data);
            console.log(req.body)
            people.push(req.body)
            fs.writeFile("./data/people.json",JSON.stringify(people,null,2),(err,data)=>{
                if(err){
                    throw err
                }
                else {
                    res.json(people)
                }
            })
        }
    })
})

app.listen(PORT,()=>{
    console.log("listening to port " + PORT)
})