import request from 'supertest';
import app from '../src/app';

describe('Abouve Average', () => {
  it('Should be return status code "200" when the request is ok.', async () => {
    const result = await request(app).get('/acimadamediamensal');

    expect(result.statusCode).toBe(200);
  });

  it('Should be return "10" when averaging has been completed.', async () => {
    const result = await request(app).get('/acimadamediamensal');

    expect(result.body).toBe(10);
  });
});

describe('Lowest Invoice', () => {
  it('Should be return status code "200" when the request is ok.', async () => {
    const result = await request(app).get('/menorvalor');

    expect(result.statusCode).toBe(200);
  });

  it('Should be return "{ dia: 14, valor: 373.7838 }" when the lowest value is found.', async () => {
    const result = await request(app).get('/menorvalor');

    expect(result.body).toStrictEqual({ dia: 14, valor: 373.7838 });
  });
});

describe('Highest Invoice', () => {
  it('Should be return status code "200" when the request is ok.', async () => {
    const result = await request(app).get('/maiorvalor');

    expect(result.statusCode).toBe(200);
  });

  it('Should be return "{ dia: 16, valor: 48924.2448 }" when the highest value is found.', async () => {
    const result = await request(app).get('/maiorvalor');

    expect(result.body).toStrictEqual({ dia: 16, valor: 48924.2448 });
  });
});
