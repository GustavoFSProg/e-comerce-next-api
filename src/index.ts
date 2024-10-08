import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'
// import { CalcularPrecoFrete } from './Controllers/freteCorreios'
// import { calcularPrecoPrazo } from 'correios-brasil'
import {  getCEP } from './Controllers/freteCorreios'


dotenv.config()

const {PORT} = process.env

const app = express()

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5173","https://ecomerce-curso.netlify.app"]
}))
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
    return console.log( ` 🍌 Running App: ${PORT}`)})

    //   CalcularPrecoFrete()
 
    // getCEP('93340040')


export default app
