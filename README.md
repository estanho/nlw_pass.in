# Backend pass.in [*NodeJS*]

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais** realizado na NLW Unite. A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição. Os participantes inscritos podem emitir uma credencial para check-in no dia do evento. O sistema fará um scan da credencial do participantes para permitir a entrada no evento.

## Requisitos

#### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [x] O organizador deve poder visualizar a lista de participantes;
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição;
- [x] O participante deve poder realizar check-in no evento;

#### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;
- [x] O participante só pode se inscrever em eventos com vagas disponíveis;
- [x] O participante só pode realizar check-in em um evento uma única vez;

#### Requisitos não-funcionais

- [ ] O check-in no evento será realizado através de um QRCode;

---
## Tecnologías utilizadas:

- [NodeJS](https://nodejs.org/en)
- [Fastify](https://fastify.dev/docs/latest/)
- [Prisma](https://www.prisma.io/)

---
## Instalação
Após baixar o código é necessário instalar os pacotes com *npm* e realizar o migrate do banco de dados.
```
> npm i
> npm run db:migrate
> npm run dev
```
O projeto utilizou o [@fastify/swagger](https://github.com/fastify/fastify-swagger) para auxiliar o uso da API. A documentação do swagger está disponível na rota **/docs**.

---
## Licença

[LICENSE](LICENSE) & [Rocketseat](https://rocketseat.com.br/)

---
:shipit:
