import express from "express";
const router = express.Router();

router.get("/admin", (req, res) => {

    res.json ({message:"Sitio de Administrador", user: req.user});

});


export default router;