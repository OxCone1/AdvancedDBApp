const express = require('express');
const cors = require('cors');
const router = require('./routes/router.js');

const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', router);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({error: err.message});
    return;
})

app.listen(PORT);