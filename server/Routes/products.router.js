import { Router } from "express";
import {
  createProduct,
  //   deleteOneProduct,
  //   getAllProducts,
  //   getOneProduct,
  //   updateProduct,
} from "../Controllers/product.controller.js";
import verifyToken from "../Middlewares/verifyToken.middleware.js";
const route = Router();

route.post("/createProduct", verifyToken, createProduct);

export default route;
