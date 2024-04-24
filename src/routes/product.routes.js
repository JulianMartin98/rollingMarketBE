import { router } from "express";
import { CreateProduct, DeleteProduct, GetAllProducts, GetProductByCategory, GetProductById, UpdateProduct } from "../controllers/product.js";
import comprobarJWT from '../middlewares/verifyJWT.js';


router.get("/productos",comprobarJWT, GetAllProducts);
router.post("/product",comprobarJWT, CreateProduct);
router.get("/producto/:id",comprobarJWT, GetProductById);
router.delete("/producto/delete/:id",comprobarJWT, DeleteProduct);
router.put("/producto/update/:id",comprobarJWT, UpdateProduct);
router.get("/producto/categoria/:categoria",comprobarJWT, GetProductByCategory);


export default router;