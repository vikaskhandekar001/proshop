import products from './data/products.js';
import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js'
import ProductRoute from './routes/ProductRoutes.js'
import UserRoute from './routes/UserRoutes'
import cookieParser from 'cookie-parser';

dotenv.config();
const port = process.env.PORT;
connectDb();
const app = express();


// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:trie}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('API is running vikas is running all the api')

});


// app.get('/api/products',(req,res)=>{
// res.json(products);
// })

app.use('/api/products',ProductRoute)

app.listen(port,()=>{
    console.log(`server running on port no : ${port}`);
})
