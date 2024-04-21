import { ProductModel } from "../models/Product.js"
import { productos } from "../db/db.js"


export async function GetAllProducts  (req, res)  {
  //res.status(200).json(productos)
  try {
    
    const products = await ProductModel.find()
    return res.status(200).json(products)


  } catch (error) {
    console.log("error")
  }
};


export const CreateProduct = async (req, res) => {
  //console.log(req.body)
  //const {nombre, descripcion, categoria, precio, imagen} = req.body
  try {
  const body = await req.body
  console.log("----BODY----", body);
  const product = await ProductModel.create({...req.body})
  return res.status(201).json(product)


  } catch (error) {
    console.log("error",error)
  }
//try {
  //const newProduct = await productos.create({
    //nombre: nombre,
    //descripcion: descripcion,
    //categoria: categoria,
    //precio: precio,
    //imagen: imagen,
  //})
  //res.status(201).json({message: "el producto se ha creado con exito"})
//} catch (error) {
  //return res.status(500).json({message: error})
//}

}

export async function GetProductById (req, res)  {
  const { id } = req.params
  //const productFound = productos.find(product => product.id === id)

  //if(productFound) {
  //  return res.status(200).json(productFound)
  //}
  //res.status(404).json({message: "no hemos podido encontrar los productos"})
  
  //console.log(productFound)
  //console.log(id)
  try {
    
    const product = await ProductModel.find({_id:id})
    return res.status(200).json(product)

  } catch (error) {
   console.log("error")
  }
};

export async function DeleteProduct (req, res)  {
  try {
    const {id} = req.params
    const product = await ProductModel.deleteOne({_id:id})
    return res.status(200).json("producto borrado exitosamente")


  } catch (error) {
    console.log(error)
  }
};

export async function UpdateProduct (req, res)  {
  try {
    const {id} = req.params 
    const {name,description} = req.body
    const product = await ProductModel.findOneAndUpdate({_id:id},{name,description})
    if(!product){
      return res.status(404).json("producto no encontrado")
    }
     return res.status(200).json("producto actualizado exitosamente")


  } catch (error) {
    console.log("error")
  }
};