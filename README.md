# Coodesh - Backend Challenge Space Flight News
**Version 1.0.0**

This is a challenge by [Coodesh](https://coodesh.com/)

Projeto criado para cumprir o desafio de backend da Coodesh. Busquei usar as praticas mais atuais e que garantam a eficiência e escalabilidade. Se você quer construir sua própria versão da API continue lendo, caso contrário leia a documentação integrada na rota "/docs" e aprenda como usá-la.
## Conteúdos
* [Começando](#começando)
* [Instalação](#instalação)
* [Instalação com docker](#instalação-com-docker)
* [Modo de usar](#modo-de-usar)
* [Construído Com](#construído-com)
* [Autor](#autor)

##  Começando
Essas instruções fornecerão uma cópia do projeto instalado e funcionando em sua máquina local para fins de desenvolvimento e teste.

## Instalação
Execute os comandos a seguir e você terá uma versão local do projeto em execução.
```bash
$ git clone https://github.com/jonathasgouv/coodesh-backend-challenge
$ cd coodesh-backend-challenge/
$ yarn
```
Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente. Pronto, agora basta iniciar o server de desenvolvimento com:

```bash
$ yarn dev
```

:grinning:

Para popular a database siga o esquema de quotes disponível na documentação integrada em "/docs".

## Instalação com docker
Execute os comandos a seguir e você terá uma versão local do projeto em execução.
```bash
$ docker run —name redis -p 6379:6379 -d -t redis:alpine
$ docker run -p 3333:3333 jonathasgouv/coodesh-spaceflightnewsapi          
```

Pronto, você já tem o projeto rodando.
:grinning:

Para popular a database siga o esquema de quotes disponível na documentação integrada em "/docs".

## Modo de usar
Confira os endpoints disponíveis na documentação integrada em "/docs".

## Apresentação
Uma explicação do projeto em vídeo pode ser vista em [aqui](https://www.loom.com/embed/896fd2f19e1f4d40b94b7bd606ec3e8e)

## Construído com
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Redis](https://redis.io/)
* [Docker](https://www.docker.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Jest](https://jestjs.io/)

## Autor
* [Jônathas Gouveia](https://github.com/jonathasgouv/)

## Licença
Esse projeto está licenciado sob a licença GPL-3.0 - veja o arquivo [LICENSE](https://github.com/jonathasgouv/coodesh-backend-challenge/blob/main/LICENSE) para mais detalhes.