const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const USERNAME = "admin";
const PASSWORD = "1234";

app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      Username: <input name="username"/><br>
      Password: <input type="password" name="password"/><br>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    res.send("Login Successful");
  } else {
    res.send("Invalid Credentials");
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});