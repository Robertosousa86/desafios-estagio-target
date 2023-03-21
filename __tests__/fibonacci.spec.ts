import { fibonacci } from '../src';

// 0, 1, 2, 3, 5, 8, 13, 21, 34, 55...  Dez primeiros números pertencentes a sequência de Fibonacci.

describe('Pertence a Fibonacci', () => {
  it('Should be return "O número 0 pertence a sequência de Fibonacci." when num is equal 0.', () => {
    const num: number = 0;

    expect(fibonacci(num)).toBe(
      'O número 0 pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 1 pertence a sequência de Fibonacci." when num is equal 1.', () => {
    const num: number = 1;

    expect(fibonacci(num)).toBe(
      'O número 1 pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 2 pertence a sequência de Fibonacci." when num is equal 2.', () => {
    const num: number = 2;

    expect(fibonacci(num)).toBe(
      'O número 2 pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 3 pertence a sequência de Fibonacci." when num is equal 3.', () => {
    const num: number = 3;

    expect(fibonacci(num)).toBe(
      'O número 3 pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 5 pertence a sequência de Fibonacci." when num is equal 5.', () => {
    const num: number = 5;

    expect(fibonacci(5)).toBe('O número 5 pertence a sequência de Fibonacci.');
  });

  it('Should be return "O número 8 pertence a sequência de Fibonacci." when num is equal 8.', () => {
    const num: number = 8;

    expect(fibonacci(8)).toBe('O número 8 pertence a sequência de Fibonacci.');
  });

  it('Should be return "O número 13 pertence a sequência de Fibonacci." when num is equal 13.', () => {
    const num: number = 13;

    expect(fibonacci(13)).toBe(
      'O número 13 pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 21 pertence a sequência de Fibonacci." when num is equal 21.', () => {
    const num: number = 21;

    expect(fibonacci(21)).toBe(
      'O número 21 pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 34 pertence a sequência de Fibonacci." when num is equal 34.', () => {
    const num: number = 34;

    expect(fibonacci(34)).toBe(
      'O número 34 pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 55 pertence a sequência de Fibonacci." when num is equal 55.', () => {
    const num: number = 55;

    expect(fibonacci(55)).toBe(
      'O número 55 pertence a sequência de Fibonacci.'
    );
  });
});

// 4, 6, 7, 9, 10, 11, 12, 14, 15, 16... Dez primeiros números que não pertencem a sequência de Fibonacci.

describe('Não pertence a Fibonacci', () => {
  it('Should be return "O número 4 não pertence a sequência de Fibonacci." when num is equal 4.', () => {
    const num: number = 4;

    expect(fibonacci(num)).toBe(
      'O número 4 não pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 6 não pertence a sequência de Fibonacci." when num is equal 6.', () => {
    const num: number = 6;

    expect(fibonacci(num)).toBe(
      'O número 6 não pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 7 não pertence a sequência de Fibonacci." when num is equal 7.', () => {
    const num: number = 7;

    expect(fibonacci(num)).toBe(
      'O número 7 não pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 9 não pertence a sequência de Fibonacci." when num is equal 9.', () => {
    const num: number = 9;

    expect(fibonacci(num)).toBe(
      'O número 9 não pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 10 não pertence a sequência de Fibonacci." when num is equal 10.', () => {
    const num: number = 10;

    expect(fibonacci(num)).toBe(
      'O número 10 não pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 11 não pertence a sequência de Fibonacci." when num is equal 11.', () => {
    const num: number = 11;

    expect(fibonacci(num)).toBe(
      'O número 11 não pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 12 não pertence a sequência de Fibonacci." when num is equal 12.', () => {
    const num: number = 12;

    expect(fibonacci(num)).toBe(
      'O número 12 não pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 14 não pertence a sequência de Fibonacci." when num is equal 14.', () => {
    const num: number = 14;

    expect(fibonacci(num)).toBe(
      'O número 14 não pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 15 não pertence a sequência de Fibonacci." when num is equal 15.', () => {
    const num: number = 15;

    expect(fibonacci(num)).toBe(
      'O número 15 não pertence a sequência de Fibonacci.'
    );
  });

  it('Should be return "O número 16 não pertence a sequência de Fibonacci." when num is equal 16.', () => {
    const num: number = 16;

    expect(fibonacci(num)).toBe(
      'O número 16 não pertence a sequência de Fibonacci.'
    );
  });
});
