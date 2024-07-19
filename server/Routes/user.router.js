import { Router } from "express";
import { createUser, loginUser } from "../Controllers/user.controller.js";
const route = Router();

route.post("/register", createUser);

route.post("/login", loginUser);

export default route;
