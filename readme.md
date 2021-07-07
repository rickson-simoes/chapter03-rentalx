<h1>API - Aluguel de Carros</h1>

[![Package][Express-image]][Express-url] 
[![Technology][node-image]][node-url] 
[![Technology][typescript-image]][typescript-url] 


[Express-url]: https://www.npmjs.com/package/Express
[Express-image]: https://img.shields.io/badge/Express-green?style=for-the-badge&logo=Express&logoColor=black

[node-url]: https://nodejs.org/
[node-image]: https://img.shields.io/badge/NodeJS-green?style=for-the-badge&logo=Node-dot-js&logoColor=black

[typescript-url]: https://www.typescriptlang.org
[typescript-image]: https://img.shields.io/badge/Typescript-blue?style=for-the-badge&logo=TypeScript&logoColor=white

---
## Instruções para uso:

1º - yarn install

2º - yarn dev

---
# Rotas

## • Categorias
### POST `/categories`
*Criação de categoria.*
A rota deve receber `name` e `description` pelo corpo da requisição.
 
### POST `/categories/import`
*Importar arquivo CSV de categorias com nome e especificação.*
``Ex.: Sedan, carro confortavel e 4 portas``
Envio de arquivo multipart/form, com nome 'file'.

### GET `/categories`
*Verifica as categorias*
A rota exibe as categorias

## • Especificações

### POST `/specifications`
*Criação de especificação.*
A rota deve receber `name` e `description` pelo corpo da requisição.

