import { readFile } from '../utils/readData';

export class HighestInvoiceService {
  async execute(): Promise<{ dia: number; valor: number }> {
    const invoiceData: Buffer = readFile('src/data/dados.json');

    const invoiceArray: { dia: number; valor: number }[] = JSON.parse(
      invoiceData.toString()
    );

    const highestValue = invoiceArray.reduce((prev, current) => {
      return prev.valor < current.valor ? current : prev;
    });

    return highestValue;
  }
}
