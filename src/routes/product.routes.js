import { Router } from "express";
import { CreateProduct, DeleteProduct, GetAllProducts, GetProductByCategory, GetProductById, UpdateProduct } from "../controllers/product.js";

const router = Router()

router.get("/productos",GetAllProducts);
router.post("/product",CreateProduct);
router.get("/producto/:id",GetProductById);
router.delete("/producto/delete/:id",DeleteProduct);
router.put("/producto/update/:id",UpdateProduct);
router.get("/producto/categoria/:categoria",GetProductByCategory);



export default router;