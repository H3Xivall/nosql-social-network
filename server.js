const express = require('express');
const routes = require('./routes');
const connectDB = require('./config/connection')
require('dotenv').config();

const app = express();

// Middleware set up
app.use(express.json());

// Routes set up
app.use(routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})