import { readFile } from '../utils/readData';

export class LowestInvoiceService {
  async execute(): Promise<{ dia: number; valor: number }> {
    const invoiceData: Buffer = readFile('src/data/dados.json');

    const invoiceArray: { dia: number; valor: number }[] = JSON.parse(
      invoiceData.toString()
    );

    const daysWithInvoice = invoiceArray.filter((item) => item.valor > 0);

    const lowestValue = daysWithInvoice.reduce((prev, current) => {
      return prev.valor > current.valor ? current : prev;
    });

    return lowestValue;
  }
}
