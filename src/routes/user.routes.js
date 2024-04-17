import { Router } from "express";
import { CreateUser, DeleteUser, GetAllUsers, GetUserById, UpdateUser } from "../controllers/user.js";

const router = Router()

router.get("/usuarios",GetAllUsers);
router.post("/usuario",CreateUser);
router.get("/usuario/:id",GetUserById);
router.delete("/usuario/delete/:id",DeleteUser);
router.put("/usuario/update/:id",UpdateUser);



export default router;