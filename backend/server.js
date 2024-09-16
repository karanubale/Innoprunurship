import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
// import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoutes.js"
import dataRouter from "./routes/dataRoute.js"
import dotenv from 'dotenv';
// import cartRouter from "./routes/cartRoute.js"
// import orderRouter from "./routes/orderRoute.js"
dotenv.config();

const app = express()
const port = 4000

app.use(express.json());
app.use(cors())

connectDB();
// app.use("/api/user", userRouter);
// app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/v1", dataRouter); //getadata
// app.use("/api/admin", adminRouter);

// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Server is running on  http://localhost:${port}`);
})

