import { Router } from "express";
import { CreateUser, DeleteUser, GetAllUsers, GetUserById, UpdateUser, LoginUser } from "../controllers/user.controllers.js";

const router = Router()

router.get("/usuarios",GetAllUsers);
router.post("/usuario",CreateUser);
router.get("/usuario/:id",GetUserById);
router.delete("/usuario/delete/:id",DeleteUser);
router.put("/usuario/update/:id",UpdateUser);
router.post("/login/",LoginUser);



export default router; 