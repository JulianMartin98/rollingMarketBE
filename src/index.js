import express from 'express';
import { PORT } from './config/config.js';
import morgan from 'morgan';
import cors from 'cors'
import "./db/db_connection.js"
import productroute from './routes/product.routes.js'


// import TestRoutes from './routes/test.routes.js'

const app = express()

app.use(express.json());
app.use(morgan("dev")) //da mas informacion de la solicitud.
app.use(cors()) //para que no revoten las peticiones.

app.use(productroute)

app.listen(PORT, async()=>{
console.log(`La app esta escuchando el puerto ${PORT}`)
})



// app.use(TestRoutes)


app.get("/", async(req,res)=>{
  res.send("bienvenido a la API de productos")
})

 //app.get("/", async(req,res)=>{
  // res.send("Hello World")
 //})