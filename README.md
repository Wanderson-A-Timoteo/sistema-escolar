<h1 align="center">
    🎓 Sistema Escolar
</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-executar aplicação">Executar Aplicação</a>
  
</p>

<br>

## 💻 Projeto

Bem-vindo ao repositório do **Sistema Escolar**, uma aplicação web front-end desenvolvida em **React.js**. Este projeto foi construído para gerenciar o cadastro e a listagem de alunos e livros, apresentando também um dashboard e suporte a Tema Claro/Escuro (Dark Mode). 💜

> Aplicação com deploy automatizado no GitHub Pages.

🔗 **Demo Online:** [sistema-escolar.github.io](https://wanderson-a-timoteo.github.io/sistema-escolar/)

<br>

## 🚀 Funcionalidades

- **Home & Dashboard:** Visão geral com cartões de acesso rápido.
- **Gestão de Alunos:**
  - Cadastro de novos alunos.
  - Listagem dinâmica de alunos matriculados consumindo dados simulados.
  - Exclusão de alunos da lista na sessão atual.
- **Biblioteca:** Listagem em formato de grade (grid) dos livros disponíveis no acervo da escola.
- **Dark Mode Global:** Alternância fluida entre tema claro e escuro, controlada por variáveis CSS e preservada através de propriedades globais (Context/State).


## 🛠️ Tecnologias Utilizadas

- **React.js** (Hooks: `useState`, `useEffect`)
- **React Router DOM** (Navegação SPA com `HashRouter`)
- **React Icons** (SVG Icons)
- **CSS Modules** (Estilização em escopo local e variáveis globais)
- **Fetch API** (Consumo de arquivo JSON estático)
- **GitHub Pages** (Hospedagem)

<br>

## Executar Aplicação

## 🔥 Executando Localmente a Aplicação

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

### 🌀 Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

#### ❗️ Instalando as Dependências (via Windows):

Abre o cmd (caso esteja utilizando o Windows) navegue até o local onde você clonou o projeto

```
cd "C:\Users\NomeDoComputador\Documents\clonedoprojeto"
```

Depois, quando estiver na pasta do projeto, basta acessar o projeto na pasta `sistema-escolar` digitar no cmd a seguinte instrução: **(dentro da pasta `sistema-escolar` do projeto clonado)**

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas e definidas no arquivo package.json:

- `node_modules` - que contêm os packages do npm que precisará para o projeto.

#### 💨 Executando a Aplicação

Bom, agora **(dentro da pasta `sistema-escolar` do projeto clonado)** abra um terminal para o projeto ser executado e digite:

```
npm start
```

Pronto! dessa forma o projeto estará rodando localmente em sua maquina, acesse:
```
http://localhost:3000/sistema-escolar
```
<br>

### 🚩 Tenho Dúvidas... O que fazer?

Caso tenham dúvidas sobre o código do projeto, sintam-se a vontade em abrir uma **[ISSUE AQUI](https://github.com/Wanderson-A-Timoteo/sistema-escolar/issues)**. Assim que possível, estarei respondendo as todas as dúvidas que tiverem!

<br>

## 🌐 Arquitetura de Deploy (GitHub Pages)

Este projeto foi configurado para ser hospedado gratuitamente no GitHub Pages. Para superar as limitações de servidores estáticos e rotas no React, a seguinte arquitetura foi aplicada:

### Instalar o pacote de dependência `gh-pages`

```bash
npm install gh-pages --save-dev
```

### Adicione o campo homepage no package.json

Ele informa ao React onde o app será hospedado, abra o arquivo `package.json` e adicione logo no início, ele deve ficar logo depois do `"private": true`, antes de `"dependencies"`.
Assim:

```json
{
  "name": "sistema-escolar",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://wanderson-a-timoteo.github.io/sistema-escolar"
```



### Adicionar os scripts `predeploy` e `deploy` 

Ainda no `package.json`, dentro de **scripts** junto com os outros.
Fica assim:


```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "backend": "json-server --watch db.json --port 5001",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "dev": "concurrently \"npm start\" \"npm run backend\"",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### Manipulação de Dados Estáticos (db.json)

Como o GitHub Pages não roda servidores Node.js em background (como o `json-server`), o arquivo de banco de dados (`db.json`) foi movido para a pasta `/public`. O consumo dos dados é feito via fetch apontando para a variável de ambiente pública do React:

```Javascript
fetch(process.env.PUBLIC_URL + "/db.json")
```

### 🛠️ O problema do React Router no GitHub Pages

O GitHub Pages não suporta rotas do tipo `/alunos`, `/dashboard`, etc.
Ele só serve arquivos estáticos.
Então, quando você acessa:

```
https://seuusuario.github.io/sistema-escolar/alunos
```
O GitHub tenta buscar um arquivo físico chamado:

```
/alunos/index.html
```
e isso não existe → **Erro 404**.

### ✅ A solução: usar `HashRouter` em vez de `BrowserRouter`

O **HashRouter** funciona assim:

```
https://seuusuario.github.io/sistema-escolar/#/alunos
```
Tudo depois do `#` é controlado pelo React, e o GitHub Pages não interfere.

O **BrowserRouter** nativo causa erros **404** no GitHub Pages ao recarregar a página, pois o servidor tenta buscar diretórios físicos que não existem. A solução aplicada foi o uso do ``HashRouter`` no **index.js**, que adiciona uma âncora (#) na URL, garantindo que a navegação ocorra inteiramente no lado do cliente:

### 🔧 Como aplicar no seu projeto

Abra o arquivo:

```
src/index.js
```

E troque:

```javascript
import { BrowserRouter } from "react-router-dom";
```
por:

```javascript
import { HashRouter } from "react-router-dom";
```
E troque o uso:

```Javascript
<BrowserRouter>
  <App />
</BrowserRouter>
```
por:

```Javascript
<HashRouter>
  <App />
</HashRouter>
```


### Configuração do package.json

O pacote `gh-pages` foi instalado como dependência de desenvolvimento, e os seguintes scripts e propriedades foram adicionados para automatizar a compilação e o envio para a branch **gh-pages**:

```json
"homepage": "[https://wanderson-a-timoteo.github.io/sistema-escolar](https://wanderson-a-timoteo.github.io/sistema-escolar)",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Para publicar uma nova versão, basta rodar:

```bash
npm run deploy
```

<br>

## Autor:

Feito com ♥ by

<div align="center">
  <a href="https://github.com/Wanderson-A-Timoteo">
    <img src="https://github.com/Wanderson-A-Timoteo.png" width="120px;" alt="Foto de Perfil do Wanderson Timóteo no GitHub" style="border-radius: 50%;"/>
  </a>
  <br />
  <br />
  <h4>Wanderson Timóteo</h4>
    
  <a href="https://www.wandersontimoteo.com.br/" target="_blank">
    <b>🌐 Visite meu Portfólio</b>
  </a>
  &nbsp;|&nbsp;
  <a href="https://wanderson-a-timoteo.github.io/perfil-de-contato/" target="_blank">
    <b>🔗 Entre em Contato</b>
  </a>
</div>