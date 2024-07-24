import { Router } from "express";
import {
  createOrder,
  getBuyerOrder,
  getSellerOrder,
  deleteOrder,
} from "../Controllers/order.controllers.js";
import verifyToken from "../Middlewares/verifyToken.middleware.js";
import verifySellerToken from "../Middlewares/verifySellerToken.middleware.js";
import { validateOrderInformation } from "../Middlewares/orders.middleware.js";
const route = Router();

route.post("/createOrder", validateOrderInformation, verifyToken, createOrder);

route.get("/getBuyerOrders", verifyToken, getBuyerOrder);

route.get("/getSellerOrders", verifySellerToken, getSellerOrder);

route.delete("/deleteOrder/:id", verifyToken, deleteOrder);

export default route;
