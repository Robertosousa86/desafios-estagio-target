import express from 'express';
import percentageOfRepresentation from './percentageOfRepresentation';

const router = express.Router();

router.use('/', percentageOfRepresentation);

export default router;
