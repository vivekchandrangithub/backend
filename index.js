const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000; // Use environment port or default to 3000

app.use(cors());
app.use(express.json());

// Import routes
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/users', userRoutes); // Added user routes

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Bookvault Backend');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    });

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});