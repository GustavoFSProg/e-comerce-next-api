import express, {Request, Response} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const {PORT} = process.env

const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    return console.log( ` 🍌 Running App: ${PORT}`)
})


app.get("/", (req: Request, res: Response) => {
    return res.json( {message: ` 🍌 Running App!`})
})

export default app
