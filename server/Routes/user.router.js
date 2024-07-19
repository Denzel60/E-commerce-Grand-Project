import { Router } from "express";
import {
  createUser,
  loginUser,
  updateUser,
} from "../Controllers/user.controller.js";
import { validateInformation } from "../Middlewares/users.middlewares.js";
import verifyToken from "../Middlewares/verifyToken.middleware.js";
const route = Router();

route.post("/register", validateInformation, createUser);

route.patch("/updateUser/:id", verifyToken, updateUser);

route.post("/login", loginUser);

export default route;
