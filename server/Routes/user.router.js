import { Router } from "express";
import {
  createUser,
  loginUser,
  updateUser,
  getSellers,
  getBuyers,
  getRequestBuyers,
  updateUserRole,
} from "../Controllers/user.controller.js";
import { validateInformation } from "../Middlewares/users.middlewares.js";
import verifyToken from "../Middlewares/verifyToken.middleware.js";
import verifyAdminToken from "../Middlewares/verifyAdminToken.js";
const route = Router();

route.post("/register", validateInformation, createUser);

route.patch("/updateUser/:id", verifyToken, updateUser);

route.post("/login", loginUser);

route.get("/getSellers", verifyAdminToken, getSellers);

route.get("/getAllBuyers", verifyAdminToken, getBuyers);

route.get("/getRequestBuyers", verifyAdminToken, getRequestBuyers);

route.patch("/updateUserRole/:id", verifyToken, updateUserRole);

export default route;
