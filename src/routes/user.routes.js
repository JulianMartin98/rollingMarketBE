import express from "express";
import { CreateUser, DeleteUser, GetAllUsers, GetUserById, UpdateUser, LoginUser } from "../controllers/user.controllers.js";
import comprobarJWT from '../middlewares/verifyJWT.js';


const router = express.Router();

router.get("/usuarios",comprobarJWT,GetAllUsers);
router.post("/usuario",CreateUser);
router.get("/usuario/:id",comprobarJWT,GetUserById);
router.delete("/usuario/delete/:id",comprobarJWT,DeleteUser);
router.put("/usuario/update/:id",comprobarJWT,UpdateUser);
router.post("/login/",LoginUser);



export default router; 