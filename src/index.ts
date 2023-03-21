const somaWhile = () => {
  const INDICE: number = 13;
  let SOMA: number = 0;
  let K: number = 0;

  while (K < INDICE) {
    K = ++K;

    SOMA = SOMA + K;
  }

  return console.log(
    `Ao final do processamento, o valor da variável SOMA será ${SOMA}`
  );
};

somaWhile();
