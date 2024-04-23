import { Router } from "express";
import { CreateUser, DeleteUser, GetAllUsers, GetUserById, UpdateUser, LoginUser } from "../controllers/user.controllers.js";

const router = Router()

router.get("/users/usuarios",GetAllUsers);
router.post("/users/usuario",CreateUser);
router.get("/users/usuario/:id",GetUserById);
router.delete("/users/usuario/delete/:id",DeleteUser);
router.put("/users/usuario/update/:id",UpdateUser);
router.post("/users/login/",LoginUser);



export default router; 