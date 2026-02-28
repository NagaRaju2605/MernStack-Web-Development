const express = require('express');
const app = express();

const PORT = 3000;

// 1️⃣ Basic Route
app.get('/', (req, res) => {
    res.send("Welcome to Express Routing Example");
});

// 2️⃣ Handling Different Routes
app.get('/about', (req, res) => {
    res.send("This is About Page");
});

app.get('/contact', (req, res) => {
    res.send("This is Contact Page");
});

// 3️⃣ Route Parameters
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send("User ID is: " + userId);
});

// 4️⃣ Query Parameters
app.get('/search', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.send(`Name: ${name}, Age: ${age}`);
});

// 5️⃣ URL Building (Redirect Example)
app.get('/home', (req, res) => {
    res.redirect('/');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});