import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import md5 from "md5";
import { cpf } from 'cpf-cnpj-validator'; 

const db = new PrismaClient();

async function createUser(req: Request, res: Response) {
  try {

    const num = req.body.cpf
    
    if (cpf.isValid(num)){

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

    return res.status(201).json({ msg: "Usuário criado com sucesso! CPF válido!", user });

    }else{
      return res.send({msg: "CPF INVÁLIDO!"})

    }
     
    // // formata o número gerado
    // cpf.format(num);
    // // #=> 256.344.287-77

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

async function Login(req: Request, res: Response) {
  try {
    const data: any = await db.users.findFirst({
      where:{email: req.body.email,
        password: String(
          md5(
            req.body.password,
            process.env.SECRET as string & { asBytes: true }
          )
        )

       }
    });

    return res.status(200).json({msg:`Login Efetuado com sucesso!:${data.email}`});
  } catch (error) {
    return res.status(400).json({ msg: "ERROR:", error });
  }
}

export default {createUser, getUsers, Login}
