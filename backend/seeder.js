import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js'; 
import products from './data/products.js';
import User from './model/userModal.js';
import Product from './model/productModal.js';
import Order from './model/orderModal.js';
import connectDb from './config/db.js';
dotenv.config();
connectDb();


const importData = async()=>{
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUser = await User.insertMany(users);
        const adminUser = createdUser[0]._id;


        const sampleProducts = products.map((product)=>{
            return {...product, user:adminUser}
        });

        await Product.insertMany(sampleProducts);
        console.log("Data Imported"  .green.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
        
    }

}



const destroyData = async()=>{
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data Destroyed"  .red.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
        
    }

}

if(process.argv[2] == '-d'){
    destroyData()
}else{
    importData()
}