import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes/routes';
require('dotenv').config();

const app = express();

app.use(helmet());
app.use(cors());

const PORT = process.env.PORT;
const MONGO_URI = process.env.DATABASE_URL || 'mongodb://localhost:27017/conviteDB';

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
