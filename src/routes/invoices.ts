import { Router } from 'express';
import { HighestInvoiceController } from '../controllers/HighestInvoiceController';
import { LowestInvoiceController } from '../controllers/LowestInvoiceController';

const lowestInvoice = new LowestInvoiceController();
const highestInvoice = new HighestInvoiceController();

const router = Router();

router.get('/menorvalor', lowestInvoice.handle);
router.get('/maiorvalor', highestInvoice.handle);

export default router;
