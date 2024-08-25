import express, {Request, Response} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'

dotenv.config()

const {PORT} = process.env

const app = express()

app.use(cors({
    origin: ["http://localhost:3000", "https://ecomerce-curso.netlify.app"]
}))
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
    return console.log( ` 🍌 Running App: ${PORT}`)
})

export default app
