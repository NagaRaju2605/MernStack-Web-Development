const express = require('express');
const app = express();

const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Sample in-memory data
let users = [
    { id: 1, name: "Nagaraju" },
    { id: 2, name: "Ravi" }
];

// 1️⃣ Accept Data (POST)
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(newUser);
    res.send("User added successfully");
});

// 2️⃣ Retrieve Data (GET)
app.get('/users', (req, res) => {
    res.json(users);
});

// 3️⃣ Delete Specified Resource (DELETE)
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);

    users = users.filter(user => user.id !== id);

    res.send("User deleted successfully");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});