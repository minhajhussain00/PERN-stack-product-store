import express from "express"
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { sql } from "./config/db.js";
import productRoutes from "./routes/productsRoutes.js"
dotenv.config();
const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())


const PORT = process.env.PORT || 3000;

app.use("/api/products", productRoutes);
async function initDB(){
    try{
        await sql`
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`
    } catch (error) {
        console.error("Error initializing database:", error);
    }
}


initDB().then(() => {
    app.listen(PORT,()=>{
    console.log(`Server has started on port ${PORT}`);
})
})