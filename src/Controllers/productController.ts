import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { convertBufferToString, uploader } from "../uploader";
import { v2 } from "cloudinary";

const prisma = new PrismaClient();

async function CreateProduct(req: Request, res: Response) {
  try {
    v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    if (req.files === undefined)
      return res
        .status(400)
        .json({ error: "Error converting buffer to string" });

    const products: any = [];



    for (const file of req.files as unknown as any[]) {
      const bufferToString = convertBufferToString(file)

      const { secure_url, buffr } = await uploader.upload(bufferToString || '')
      
      console.log(req.files)

      const product = await prisma.products.create({
        data: {
          name: req.body.name,
          preco: Number(req.body.preco),
          descricao: req.body.descricao,
          quantity: Number(req.body.quantity),
          subtotal: Number(req.body.subtotal),
          imagem: secure_url,
        },
      })

      products.push(product)
    }

    

    return res
      .status(201)
      .json({ menssagem: ` Produto Criado com sucesso!`, products });
  } catch (error) {
    return res.status(400).json({ menssagem: ` ERROR!`, error });
  }
}

async function GetAllProduct(req: Request, res: Response) {
  try {
    const data = await prisma.products.findMany();

    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ menssagem: ` ERROR!`, error });
  }
}

export default { GetAllProduct, CreateProduct };
