import express, {Request, Router, Response} from 'express'
import productController from './Controllers/productController'
import { multerConfig } from './uploader_old'

const routes = Router()

routes.get("/", (req: Request, res: Response) => {
    return res.json( {message: ` 🍌 Running App!`})
})


routes.get("/products",  productController.GetAllProduct)
routes.post("/create-product",  multerConfig,  productController.CreateProduct)




export default routes