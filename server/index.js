const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const config = require('./config');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3001;

app.get('/', async (req, res) => {
    try {
        const connction = await mysql.createConnection(config.db)
        const [result,] = await connction.execute('select * from task')
        
        if(!result) result=[]
        res.status(200).json(result);
    }
    catch(err){
        res.status(500).json({err: err.message});
    }
});


app.listen(port)