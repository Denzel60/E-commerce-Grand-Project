import { Router } from "express";
import {
  createOrder,
  getBuyerOrder,
  deleteOrder,
} from "../Controllers/order.controllers.js";
import verifyToken from "../Middlewares/verifyToken.middleware.js";
import { validateOrderInformation } from "../Middlewares/orders.middleware.js";
const route = Router();

route.post("/createOrder", validateOrderInformation, verifyToken, createOrder);

route.get("/getBuyerOrders", verifyToken, getBuyerOrder);

route.delete("/deleteOrder/:id", verifyToken, deleteOrder);

export default route;
