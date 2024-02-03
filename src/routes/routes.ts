import { Router } from 'express';
import {postController, getController, deleteController} from '../controllers/controller';

const route = Router();

//Rotas exploradas pela aplicação frontend

route.post('/convidados', postController);
route.get('/lista', getController);
route.delete('/excluir', deleteController)

export default route;