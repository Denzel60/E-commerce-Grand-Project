import { Router } from "express";
import { createOrder } from "../Controllers/order.controllers";
import verifyToken from "../Middlewares/verifyToken.middleware";
const route = Router();

route.post("/createOrder", verifyToken, createOrder);

export default route;
