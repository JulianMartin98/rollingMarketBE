import express from 'express';
import { PORT } from './config/config.js';
import morgan from 'morgan';
import cors from 'cors'
import "./db/db_connection.js"
import productroute from './routes/product.routes.js'
import userroute from './routes/user.routes.js'
import privateRouter from "./routes/private.routes.js"
import comprobarJWT from "./middlewares/verifyJWT.js";



const app = express()

app.use(express.json());
app.use(morgan("dev")) //da mas informacion de la solicitud.
app.use(cors()) //para que no revoten las peticiones.


app.use(productroute);
app.use(userroute);
app.use(privateRouter);  //enviar antes de los productos y usuarios para proteger rutas?



app.listen(PORT, async () => {
  console.log("La app está escuchando en el puertoo" + " " + PORT)
});
