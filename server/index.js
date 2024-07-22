import express from "express";
import userRoute from "./Routes/user.router.js";
import productRoute from "./Routes/products.router.js";
import orderRoute from "./Routes/orders.router.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
config();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cookieParser());
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);

app.listen(3020, () => {
  console.log("Server is running on port 3020");
});
