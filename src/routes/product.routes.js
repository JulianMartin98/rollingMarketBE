import { Router } from "express";
import { CreateProduct, DeleteProduct, GetAllProducts, GetProductById, UpdateProduct } from "../controllers/product.js";

const router = Router()
// asdad



router.get("/productos",GetAllProducts);
router.post("/product",CreateProduct);
router.get("/producto/:id",GetProductById);
router.delete("/producto/delete/:id",DeleteProduct);
router.put("/producto/update/:id",UpdateProduct);



export default router;