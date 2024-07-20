import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getSpecificProduct,
  deleteSpecificProduct,
  //   updateProduct,
} from "../Controllers/product.controller.js";
import verifyToken from "../Middlewares/verifyToken.middleware.js";
import verifySellerToken from "../Middlewares/verifySellerToken.middleware.js";
const route = Router();

route.post("/createProduct", verifySellerToken, createProduct);

route.get("/getAllProducts", verifyToken, getAllProducts);

route.get("/getSpecificProduct", verifySellerToken, getSpecificProduct);

route.delete(
  "/deleteSpecificProduct/:id",
  verifySellerToken,
  deleteSpecificProduct
);

export default route;
