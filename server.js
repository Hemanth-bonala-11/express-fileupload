const express = require('express');
const app = express();
require('./config/DbConfig.js').dbconnect()

const PORT = process.env.PUBLIC_PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});