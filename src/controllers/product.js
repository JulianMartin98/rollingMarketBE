import { ProductModel } from "../models/Product.js"
import jwt from "jsonwebtoken";


export async function GetAllProducts  (req, res)  {
  try {

    const products = await ProductModel.find()
    return res.status(200).json(products)

  } catch (error) {
    res.status(500).json({message: error.message})
  }
};


export const CreateProduct = async (req, res) => {
  try {
  const body = await req.body
  console.log("----BODY----", body);
  const product = await ProductModel.create({...req.body})
  return res.status(201).json(product)


  } catch (error) {
    res.status(500).json({message: error.message})
  }

}

export async function GetProductByCategory (req, res)  {
  try {
    const {categoria} = req.params
    const product = await ProductModel.find({category: categoria})
    return res.status(200).json(product)

  } catch (error) {
    res.status(500).json({message: error.message})
  }

}

export async function GetProductById (req, res)  {
  const { id } = req.params
  try {

    const product = await ProductModel.find({_id:id})
    return res.status(200).json(product)

  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

export async function DeleteProduct (req, res)  {
  try {
    const {id} = req.params
    const product = await ProductModel.deleteOne({_id:id})
    return res.status(200).json(product) //verificar

  } catch (error) {
    res.status(500).json({message: error.message})
  }
};




export async function UpdateProduct (req, res)  {
  try {
    const {id} = req.params 
    const {name,description,category,price,stock,image} = req.body
    const product = await ProductModel.findOneAndUpdate({_id:id},{name,description,category,price,stock,image})
    if(!product){
      return res.status(404).json("producto no encontrado")
    }
     return res.status(200).json("producto actualizado exitosamente")

    } catch (error) {
    console.log(error)
  }
};