import jwt from "jsonwebtoken";

const comprobarJWT = (req, res, next) => {

    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({messagge: "No posee un token"})
    }

    const verificarToken = jwt.verify(token, process.env.JWT_SECRET); //se verifica si el token tiene la clave secreta

    if(verificarToken.admin) {
        next();
    }else {
        return res.status(401).json({messagge:"No tiene los permisos necesarios"});
    }
}

export default comprobarJWT;