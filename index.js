import express from "express";
import path from "path"

// express middleware
const app = express();

const {json} = express;

app.use(json());
app.use(express.static("public"));

const port = 3000;

const route = "/";

// const str = "./index.html"
// res.send(str);

// req = header info / meta data
app.get(route ,(req, res)=>{
    res.sendFile(path.join(__dirname, "/public/index.html"));
});


app.listen(port, ()=>{
    console.log("starting express");
});