import { Request, Response } from 'express';
import { AboveAverageService } from '../services/AboveAverageService';

export class AboveAverageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const aboveAverageService = new AboveAverageService();

    const aboveAverageData = await aboveAverageService.execute();

    return response.status(200).json(aboveAverageData);
  }
}
