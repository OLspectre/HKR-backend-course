

// const express = require("express");
// const app = express();

import express from "express";

const app = express();

const PORT = 3333;

app.get("/about", (req, res) => {

    console.log("About page with Express");


    res.send("This is an About page.")
});

app.get("/contact", (req, res) => {

    console.log("contact page With Express");

    res.send("This is a Contact page.")

});

app.get("/", (req, res) => {
    console.log("It's friday theeeeen with Express");


    res.send("Hello World!")
});

app.listen(PORT, () => {

    console.log(`This server is litening to http://localhost:${PORT}/`
    );
});