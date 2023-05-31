import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { productRouter } from "./routers/ProductRouter";

dotenv.config();
//mongo_uri from .env file for mongo docker
// const mongo_uri = process.env.MONGO_URI;
const mongo_uri = "mongodb://localhost:27017/ecommerce";
mongoose.set('strictQuery', true);

mongoose.connect(mongo_uri)
    .then(() => {
        console.log("Connected to mongodb");
    }).catch((error) => {
        console.log(error);
    });

const app = express();

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173",
    })
);

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
)

app.use('/api/products', productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
