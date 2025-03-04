const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to serve static files (optional)
app.use(express.static('public'));

// Dynamic route to greet users
app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`<h1>Hello, ${name}!</h1>`);
});


// Dynamic route to display user profile
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`<h1>User Profile</h1><p>User ID: ${userId}</p>`);
});

// Home route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Dynamic Routing Example</h1><p>Try visiting <a href="/greet/John">/greet/John</a> or <a href="/user/42">/user/42</a></p>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});