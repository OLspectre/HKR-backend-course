// Router containing multiple routes

import express from "express";

export const router = express.Router();


router.get("/", (req, res) => {
    res.send("This is showing from Routes")
    console.log("GET on /MOSROS");
});


router.get("/api/data", (req, res) => {
    res.json({
        message: "Hello cool pug in JSON",
        now: new Date().toLocaleString("sv-SE", { timezone: "Europe/Stockholm" }),
        random: Math.floor(Math.random() * 100 + 1)
    });
});

router.get("/api/error", (req, res) => {
    throw new Error("This is a forced error for demostration")
});
router.get("/api/forbidden", (req, res) => {
    const err = new Error("you are not allowed to visit this page")

    err.status = 403;
    throw err;
});


router.get("/home", (req, res) => {
    const data = {
        header: "EJS Example",
        message: "Hello cool pug in JSON",
        now: new Date().toLocaleString("sv-SE", { timezone: "Europe/Stockholm" }),
        random: Math.floor(Math.random() * 100 + 1)
    }
    res.render("home", data);
});

