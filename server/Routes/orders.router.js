import { Router } from "express";
import { createOrder } from "../Controllers/order.controllers.js";
import verifyToken from "../Middlewares/verifyToken.middleware.js";
const route = Router();

route.post("/createOrder", verifyToken, createOrder);

export default route;
