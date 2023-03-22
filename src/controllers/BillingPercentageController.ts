import { Request, Response } from 'express';
import { BillingPercentageService } from '../services/BillingPercentageService';

export class BillingPercentageController {
  async handle(request: Request, response: Response) {
    const invoicing = request.body;

    const billingPercentage = new BillingPercentageService();

    const percentageOfRepresentation = await billingPercentage.execute(
      invoicing
    );

    return response.status(200).send(percentageOfRepresentation);
  }
}
