const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/api/test', (req, res) => {
    res.send('API working 🚀');
});