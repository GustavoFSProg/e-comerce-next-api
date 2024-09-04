// import {
//     calcularPrecoPrazo,
//     rastrearEncomendas,
//   } from 'correios-brasil';

  import { consultarCep,  } from 'correios-brasil';
import { Request, Response } from 'express';
import { isReadonlyKeywordOrPlusOrMinusToken } from 'typescript';
// import { calcularPrecoPrazo } from 'correios-brasil/dist';

// let dados = ""

let dados: any = ""

export  async function getCEP(req: Request, res: Response){

    const CEP = req.body.CEP
      // Cep pode ser String ou Number
      // const cep = CEP; // 21770200 , '21770-200', '21770 200'.... qualquer um formato serve
      
  await consultarCep(CEP).then(response => {
        // console.log(response);
      dados = response
        // return res.status(200).json(response)
      });

      console.log(dados);


      return res.status(200).send({dbase: dados})

      

  }

  
//   export   function CalcularPrecoFrete(){
    
  
//   let args = {
//     // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
//     sCepOrigem: '81200100',
//     sCepDestino: '93340060',
//     nVlPeso: '1',
//     nCdFormato: '1',
//     nVlComprimento: '20',
//     nVlAltura: '20',
//     nVlLargura: '20',
//     nCdServico: ['04014'], //Array com os códigos de serviço
//     nVlDiametro: '1',
//   };
  
//     calcularPrecoPrazo(args).then(response => {
//    console.log(response)
//   });
  
// }

//   export default {getCEP, CalcularPrecoFrete  }