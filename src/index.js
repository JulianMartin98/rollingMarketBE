import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
// import { PORT } from './config/config.js';
// import TestRoutes from './routes/test.routes.js'

const app = express()

app.use(morgan("dev")) //da mas informacion de la solicitud.
app.use(cors()) //para que no revoten las peticiones.

// app.use(TestRoutes)



// app.listen(PORT, async()=>{
//   console.log("La app esta escucnado el puerto PORT")

// })
// app.listen(4000, async()=>{
//   console.log("La app esta escuchando el puerto 4000")
// })

// app.get("/", async(req,res)=>{
//   res.send("Hello World")
// })