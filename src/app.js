const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// app.use(express.static(""))

//Routing
app.get("/", (req,res) => {
    res.send("Welcome to Weather App!")
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