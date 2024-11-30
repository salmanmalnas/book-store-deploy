import express from  "express";
import { login, signup, getUsers } from "../controller/user-controller.js";

const router=express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.get("/users", getUsers);


export default router;