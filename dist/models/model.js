"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const convidadosSchema = new mongoose_1.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    }
});
const Convidados = (0, mongoose_1.model)('Convidados', convidadosSchema);
exports.default = Convidados;
