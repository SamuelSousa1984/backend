"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/controller");
const route = (0, express_1.Router)();
route.post('/convidados', controller_1.postController);
route.get('/lista', controller_1.getController);
route.delete('/excluir', controller_1.deleteController);
exports.default = route;
