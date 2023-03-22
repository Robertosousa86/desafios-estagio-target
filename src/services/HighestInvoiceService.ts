import { readFile } from '../utils/readData';

export class HighestInvoiceService {
  async execute(): Promise<{ dia: number; valor: number }> {
    const data: string = 'src/data/dados.json';

    const invoiceData: Buffer = readFile(data);

    const invoiceArray: { dia: number; valor: number }[] = JSON.parse(
      invoiceData.toString()
    );

    const highestValue = invoiceArray.reduce((prev, current) => {
      return prev.valor < current.valor ? current : prev;
    });

    return highestValue;
  }
}
