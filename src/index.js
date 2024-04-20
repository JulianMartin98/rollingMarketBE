import express from 'express';
import { PORT } from './config/config.js';
import morgan from 'morgan';
import cors from 'cors'
import "./db/db_connection.js"
// import productroute from './routes/product.routes.js'
import userroute from './routes/user.routes.js'



const app = express()

app.use(morgan("dev")) //da mas informacion de la solicitud.
app.use(cors()) //para que no revoten las peticiones.
app.use(express.json());


app.listen(PORT, async()=>{
  console.log("La app está escuchando en el puerto"+" "+ PORT)
})


app.use(userroute);

app.get("/",(req, res) => {

  res.send("Bienvenido a la API de usuarios")
})
