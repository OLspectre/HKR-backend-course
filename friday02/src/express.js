// CONFIGURING & PREPARING SERVER
import express from "express";
import logger from "morgan";
import path from "path";


import { router } from "./routes.js";


export const app = express();

// Use a logger
app.use(logger("dev"));

// Add EJS template engine
app.set("view engine", "ejs");
app.set("views", path.join("src", "views"));


// Use router
app.use("/", router);



// use static pages/ontent from public
app.use(express.static("./src/public"));


// Error handler for 404
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
})

// GLOBAL error handler
app.use((err, req, res, next) => {
    const status = err.status || 500
    console.error();
    res.status(status).json({
        status,
        message: err.message
    })
})


