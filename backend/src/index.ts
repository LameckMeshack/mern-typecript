import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { sampleProducts } from "./data";

dotenv.config();
//mongo_uri from .env file for mongo docker
const mongo_uri = process.env.MONGO_URI || "mongodb://localhost/ecommerce";
mongoose.set('strictQuery', true);

mongoose.connect(mongo_uri)
    .then(() => {
        console.log("Connected to mongodb");
    }).catch((error) => {
        console.log(error.reason);
    });

const app = express();

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173",
    })
);

app.get("/api/products", (req: Request, res: Response) => {
    res.json(sampleProducts);
});

app.get("/api/products/:slug", (req: Request, res: Response) => {
    const product = sampleProducts.find((x) => x.slug === req.params.slug);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
