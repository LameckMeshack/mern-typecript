import express, { Request, Response } from "express";
import cors from "cors";
import { sampleProducts } from "./data";

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

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
