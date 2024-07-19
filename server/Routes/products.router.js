import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getSpecificProduct,
  deleteSpecificProduct,
  //   updateProduct,
} from "../Controllers/product.controller.js";
import verifyToken from "../Middlewares/verifyToken.middleware.js";
const route = Router();

route.post("/createProduct", verifyToken, createProduct);

route.get("/getAllProducts", verifyToken, getAllProducts);

route.get("/getSpecificProduct", verifyToken, getSpecificProduct);

route.delete("/deleteSpecificProduct/:id", verifyToken, deleteSpecificProduct);

export default route;
