const express = require('express');
const app = express();

const PORT = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Route using template
app.get('/', (req, res) => {
    const user = {
        name: "Nagaraju",
        course: "ExpressJS",
        year: 2026
    };

    res.render('index', { user });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});