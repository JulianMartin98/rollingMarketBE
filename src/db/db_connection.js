import  mongoose  from "mongoose";
import { CONNECTION_STRING } from "../config/config.js";


mongoose.connect(CONNECTION_STRING);


mongoose.connection.on("connected",()=>{

  console.log("Estas conectado a la base de Datos! (:")

})

mongoose.connection.on("error",(error)=>{

  console.log("error");
})