# Desafios Target

![Alt text](https://s3.amazonaws.com/gupy5/production/companies/519/images/jobs/1338991/20211119050228341_picture.png 'Um desenho de dois jovens.')

## Sobre a Empresa

Há 20 anos vivenciamos intensamente as necessidades e oportunidades de mais de 300 distribuidores em todo o Brasil. Atendemos apenas com soluções próprias, 100% integradas entre si. Oferecemos serviços de implantação e suporte apoiados na especialização de quem atua exclusivamente nesse setor.

Somos parte essencial da cadeia de abastecimento, apoiando a distribuição de norte a sul do país. Isso nos permite conhecer e desenvolver soluções que alavancam os negócios de nossos clientes.

- +6k usuários
- +90k representantes e vendedores
- +150k diferentes produtos distribuídos
- +600k PDVs abastecidos
- +R$15bi em produtos faturados mensalmente

Conheça melhor a Target Sistemas!

[Facebook Target](https://www.facebook.com/targetsistemas 'Página do Facebook da Target.')

[Vimeo Target](https://www.vimeo.com/targetsistemas 'Página do Vimeo Target.')

## Descrição da vaga

Somos a **Target**, uma empresa de tecnologia focada em atender necessidades do mercado de distribuição! Buscamos entregar mais do que softwares de gestão, entregamos inteligência, automatização, bom relacionamento, e todo tipo suporte para nossos clientes, mantendo uma relação de proximidade e parceria!

Somos transparentes, bastante unidos, cooperativos, flexíveis, adoramos ideias novas e trabalhamos muito em equipe, muito mesmo! Então procuramos alguém que goste desse jeito Target de ser 😊

Então se você curte tecnologia, gosta de conversar, ter autonomia, ambiente dinâmico, flexível e de trabalhar com pessoas incríveis, vem com a gente!!

O Processo terá todas as etapas online!

## Sobre minhas respostas aos Desafios

Criei esse repositório com intuito de entregar os códigos de cada desafio. Irei utilizar `Typescript` para resolver os desafios e para uma melhor organização irei criar diferentes `branches` no meu repositório (ramificações de código), sendo que cada branch irá conter a resposta de um desafio.

**Podemos instalar as bibliotecas referentes a API através do comando npm:**

```bash
npm install
```

Boa sorte para Mim 😊

## Descrição do Desafio 3

Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:

- O menor valor de faturamento ocorrido em um dia do mês;
- O maior valor de faturamento ocorrido em um dia do mês;
- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

### IMPORTANTE:

- a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
- b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

## Executando os testes através da biblioteca Jest

Para executar os testes utilizamos o script:

```bash
npm run test
```

## Utilizando a API

Para testar os resultados por meio de requisições `HTTP` podemos utilizar ferramentas de `API Client` como `Postman` ou `Insomnia`. Para isso precisamos conectar o servidor, executando no terminal o script:

```bash
npm start
```

ou o servidor de desenvolvimento:

```bash
npm run dev
```

### Rotas

Cada resposta do desafio possui uma rota específica, são elas:

- http://localhost:3000/menorvalor
- http://localhost:3000/maiorvalor
- http://localhost:3000/acimadamediamensal

Essas rotas podem ser utilizadas em qualquer ferramenta `API Client`.

### Métodos

Requisições para a API devem seguir os padrões:

| Método |                   Descrição                    |
| :----: | :--------------------------------------------: |
| `GET`  | Retorna os valores calculados dos faturamentos |

### Respostas

| Método |            Descrição             |
| :----: | :------------------------------: |
| `200`  | Requisição executada com sucesso |
