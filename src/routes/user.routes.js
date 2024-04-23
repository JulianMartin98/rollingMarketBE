import { Router } from "express";
import { CreateUser, DeleteUser, GetAllUsers, GetUserById, UpdateUser, LoginUser } from "../controllers/user.controllers.js";

const router = Router()

router.get("/api/usuarios",GetAllUsers);
router.post("/api/usuario",CreateUser);
router.get("/api/usuario/:id",GetUserById);
router.delete("/api/usuario/delete/:id",DeleteUser);
router.put("/api/usuario/update/:id",UpdateUser);
router.post("/api/login/",LoginUser);



export default router; 