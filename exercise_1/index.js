

// const express = require("express");
// const app = express();

import express from "express";

const app = express();

const PORT = 3333;
app.use(express.static("static")); //app.use - anything that has to be done, before routing and request-process.
app.use(express.urlencoded({ extended: true }));


app.get("/greet", (req, res) => {
    const { name, lastName } = req.query;

    res.send(`Hello ${name + " " + lastName || "Guest"}!`)
})

app.post("/submitUser", (req, res) => {
    const { name, email } = req.body;



    console.log(`Submitted Name of user: ${name}`);
    console.log(`Submitted Email of user: ${email}`);

    res.send(`The data was succesfully registered! Thank you ${name} for being in this test!`)
})

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