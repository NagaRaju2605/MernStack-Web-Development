const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.use(session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true
}));

app.get("/", (req, res) => {

    if (req.session.count) {
        req.session.count++;
        res.send("You visited " + req.session.count + " times");
    } else {
        req.session.count = 1;
        res.send("Welcome! First visit");
    }

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});