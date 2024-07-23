import { Router } from "express";
import { createOrder } from "../Controllers/order.controllers.js";
import verifyToken from "../Middlewares/verifyToken.middleware.js";
import { validateOrderInformation } from "../Middlewares/orders.middleware.js";
const route = Router();

route.post("/createOrder", validateOrderInformation, verifyToken, createOrder);

export default route;
