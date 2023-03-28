import request from 'supertest';
import app from '../src/app';

describe('Reversing String', () => {
  const getString = (myString: object) => {
    const result = request(app).get('/revertendostring');
    return result.send(myString);
  };

  it('Should be return "200" when request is Ok.', async () => {
    const myString = { myString: 'Oi' };

    const result = await getString(myString);

    expect(result.statusCode).toBe(200);
  });

  it('Should be return "iO" when the received string is "Oi".', async () => {
    const myString = { myString: 'Oi' };

    const result = await getString(myString);

    expect(result.body).toBe('iO');
  });

  it('Should be return "álO" when the received string is "Olá".', async () => {
    const myString = { myString: 'Olá' };

    const result = await getString(myString);

    expect(result.body).toBe('álO');
  });

  it('Should be return "xinÔ" when the received string is "Ônix".', async () => {
    const myString = { myString: 'Ônix' };

    const result = await getString(myString);

    expect(result.body).toBe('xinÔ');
  });

  it('Should be return "orraC" when the received string is "Carro".', async () => {
    const myString = { myString: 'Carro' };

    const result = await getString(myString);

    expect(result.body).toBe('orraC');
  });

  it('Should be return "GfEdCbA" when the received string is "AbCdEfG".', async () => {
    const myString = { myString: 'AbCdEfG' };

    const result = await getString(myString);

    expect(result.body).toBe('GfEdCbA');
  });

  it('Should be return "FEDCBA" when the received string is "ABCDEF".', async () => {
    const myString = { myString: 'ABCDEF' };

    const result = await getString(myString);

    expect(result.body).toBe('FEDCBA');
  });

  it('Should be return "soçapse moc gnirtS amU" when the received string is "Uma String com espaços".', async () => {
    const myString = { myString: 'Uma String com espaços' };

    const result = await getString(myString);

    expect(result.body).toBe('soçapse moc gnirtS amU');
  });
});
