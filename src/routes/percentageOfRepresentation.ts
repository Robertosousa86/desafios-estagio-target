import { Router } from 'express';
import { BillingPercentageController } from '../controllers/BillingPercentageController';

const billingPercentage = new BillingPercentageController();

const router = Router();

router.get('/percentualderepresentacao', billingPercentage.handle);

export default router;
