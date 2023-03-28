import { Router } from 'express';
import { ReversingStringController } from '../controller/ReversingStringController';

const reversingString = new ReversingStringController();

const router = Router();

router.get('/revertendostring', reversingString.handle);

export default router;
