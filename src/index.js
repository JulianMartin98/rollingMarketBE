import express from 'express';
import { PORT } from './config/config';

const app = express()

app.listen(PORT, async()=>{

  console.log("La app esta escucnado el puerto PORT")

})