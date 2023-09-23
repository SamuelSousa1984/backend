import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/routes';
require('dotenv').config();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    'optionsSuccessStatus': 204
}))
const PORT = process.env.PORT;
const MONGO_URI = process.env.DATABASE_URL || '';

app.use(express.json());

mongoose.connect(MONGO_URI);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'erro na conexão ao MongoDB'));
db.once('open', () => {
    console.log('Conexão bem sucedida')
})

app.use(routes);

app.listen(PORT, () => {
    console.log('Server is up');
})

export default app
