

const express = require("express");
const app = express();

const PORT = 3333;

app.get("/about", (req, res) => {

    console.log("About page");


    res.send("This is an About page.")
});

app.get("/contact", (req, res) => {

    console.log("contact page");

    res.send("This is a Contact page.")

});

app.get("/", (req, res) => {
    console.log("It's friday theeeeen");


    res.send("Hello World!")
});

app.listen(PORT, () => {

    console.log(`This server is litening to http://localhost:${PORT}/`
    );
});