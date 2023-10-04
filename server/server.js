import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDB from './config/db.js';
import userRouter from './routes/userRoutes.js';
dotenv.config();

// creating an instance of the express app 
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5050;

connectToDB();

// listing the port 
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`)
});

app.use("/user", userRouter)

app.get('/', (req, res) => {
    res.send("Server Started")
});