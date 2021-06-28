# GitTag App

<p align="center">
  <img src="https://i.imgur.com/Lz2dlx9.png" width="200">
</p>

## Instalação
Caso tenha android você pode baixar o apk por aqui: [Google Drive](https://drive.google.com/file/d/1fsprSDjwwFjtf2_K2FzB8PuR-wl_bCT9/view?usp=sharing) ou [OneDrive](https://udesc-my.sharepoint.com/:u:/g/personal/09845549985_edu_udesc_br/ES0lYe9N5HxDjED4a-gkaNkBs_7egJ7OTwnDE7t_SrxLaw?e=tSqMn9). Caso tenha Iphone <del>sinto muito</del> você pode executar o projeto e usar seu celular como emulador, disponível no passo [Como executar](#como-executar)

## Sobre o projeto

Este projeto foi desenvolvido para o gerenciamento de repositórios com estrela do GitHub.

Toda a lógica dos componentes são extraídas para um arquivo externo. Exemplo: Componente Repositórios: `Repository.tsx`, a logica para filtrar os repositórios fica em `Repository.logic.ts`. Dessa forma facilita criar testes para essa função. Os testes ficam na mesma pasta dos componentes ou funções testado dessa forma: `Repository.logic.test.ts`.

Para o gerenciamento de estados globais foi utilizado o [Mobx](https://mobx.js.org/README.html). O principal fator da escolha dessa biblioteca foi a facilidade de uso. Diferente do redux onde é necessário fazer a configuração, criar actions, reducers..., no Mobx eu consigo criar um store e transformar ele em observável, e meu componentes são observadores e são atualizados sempre que meu store muda.

## Requisitos

- [x] Fazer autenticação e autorização de usuário;
- [x] Buscar todos os repositórios em que o usuário fornecido adicionou estrela;
- [x] Gerenciar tags de repositórios listados (por exemplo, adicionar, editar, excluir);
- [x] Filtrar repositórios por tags.


## Telas

### Login/Registrar

Nessa tela você pode fazer login ou se registrar, o backend vai identificar se seu nome de usuário do GitHub já possui uma conta.

<p align="center">
  <img src="https://i.imgur.com/tmULRVt.gif" width="300">
</p>

### Lista de repositórios

Essa tela lista todos os seus repositórios marcados com estrela no GitHub e também suas Tags adicionadas

<p align="center">
  <img src="https://i.imgur.com/cVzolzG.gif" width="300">
</p>

### Repositório

Essa tela mostra as informações de um único repositório e permite adicionar ou remover Tags

<p align="center">
  <img src="https://i.imgur.com/uNz6Nok.gif" width="300">
</p>

### Configurações

Essa tela permite alterar o tema do aplicativo e tambem sair da sua conta

<p align="center">
  <img src="https://i.imgur.com/FZgl0Pt.gif" width="300">
</p>

## <a id="como-executar"></a>Como executar

1 - Instale o [expo-cli](https://docs.expo.io/workflow/expo-cli/)

```
npm install -g expo-cli
```

2 - Instale as dependencias do projeto utilizando [yarn](https://yarnpkg.com/):
```
yarn
```

3 - Inicie o projeto:
```
expo start
```

Voce pode rodar um emulador ou baixar o app Expo Go no seu celular e ler o QR Code que vai aparecer na tela.

Link para o backend: [Backend GitTag]()

Para rodar os testes:
```
yarn test
```

## Consideracoes

- A lógica que eu usei no backend pra armazenar os repositórios e tal não foi a melhor escolha. Dito isso, também não foi feito testes e foi tudo feito em JavaScript. Já que o prazo era curto, eu fiz o backend da forma mais simples que consegui e armazenei meus esforços para o Mobile.

- Faltou varios testes para componentes e telas por falta de tempo. (Vou tentar fazer ainda essa semana, mesmo que ja tenham avaliado)

- O backend só atualiza os repositórios com estrela quando faz login ou cria conta

- Falta adicionar comentários no código

## Contato para Spam

Gustavo Bonassa - gustavo.bonassa1@gmail.com
