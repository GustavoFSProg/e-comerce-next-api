import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'
// import { CalcularPrecoFrete } from './Controllers/freteCorreios'
// import { calcularPrecoPrazo } from 'correios-brasil'
import {  getCEP } from './Controllers/freteCorreios'
// const { calcularPrecoPrazo } = require('correios-brasil');

import CorreiosBrasil, {
    calcularPrecoPrazo,
    consultarCep,
    rastrearEncomendas,
    CalcPrecoPrazo,
  } from 'correios-brasil'

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


    let args = {
        // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
        sCepOrigem: '81200100',
        sCepDestino: '21770200',
        nVlPeso: '1',
        nCdFormato: '1',
        nVlComprimento: '20',
        nVlAltura: '20',
        nVlLargura: '20',
        nCdServico:  ['04014', '04510'],  //Array com os códigos de serviço
        nVlDiametro: '0',
      };


      
    CalcPrecoPrazo(args).then((response: any) => {
        console.log(response);
      });


export default app
