"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes/routes"));
require('dotenv').config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const MONGO_URI = process.env.DATABASE_URL || '';
app.use(express_1.default.json());
mongoose_1.default.connect(MONGO_URI);
app.use(routes_1.default);
app.listen(PORT, () => {
    console.log('Server is up');
});
exports.default = app;
