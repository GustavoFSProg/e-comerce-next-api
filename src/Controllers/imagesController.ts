import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { convertBufferToString, uploader } from "../uploader";
import { v2 } from "cloudinary";

const db = new PrismaClient();

export async function getImagesProduct(req: Request, res: Response) {
  try {
    const data = await db.images.findMany({
      where: { idProduto: req.params.id },
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error);
  }
}
