const express = require('express');
const pool = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ 
            message: 'Successfully connected to the database!', 
            dbTime: result.rows[0].now 
        });
    } catch (err) {
        console.error('Database connection error:', err.message);
        res.status(500).send('Database connection error');
    }
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});