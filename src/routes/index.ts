import express from 'express';
import invoiceRoutes from './invoices';

const router = express.Router();

router.use('/', invoiceRoutes);

export default router;
