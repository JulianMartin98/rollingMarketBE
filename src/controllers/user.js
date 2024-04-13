import { UserModel } from "../models/User.js";

export async function GetAllUsers(req, res) {
  try {

    const users = await UserModel.find()
    return res.status(200).json(users);     //revisar parametro de json


  } catch (error) {
    console.log("error")
  }
};

export const CreateUser = async (req, res) => {
  try {
    const body = await req.body
    console.log("----BODY----", body);
    const user = await UserModel.create({ ...req.body })
    return res.status(201).json(user)   //revisar parametro de json


  } catch (error) {
    console.log("error")
  }
};

export async function GetUserById (req, res)  {
  try {
    const {id} = req.params
    const product = await UserModel.find({_id:id})
    return res.status(200).json(product)


  } catch (error) {
    console.log("error")
  }
};

export async function DeleteUser (req, res)  {
  try {
    const {id} = req.params
    const user = await UserModel.deleteOne({_id:id})
    return res.status(200).json("Usuario eliminado exitosamente")


  } catch (error) {
    console.log("error")
  }
};

export async function UpdateUser (req, res)  {
  try {
    const {id} = req.params 
    const {name,correElectronico,rol} = req.body
    const user = await UserModel.findOneAndUpdate({_id:id},{name,correElectronico,rol})
    if(!user){
      return res.status(404).json("Usuario no encontrado")
    }
     return res.status(200).json("Usuario actualizado exitosamente")


  } catch (error) {
    console.log("error")
  }
};

