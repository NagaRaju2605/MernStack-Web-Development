const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { name: "Nagaraju" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


<----!----------!>




<!DOCTYPE html>
<html>
<head>
    <title>EJS Example</title>
</head>
<body>
    <h1>Hello <%= name %></h1>
    <p>Welcome to Express Templating Engine</p>
</body>
</html>