import express from "express";
import userRoute from "./Routes/user.router.js";
import productRoute from "./Routes/products.router.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
const app = express();
config();

app.use(express.json());

app.use(cookieParser());
app.use("/api/user", userRoute);
app.use("/api/user", productRoute);

app.listen(3020, () => {
  console.log("Server is running on port 3020");
});
