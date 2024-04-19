import express from "express";
const router = express.router();

router.get("/admin", (req, res) => {

    res.json ({message:"Sitio de Administrador"});

});


export default router;