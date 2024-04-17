import { Router } from "express";
import { CreateProduct, DeleteProduct, GetAllProducts, GetProductById, UpdateProduct, GetProductByCategory } from "../controllers/product.js";

const router = Router()
// asdad

router.get("/productos",GetAllProducts);
router.post("/productos",CreateProduct);
router.get("/producto/:id",GetProductById);
router.delete("/producto/delete/:id",DeleteProduct);
router.put("/producto/update/:id",UpdateProduct);
router.get("/producto/category/:category",GetProductByCategory);



export default router;