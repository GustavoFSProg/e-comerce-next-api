// import {
//     calcularPrecoPrazo,
//     rastrearEncomendas,
//   } from 'correios-brasil';

  import { consultarCep,  } from 'correios-brasil';
import { Request, Response } from 'express';
import { calcularPrecoPrazo } from 'correios-brasil/dist';

export  function getCEP(){
      
      // Cep pode ser String ou Number
      const cep = '93340060'; // 21770200 , '21770-200', '21770 200'.... qualquer um formato serve
      
      consultarCep(cep).then(response => {
        console.log(response);
      });

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