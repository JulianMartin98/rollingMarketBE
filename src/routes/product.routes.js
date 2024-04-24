import { Router } from "express";
import { CreateProduct, DeleteProduct, GetAllProducts, GetProductById, UpdateProduct } from "../controllers/product.js";
import comprobarJWT from '../middlewares/verifyJWT.js';

const router = Router()

router.get("/productos",comprobarJWT,GetAllProducts);
router.post("/productos",comprobarJWT,CreateProduct);
router.get("/producto/:id",comprobarJWT,GetProductById);
router.delete("/producto/delete/:id",comprobarJWT,DeleteProduct);
router.put("/producto/update/:id",comprobarJWT,UpdateProduct);


export default router;