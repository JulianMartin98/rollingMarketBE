import { Schema, model } from "mongoose";

// Atributos del usuario name,correElectronico,password,rol.

const userSchema = new Schema(

  {
    // id: {
    //   type: Number,
    //   required: true,
    //   unique: true
    // },

    name: {
      type: String,
      required: true,
      minLength: [3, 'the field name must have at least 3 characters'],
      maxLength: [100, 'the field name must have a maximun of 100 characters'],
    },

    correoElectronico: {
      type: String,
      required: true,
      unique: true,
      maxLength: [20, 'the field name must have a maximun of 100 characters'],
    },

    password: {
      type: String,
      required: true,
      minLength: [3, 'the field name must have at least 3 characters'],
      maxLength: [100, 'the field name must have a maximun of 100 characters'],
    },

    rol: {
      type: String,
      enum: ['admin', 'usuario'],
      default: 'usuario'
    },
  },

  {
    timestamps: true,   //Esto indica a mongoose que agregue atributos "createAD y updateAT" para que nuestros documentos tengan un seguimiento de fechas (creacion y actualizacion)
    versionKey: false,  //Evita que se agregue el campo "__v" a nuestros documentos (campo creado automaticamente por mongoose para manejar versiones)
  }
);

export const UserModel = model('User', userSchema);
