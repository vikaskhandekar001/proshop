import products from './data/products.js';
import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js'
dotenv.config();
const port = process.env.PORT;
connectDb();
const app = express();


app.get('/',(req,res)=>{
    res.send('API is running vikas is running all the api')

});


app.get('/api/products',(req,res)=>{
res.json(products);
})

app.get('/api/products/:id',(req,res)=>{
const product = products.find((p) => p._id == req.params.id);
 console.log("product",product);
 console.log("product",req.params.id);
res.json(product);
})
app.listen(port,()=>{
    console.log(`server running on port no : ${port}`);
})
