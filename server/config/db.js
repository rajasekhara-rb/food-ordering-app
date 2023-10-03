import mongoose from 'mongoose';
// set up configuration option to enfore strict query structure
mongoose.set('strictQuery', true);
// function to establish connetion to the mongodb database 
const connectToDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Monogdb connetion established : ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectToDB;