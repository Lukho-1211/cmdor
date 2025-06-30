const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');

const SaveComandRouter = require('./routes/SaveComandRouter');


const app = express();
app.use(express.json({ limit: '10kb'}));

dotenv.config({path: './config.env'});

const port = process.env.PORT || 3000;

const DB = process.env.MONGO_URL.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD 
);

mongoose.connect(DB)
.then(()=>{ 
    console.log('DB connected successfully!');
});


app.use('/commands', SaveComandRouter);

const server = app.listen(port, ()=>{
    console.log(`Connected to port ${port}`);
});
