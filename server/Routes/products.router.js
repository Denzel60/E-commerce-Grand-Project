import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getSpecificProduct,
  deleteSpecificProduct,
  getAllProductsWithoutId,
  //   updateProduct,
} from "../Controllers/product.controller.js";
import verifyToken from "../Middlewares/verifyToken.middleware.js";
import verifySellerToken from "../Middlewares/verifySellerToken.middleware.js";
import { validateProductInformation } from "../Middlewares/products.middlewares.js";
const route = Router();

route.post(
  "/createProduct",
  verifySellerToken,
  validateProductInformation,
  createProduct
);

route.get("/getAllProducts", verifyToken, getAllProducts);

route.get("/getAllProductsWithoutId", getAllProductsWithoutId);

route.get("/getSpecificProduct", verifySellerToken, getSpecificProduct);

route.delete(
  "/deleteSpecificProduct/:id",
  verifySellerToken,
  deleteSpecificProduct
);

export default route;
