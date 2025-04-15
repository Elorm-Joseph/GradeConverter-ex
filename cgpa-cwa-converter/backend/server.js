
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Sample conversion route
app.post('/convert', (req, res) => {
    const { value, type } = req.body;
    let result;

    if (type === 'cgpa-to-cwa') {
        result = (value * 25).toFixed(2); // Example conversion
    } else if (type === 'cwa-to-cgpa') {
        result = (value / 25).toFixed(2); // Example conversion
    } else {
        return res.status(400).json({ error: 'Invalid conversion type' });
    }

    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
