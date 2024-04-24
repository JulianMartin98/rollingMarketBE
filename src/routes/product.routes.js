import { Router } from "express";
import { CreateProduct, DeleteProduct, GetAllProducts, GetProductById, UpdateProduct } from "../controllers/product.js";
import comprobarJWT from '../middlewares/verifyJWT.js';

const router = Router()

router.get("/productos",GetAllProducts);
router.post("/productos",CreateProduct);
router.get("/producto/:id",GetProductById);
router.delete("/producto/delete/:id",DeleteProduct);
router.put("/producto/update/:id",UpdateProduct);



export default router;