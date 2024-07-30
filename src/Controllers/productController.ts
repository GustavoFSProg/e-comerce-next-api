import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

async function CreateProduct(req: Request, res: Response) {
  try {
    const product = await prisma.products.create({
      data: {
        name: req.body.name,
        preco: Number(req.body.preco),
        descricao: req.body.descricao,
        quantity: Number(req.body.quantity),
        subtotal: Number(req.body.subtotal),
        imagem: req.body.imagem,
      },
    });

    return res.status(201).json({menssagem: ` Produto Criado com sucesso!`, product})
  } catch (error) {

    return res.status(400).json({menssagem: ` ERROR!`, error})
  }
}


async function GetAllProduct(req: Request, res: Response) {
    try {
      const data = await prisma.products.findMany();
  
      return res.status(201).json(data)
    } catch (error) {
  
      return res.status(400).json({menssagem: ` ERROR!`, error})
    }
  }

  export default {GetAllProduct, CreateProduct}