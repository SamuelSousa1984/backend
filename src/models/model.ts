import { Schema,Document, model } from 'mongoose';

//Model do banco de dados bem simples

export interface Convidados extends Document {
    nome: string
    idade: number
}

const convidadosSchema = new Schema ({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    }
});

const Convidados = model<Convidados>('Convidados', convidadosSchema);

export default Convidados;