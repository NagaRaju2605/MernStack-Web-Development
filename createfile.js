const fs = require('fs');

const content = `
HTML
CSS
JavaScript
TypeScript
MongoDB
Express.js
React.js
Node.js
`;

// Create src.txt and write content
fs.writeFile('src.txt', content, (err) => {
    if (err) {
        console.log("Error creating file");
    } else {
        console.log("src.txt created successfully!");
    }
});