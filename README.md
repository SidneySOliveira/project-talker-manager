# project-talker-manager
Construção de uma API RESTful utilizando o node.js com operações de CRUD.

Mesmo sendo uma aplicação light buscou-se separar as funções das rotas dos endpoints e criar middlewares de validações para que fossem garantidos as especificidade de cada requisição conforme as regras necessárias.

O projeto inglobou os seguintes requisitos:

## 1 - Criar o endpoint GET `/talker`

 - A requisição deve retornar o status 200 e um array com todas as pessoas palestrantes cadastradas. Exemplo: 

```json
[
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Heloísa Albuquerque",
    "age": 67,
    "id": 2,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Ricardo Xavier Filho",
    "age": 33,
    "id": 3,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Marcos Costa",
    "age": 24,
    "id": 4,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
]
```

 - Caso não exista nenhuma pessoa palestrante cadastrada a requisição deve retornar o status 200 e um array vazio. Exemplo:

```json
  []
```
 
## 2 - Crie o endpoint GET `/talker/:id`

 - A requisição deve retornar o status 200 e uma pessoa palestrante com base no id da rota. Por exemplo, ao fazer uma requisição /talker/1, a resposta deve ser:

```json
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
```

 - Caso não seja encontrada uma pessoa palestrante com base no id da rota, a requisição deve retornar o status 404 com o seguinte corpo:</summary><br />

```json  
  {
    "message": "Pessoa palestrante não encontrada"
  }
```

## 3 - Crie o endpoint POST `/login`

O endpoint deverá receber no corpo da requisição os campos `email` e `password` e retornar um token aleatório de 16 caracteres. Este token será utilizado pelas requisições dos próximos requisitos do projeto.

 - O corpo da requisição deverá ter seguinte formato:

```json
  {
    "email": "email@email.com",
    "password": "123456"
  }
```

## 4 - Adicione as validações para o endpoint `/login`

Os campos recebidos pela requisição devem ser validados e, caso os valores sejam inválidos, o endpoint deve retornar o código de `status 400` com a respectiva mensagem de erro ao invés do token.

    As regras de validação são:

  - o campo `email` é obrigatório;
  - o campo `email` deve ter um email válido;
  - o campo `password` é obrigatório;
  - o campo `password` deve ter pelo menos 6 caracteres.

## 5 - Crie o endpoint POST `/talker`

## 6 - Crie o endpoint PUT `/talker/:id`

## 7 - Crie o endpoint DELETE `/talker/:id`
  
## 8 - Crie o endpoint GET `/talker/search?q=searchTerm`

O docker-compose já veio configurado como padronização para a correção deste projeto pela TRYBE, o projeto de criação e configuração de um docker-compose foi realizado por mim em um projeto anterior.