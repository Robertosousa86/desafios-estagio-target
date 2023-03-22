export class BillingPercentageService {
  async execute(invoicing: object): Promise<object> {
    const total = Object.values(invoicing).reduce((acc, curr) => acc + curr);

    const percentages: object = {};

    for (const states in invoicing) {
      percentages[states] = Number(
        ((invoicing[states] / total) * 100).toFixed(2)
      );
    }

    return percentages;
  }
}
