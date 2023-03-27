import { readFile } from '../utils/readData';

export class AboveAverageService {
  async execute(): Promise<number> {
    const invoiceData: Buffer = readFile('src/data/dados.json');

    const invoiceArray: { dia: number; valor: number }[] = JSON.parse(
      invoiceData.toString()
    );

    const daysWithInvoice = invoiceArray.filter((item) => item.valor > 0);

    const averageValue =
      daysWithInvoice.reduce((total, item) => total + item.valor, 0) /
      daysWithInvoice.length;

    const daysAboveAverage = daysWithInvoice.filter(
      (item) => item.valor > averageValue
    );

    return daysAboveAverage.length;
  }
}
