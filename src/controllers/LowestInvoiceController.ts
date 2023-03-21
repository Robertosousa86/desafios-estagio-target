import { Request, Response } from 'express';
import { LowestInvoiceService } from '../services/LowestInvoiceService';

export class LowestInvoiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const lowestInvoiceService = new LowestInvoiceService();

    const lowestInvoiceData = await lowestInvoiceService.execute();

    return response.status(200).send(lowestInvoiceData);
  }
}
