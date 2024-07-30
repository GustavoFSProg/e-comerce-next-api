import express, {Request, Router, Response} from 'express'
import productController from './Controllers/productController'

const routes = Router()

routes.get("/", (req: Request, res: Response) => {
    return res.json( {message: ` 🍌 Running App!`})
})


routes.get("/products", productController.GetAllProduct)
routes.post("/create-product", productController.CreateProduct)

export default routes