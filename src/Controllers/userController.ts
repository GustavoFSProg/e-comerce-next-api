import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import md5 from "md5";

const db = new PrismaClient();

async function createUser(req: Request, res: Response) {
  try {
    const user = await db.users.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        cpf: req.body.cpf,
        password: String(
          md5(
            req.body.password,
            process.env.SECRET as string & { asBytes: true }
          )
        ),
      },
    });

    return res.status(201).json({ msg: "Usuário criado com sucesso!", user });
  } catch (error) {
    return res.status(400).json({ msg: "ERROR:", error });
  }
}

async function getUsers(req: Request, res: Response) {
  try {
    const data = await db.users.findMany();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ msg: "ERROR:", error });
  }
}

export default {createUser, getUsers}
