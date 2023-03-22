import { Router } from 'express';
import { AboveAverageController } from '../controllers/AboveAverageController';
import { HighestInvoiceController } from '../controllers/HighestInvoiceController';
import { LowestInvoiceController } from '../controllers/LowestInvoiceController';

const lowestInvoice = new LowestInvoiceController();
const highestInvoice = new HighestInvoiceController();
const aboveAverage = new AboveAverageController();

const router = Router();

router.get('/menorvalor', lowestInvoice.handle);
router.get('/maiorvalor', highestInvoice.handle);
router.get('/acimadamediamensal', aboveAverage.handle);

export default router;
