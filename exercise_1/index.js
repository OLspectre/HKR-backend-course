

const express = require("express");
const app = express();

const PORT = 3333;


app.get("/", (req, res) => {
    console.log("It's friday theeeeen");


    res.send("Hello World!")
});


app.listen(PORT, () => {

    `This server is litening to http://localhost:${PORT}/`
});