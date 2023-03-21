import { readFile } from '../utils/readData';

export class LowestInvoiceService {
  async execute(): Promise<{ dia: number; valor: number }> {
    const data: string = 'src/data/dados.json';

    const invoiceData: Buffer = readFile(data);

    const invoiceArray: { dia: number; valor: number }[] = JSON.parse(
      invoiceData.toString()
    );

    const lowestValue = invoiceArray.reduce((prev, current) => {
      return prev.valor > current.valor ? current : prev;
    });

    return lowestValue;
  }
}
