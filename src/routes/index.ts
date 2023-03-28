import express from 'express';
import reversingStringRoute from './reversingString';

const router = express.Router();

router.use('/', reversingStringRoute);

export default router;
