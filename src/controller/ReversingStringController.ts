import { Request, Response } from 'express';
import { ReversingStringService } from '../service/ReversingStringService';

export class ReversingStringController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { myString } = request.body;

    const reversingService = new ReversingStringService();

    const reversedString = await reversingService.execute(myString);

    return response.status(200).json(reversedString);
  }
}
