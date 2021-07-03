# GitTag App

<p align="center">
  <img src="https://i.imgur.com/Lz2dlx9.png" width="200">
</p>

## Instalação
Caso tenha android você pode baixar o apk por aqui: [Google Drive](https://drive.google.com/file/d/18rVWxuRIbaWnu1_15UM4wSj3OjnHgvP2/view?usp=sharing) ou [OneDrive](https://udesc-my.sharepoint.com/:u:/g/personal/09845549985_edu_udesc_br/EWJQSXahGFhPj22udUEmabMBcAQPhPXvgJ4o1Y7wixGGGA?e=K14h7l). Caso tenha Iphone <del>sinto muito</del> você pode executar o projeto e usar seu celular como emulador, disponível no passo [Como executar](#como-executar)

## Sobre o projeto

Este projeto foi desenvolvido para o gerenciamento de repositórios com estrela do GitHub.

Toda a lógica dos componentes são extraídas para um arquivo externo. Exemplo: Componente Repositórios: `Repository.tsx`, a logica para filtrar os repositórios fica em `Repository.logic.ts`. Dessa forma facilita criar testes para essa função. Os testes ficam na mesma pasta dos componentes ou funções testado dessa forma: `Repository.logic.test.ts`.

Para o gerenciamento de estados globais foi utilizado o [Mobx](https://mobx.js.org/README.html). O principal fator da escolha dessa biblioteca foi a facilidade de uso. Diferente do redux onde é necessário fazer a configuração, criar actions, reducers..., no Mobx eu consigo criar um store e transformar ele em observável, e meus componentes são observadores e são atualizados sempre que meu store muda.

## Requisitos

- [x] Fazer autenticação e autorização de usuário;
- [x] Buscar todos os repositórios em que o usuário fornecido adicionou estrela;
- [x] Gerenciar tags de repositórios listados (por exemplo, adicionar, editar, excluir);
- [x] Filtrar repositórios por tags.


## Telas

<table>
	<tr>
		<th width="33.3%">
			Login/Registrar<br>
		</th>
		<th width="33.3%">
			Lista de repositórios
		</th>
	</tr>
	<tr><!-- Prevent zebra stripes --></tr>
	<tr>
		<td>
			<img width="618" src="https://i.imgur.com/tbJTI1b.gif">
		</td>
		<td>
			<img width="618" src="https://i.imgur.com/cVzolzG.gif">
		</td>
	</tr>
</table>

<table>
	<tr>
		<th width="33.3%">
			Repositório
		</th>
		<th width="33.3%">
			Configurações
		</th>
	</tr>
	<tr><!-- Prevent zebra stripes --></tr>
	<tr>
		<td>
			<img width="618" src="https://i.imgur.com/uNz6Nok.gif">
		</td>
		<td>
			<img width="618" src="https://i.imgur.com/FZgl0Pt.gif">
		</td>
	</tr>
</table>

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

Link para o backend: [Backend GitTag](https://github.com/gustavobonassa/gittag-backend)

## Testes

Todos os componentes e lógicas foram testados. O teste de cada componente ou lógica fica na mesma pasta que o componente testado.

Para rodar os testes:
```
yarn test
```

Vai aparecer uma tela assim:

<p align="center">
  <img src="https://i.imgur.com/WlD6zUj.png" width="500">
</p>

## Considerações

- A lógica que eu usei no backend pra armazenar os repositórios e tal não foi a melhor escolha. Dito isso, também não foi feito testes e foi tudo feito em JavaScript. Já que o prazo era curto, eu fiz o backend da forma mais simples que consegui e armazenei meus esforços para o Mobile.

- O backend só atualiza os repositórios com estrela quando faz login ou cria conta.

- Meu teclado não tem acento, coloquei depois, mas devo ter esquecido alguns lugares.

## Contato para Spam

Gustavo Bonassa - gustavo.bonassa1@gmail.com
