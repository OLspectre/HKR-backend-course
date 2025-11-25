// STARTING SERVER


import { app } from "./src/express.js";

const port = process.envPORT || 3000;

const server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})


function shutdown() {
    console.error("SHutting down...")
    server.close(() => {
        console.log("server closed")
        process.exit(0);
    })
}
server.on("error", (err) => {
    console.error(`Server error ${err}`);
});


process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);