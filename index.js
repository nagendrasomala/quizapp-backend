const express = require("express");
const app = express();
const userRoute = require("./controller/userRoute");
const questionRoute = require("./controller/questionRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://nagendrababusomala:Nagvenk2006@cluster0.wjcy0on.mongodb.net/quizapp");
mongoose.set("strictQuery",true);
var db = mongoose.connection;
db.on("open",()=>console.log("connected to db"));
db.on("error",()=>console.log("Error connected"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/user",userRoute);
app.use("/questions",questionRoute);

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})