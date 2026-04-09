const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from Backend 🚀" });
});

app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: "Divya" },
        { id: 2, name: "User2" }
    ]);
});

app.get('/health', (req, res) => {
    res.send("OK");
});

module.exports = app;