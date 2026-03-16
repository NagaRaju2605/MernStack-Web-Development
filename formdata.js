const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <form method="POST" action="/submit">
        Name: <input type="text" name="name"><br>
        Email: <input type="email" name="email"><br>
        <button type="submit">Submit</button>
        </form>
    `);
});

app.post("/submit", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    res.send("Name: " + name + "<br>Email: " + email);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});