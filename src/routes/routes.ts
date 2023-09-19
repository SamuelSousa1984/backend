import { Router } from 'express';
import {postController, getController, deleteController} from '../controllers/controller';

const route = Router();

route.post('/convidados', postController);
route.get('/lista', getController);
route.delete('/excluir', deleteController)

export default route;