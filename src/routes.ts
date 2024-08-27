import express, {Request, Router, Response} from 'express'
import { create, get, showImages } from './Controllers/productController'
import { multerConfig } from './uploader'
import { getImagesProduct } from './Controllers/imagesController'

const routes = Router()

routes.get("/", (req: Request, res: Response) => {
    return res.json( {message: ` 🍌 Running App!`})
})

routes.get("/products", get )
routes.post("/create-product",  multerConfig,  create)

// images
routes.get("/products-images/:id", getImagesProduct )





export default routes