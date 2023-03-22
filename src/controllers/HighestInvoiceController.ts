import { Request, Response } from 'express';
import { HighestInvoiceService } from '../services/HighestInvoiceService';

export class HighestInvoiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const highestInvoiceService = new HighestInvoiceService();

    const highestInvoiceData = await highestInvoiceService.execute();

    return response.status(200).send(highestInvoiceData);
  }
}
