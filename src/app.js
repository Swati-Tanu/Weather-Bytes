const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;

//Static Path: We are connecting the static page to express here
console.log(path.join(__dirname, "../public")); //C:\Users\swati\OneDrive\Desktop\Weather-App\public                                

// Set the path to the views directory
const template_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials')

// Set the view engine
app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);
// app.set('views', template_path)

const static_path = path.join(__dirname, "../public") //address of index.html
app.use(express.static(static_path))

//Routing
app.get("/", (req,res) => {
    res.render("index")
})

app.get("/about", (req,res) => {
    res.render("about")
})

app.get("/weather", (req,res) => {
    res.render("weather")
})


app.get("*", (req,res) => {
    res.render("error", {
        errorMsg: "Opps! Page not Found."
    })
})

app.listen(port, ()=> {
    console.log((`Listening at ${port} port`));
})
