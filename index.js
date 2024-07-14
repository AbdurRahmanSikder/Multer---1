import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import route from './router/Upload.route.js'
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const PORT = 8000;
const URL = "mongodb://127.0.0.1:27017/multer-1";

mongoose.connect(URL)
.then(app.listen(PORT))
.then(()=>{console.log("Listening port on 8000")})
.catch((error ) => console.log("Error: ",error));

app.use('/api',route);
app.use('/',(req,res)=>{res.send("Hello world")});