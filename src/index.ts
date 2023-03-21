export const fibonacci = (num: number): string => {
  let a: number = 0;
  let b: number = 1;
  let c: number = 0;

  if (num === 0) {
    return `O número ${num} pertence a sequência de Fibonacci.`;
  }

  while (b <= num) {
    c = a + b;
    a = b;
    b = c;

    if (b === num) return `O número ${num} pertence a sequência de Fibonacci.`;
  }

  return `O número ${num} não pertence a sequência de Fibonacci.`;
};
