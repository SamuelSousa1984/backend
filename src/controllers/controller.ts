import {Request, Response} from 'express';
import Model, { Convidados } from '../models/model';

export const postController = async (req:Request, res:Response) => {
    const { nome, idade } = req.body;

    try {
        const novosConvidados = new Model({ nome, idade });

        await novosConvidados.save()
        if(!novosConvidados) {
            return res.status(401);
        }
        return res.status(201).json({ novosConvidados });   
    } catch (error) {
        return res.status(500).json({ error })        
    }
}

export const getController = async (req:Request, res:Response) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    try {
        const listaConvidados = await Model.find();

        if (!listaConvidados) {
            return res.status(401)
        }

        return res.status(200).json({ listaConvidados });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export const deleteController = async (req:Request, res:Response) => {
    const { nome } = req.body;
    
    try {
        const convidado: Convidados | null = await Model.findOne({ nome }).exec();

        if(!convidado) {
            return res.status(401)
        }
        
        await Model.deleteOne({nome: convidado.nome}).exec();

        return res.status(204).json({ mensagem: "Convidado excluido" });
    } catch (error) {
        return res.status(500).json({ error });
    }
}