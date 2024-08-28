import express, {Request, Router, Response} from 'express'
import { create, get, getOneProduct, showImages } from './Controllers/productController'
import { multerConfig } from './uploader'
import { getImagesProduct } from './Controllers/imagesController'
import { CalcularPrecoFrete, getCEP } from './Controllers/freteCorreios'

const routes = Router()

routes.get("/", (req: Request, res: Response) => {
    return res.json( {message: ` 🍌 Running App!`})
})

routes.get("/products", get )
routes.post("/create-product",  multerConfig,  create)
routes.get("/profile/:id",  getOneProduct)

// images
routes.get("/products-images/:id", getImagesProduct )


routes.get("/cep",  getCEP)
// routes.get("/calc-cep",  CalcularPrecoFrete)



export default routes