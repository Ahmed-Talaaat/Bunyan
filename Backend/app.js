require ("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());





//simple logger
if (process.env.NODE_ENV === "development") {
    app.use((req, res, next) => {
        console.log(`${req.method} ${req.originalUrl}`); 
        next();
    });
}

app
.get("/test", (req, res) => {
    res.json({ message: "Hello, World!" });
});

const connecteddb = require("./config/db");
connecteddb();

const port = process.env.PORT || 3000;




app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});