import mongoose from 'mongoose';

const connectDb = async ()=>{

    try {
        
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongo db connected ${con.connection.host}`)

    } catch (error) {
        console.log(`error ${error.message}`);
        process.exit(1);
        
    }

}

export default connectDb;