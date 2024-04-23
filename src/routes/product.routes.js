import { Router } from "express";
import { CreateProduct, DeleteProduct, GetAllProducts, GetProductById, UpdateProduct } from "../controllers/product.js";

const router = Router()

router.get("/api/productos",GetAllProducts);
router.post("/api/productos",CreateProduct);
router.get("/api/producto/:id",GetProductById);
router.delete("/api/producto/delete/:id",DeleteProduct);
router.put("/api/producto/update/:id",UpdateProduct);



export default router;