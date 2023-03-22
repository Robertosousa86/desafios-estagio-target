import express from 'express';
import percentageOfrepresentation from './percentageOfRepresentation';

const router = express.Router();

router.use('/', percentageOfrepresentation);

export default router;
