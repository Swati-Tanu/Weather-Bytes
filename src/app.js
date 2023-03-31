const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;

//Static Path: We are connecting the static page to express here
console.log(path.join(__dirname, "../public")); //C:\Users\swati\OneDrive\Desktop\Weather-App\public                                

const static_path = path.join(__dirname, "../public") //address of index.html

app.use(express.static(static_path))

//Routing
app.get("/", (req,res) => {
    res.send("Welcome to Weather App (Backend Side)!")
})

app.get("/about", (req,res) => {
    res.send("About Us")
})

app.get("/weather", (req,res) => {
    res.send("Weather App")
})

app.get("*", (req,res) => {
    res.send("404 Error Page")
})

app.listen(port, ()=> {
    console.log((`Listening at ${port} port`));
})