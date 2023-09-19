"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteController = exports.getController = exports.postController = void 0;
const model_1 = __importDefault(require("../models/model"));
const postController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, idade } = req.body;
    try {
        const novosConvidados = new model_1.default({ nome, idade });
        yield novosConvidados.save();
        if (!novosConvidados) {
            return res.status(401);
        }
        return res.status(201).json({ novosConvidados });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.postController = postController;
const getController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaConvidados = yield model_1.default.find();
        if (!listaConvidados) {
            return res.status(401);
        }
        return res.status(200).json({ listaConvidados });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.getController = getController;
const deleteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome } = req.body;
    try {
        const convidado = yield model_1.default.findOne({ nome }).exec();
        if (!convidado) {
            return res.status(401);
        }
        yield model_1.default.deleteOne({ nome: convidado.nome }).exec();
        return res.status(204).json({ mensagem: "Convidado excluido" });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.deleteController = deleteController;
