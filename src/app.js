const express = require('express');
const multer = require('multer'); 
require('dotenv').config();


const app = express();  
app.use(express.json()); 

const upload = multer({storage: multer.memoryStorage()}) // because the now data coming from backend is in form-data format.


app.post('/create-post' , upload.single("image") ,async (req,res)=> {
    
    
    console.log(req.body);
    console.log(req.file);
})

// buffer data joh hume mila h vhi hum imagekit par upload karenge. 
module.exports = app;