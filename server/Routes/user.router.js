import { Router } from "express";
import { createUser, loginUser } from "../Controllers/user.controller.js";
import { validateInformation } from "../Middlewares/users.middlewares.js";
const route = Router();

route.post("/register", validateInformation, createUser);

route.post("/login", loginUser);

export default route;
