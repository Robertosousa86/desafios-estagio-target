import { Router } from 'express';
import { LowestInvoiceController } from '../controllers/LowestInvoiceController';

const lowestInvoice = new LowestInvoiceController();

const router = Router();

router.get('/menorvalor', lowestInvoice.handle);

export default router;
