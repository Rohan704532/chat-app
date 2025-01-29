import express from 'express';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/messageRoutes.route.js';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';


const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    connectDB();
});

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);


