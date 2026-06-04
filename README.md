<div align="center">

# 🛒 E-Commerce — Projeto de Estudos

**Projeto acadêmico para evolução como desenvolvedor full-stack**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

</div>

---

## 🎯 Objetivos

Este projeto de e-commerce tem fins exclusivamente acadêmicos, com o objetivo de evoluir como programador e aprofundar os conhecimentos necessários para atuar como desenvolvedor full-stack — seja em estágios ou trabalhos freelance.

---

## 📋 Índice

- [Instalação](#-instalação)
- [Arquitetura de Pastas](#-arquitetura-de-pastas)
- [API](#-api)
- [Testes Automatizados](#-testes-automatizados)
- [Ferramentas de Qualidade](#-ferramentas-de-qualidade)
- [Comandos Git](#-comandos-git)
- [Observações](#-observações)

---

## 📦 Instalação

### Dependências principais

São os pacotes necessários para a aplicação funcionar em produção:

```bash
npm install react
npm install react-dom
npm install next
```

| Pacote      | O que faz                                              |
| ----------- | ------------------------------------------------------ |
| `react`     | Biblioteca principal para construção de interfaces     |
| `react-dom` | Responsável por renderizar o React no navegador        |
| `next`      | Framework que gerencia rotas, API e build da aplicação |

### Dependências de desenvolvimento

São os pacotes usados apenas durante o desenvolvimento — não vão para produção:

```bash
npm install jest -D
npm install jest-environment-jsdom -D
npm install prettier -D
npm install tailwindcss -D
```

| Pacote                   | O que faz                                       |
| ------------------------ | ----------------------------------------------- |
| `jest`                   | Framework de testes automatizados               |
| `jest-environment-jsdom` | Simula o DOM do navegador para testes com React |
| `prettier`               | Formatação automática do código                 |
| `tailwindcss`            | Framework de CSS utilitário para estilização    |

| Pacote                   | O que faz                                       |
| ------------------------ | ----------------------------------------------- |
| `jest`                   | Framework de testes automatizados               |
| `jest-environment-jsdom` | Simula o DOM do navegador para testes com React |
| `prettier`               | Formatação automática do código                 |
| `tailwindcss`            | Framework de CSS utilitário para estilização    |

> 💡 Para instalar uma versão específica, use `@` após o nome do pacote.
> Exemplo: `npm install react-dom@18.3.1`

> 💡 O `-D` e o `--save-dev` fazem a mesma coisa: instalam o pacote como dependência de desenvolvimento.

---

## 📁 Arquitetura de Pastas

O projeto segue o padrão **MVC (Model-View-Controller)**, separando responsabilidades em camadas bem definidas:

```
📦 root
 ┣ 📂 pages         → View: telas e rotas da aplicação
 ┃ ┣ 📂 api/v1      → Controller: endpoints da API
 ┃ ┗ 📜 index.js
 ┣ 📂 models        → Model: regras de negócio e estrutura dos dados
 ┃ ┣ 📜 user.js
 ┃ ┣ 📜 content.js
 ┃ ┗ 📜 password.js
 ┣ 📂 infra         → Infraestrutura: banco de dados, migrações e ambientes
 ┃ ┣ 📜 database.js
 ┃ ┣ 📂 migrations
 ┃ ┗ 📂 provisioning
 ┃   ┣ 📂 staging
 ┃   ┗ 📂 production
 ┗ 📂 tests
   ┣ 📂 integration  → testes de ponta a ponta (ex: chamadas à API)
   ┗ 📂 unit         → testes isolados (ex: funções e lógicas)
```

| Camada         | Pasta        | Responsabilidade                                                     |
| -------------- | ------------ | -------------------------------------------------------------------- |
| **View**       | `pages/`     | Telas e rotas. No Next.js cada arquivo vira uma rota automaticamente |
| **Controller** | `pages/api/` | Endpoints da API. Recebe requisições e devolve respostas             |
| **Model**      | `models/`    | Regras de negócio e estrutura de dados de cada entidade              |
| **Infra**      | `infra/`     | Conexão com banco, migrações e configurações por ambiente            |

---

## 🔌 API

Uma API funciona como um garçom em um restaurante: o cliente (navegador ou app) faz um pedido (`request`), o garçom leva até a cozinha (servidor), e traz de volta a resposta (`response`).

No Next.js, basta criar um arquivo dentro de `pages/api` para que ele vire um endpoint automaticamente — sem configuração de rotas.

```
pages/api/v1/status/index.js  →  disponível em  /api/v1/status
```

### Exemplo

```js
function status(request, response) {
  response.status(200).json({ chave: "ola" });
}

export default status;
```

| Parte                  | O que faz                                                     |
| ---------------------- | ------------------------------------------------------------- |
| `request`              | Contém tudo que veio do cliente: método, dados, headers, etc. |
| `response`             | A resposta que você devolve para quem fez o pedido            |
| `response.status(200)` | Define o código HTTP da resposta                              |
| `.json({ ... })`       | Envia os dados no formato JSON                                |

### Códigos HTTP mais comuns

> Quanto maior o número, mais grave o problema.

| Código | Significado           | Quando ocorre                                    |
| ------ | --------------------- | ------------------------------------------------ |
| `200`  | OK                    | Requisição bem-sucedida                          |
| `201`  | Created               | Algo foi criado com sucesso (ex: novo usuário)   |
| `400`  | Bad Request           | O cliente mandou dados inválidos ou incompletos  |
| `401`  | Unauthorized          | O usuário não está autenticado (não está logado) |
| `404`  | Not Found             | O recurso solicitado não existe                  |
| `500`  | Internal Server Error | Erro no servidor — problema no back-end          |

---

## 🧪 Testes Automatizados

Testes automatizados garantem que o código funciona conforme o esperado e evitam que novas alterações quebrem funcionalidades já existentes.

| Tipo           | O que testa                                                         | Exemplo               |
| -------------- | ------------------------------------------------------------------- | --------------------- |
| **Unitário**   | Uma função isolada, sem dependências externas                       | `calculadora.test.js` |
| **Integração** | O fluxo completo de uma funcionalidade, como uma chamada real à API | `get.test.js`         |

### Instalação

```bash
npm install jest --save-dev

# Para projetos com React, instale também:
npm install jest-environment-jsdom --save-dev
```

### Configuração

Adicione os scripts no `package.json`:

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watchAll"
}
```

| Script       | O que faz                                                       |
| ------------ | --------------------------------------------------------------- |
| `test`       | Roda todos os testes uma única vez                              |
| `test:watch` | Observa alterações e roda os testes automaticamente a cada save |

### Teste Unitário

Testa uma função de forma isolada, sem banco de dados, API ou qualquer serviço externo:

```js
function soma(a, b) {
  return a + b;
}

test("deve retornar a soma de dois números", () => {
  expect(soma(2, 3)).toBe(5);
});
```

| Função     | O que faz                                      |
| ---------- | ---------------------------------------------- |
| `test()`   | Define um caso de teste com descrição e função |
| `expect()` | Define o valor a ser verificado                |
| `toBe()`   | Verifica se o valor é exatamente o esperado    |

### Teste de Integração

Testa o fluxo completo — no exemplo abaixo, uma requisição real ao endpoint `/api/v1/status`:

```js
test("GET /api/v1/status deve retornar 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
```

> ⚠️ **Atenção:** o servidor precisa estar rodando (`npm run dev`) antes de executar testes de integração.

#### Entendendo o async/await

O JavaScript por padrão não espera — ele continua executando o resto do código enquanto uma tarefa demorada acontece em segundo plano. Sem o `await`, o código tentaria ler `response.status` antes da resposta chegar, causando erro.

| Peça      | O que faz                                          |
| --------- | -------------------------------------------------- |
| `fetch()` | Sai para buscar a resposta da API — leva um tempo  |
| `await`   | Pausa a linha e só segue quando o `fetch` terminar |
| `async`   | Obrigatório em toda função que usa `await`         |

```js
// ❌ sem async/await — não espera, vai dar erro
test("teste", () => {
  const response = fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200); // response ainda não chegou!
});

// ✅ com async/await — espera corretamente
test("teste", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200); // response já chegou, pode ler
});
```

> 💡 **Resumindo:** `async` avisa que a função tem esperas, e `await` é a espera em si.

### Comandos

```bash
npm test                        # roda todos os testes do projeto
npm run test:watch              # roda em modo observador
npx jest NomeDoArquivo          # roda apenas um arquivo específico
```

---

## 🛠️ Ferramentas de Qualidade

### ⚙️ EditorConfig

O `.editorconfig` define regras de formatação para o código, como indentação e quebras de linha. Criado na raiz do projeto, garante que todo o código siga o mesmo padrão independentemente do editor utilizado.

---

### ✨ Prettier

O Prettier aplica formatação automática com base nas regras configuradas, atuando de forma complementar ao EditorConfig.

**Instalação:**

```bash
npm install prettier -D
```

**Scripts no `package.json`:**

```json
"lint:check": "prettier --check .",
"lint:fix":   "prettier --write ."
```

| Script       | O que faz                                          |
| ------------ | -------------------------------------------------- |
| `lint:check` | Verifica quais arquivos estão fora do padrão       |
| `lint:fix`   | Corrige automaticamente os arquivos fora do padrão |

**Extensão no VSCode:**

1. Abra **Extensions** (`Ctrl + Shift + X`)
2. Pesquise por **Prettier - Code formatter**
3. Instale a extensão publicada por _Prettier_

**Configuração como formatador padrão** — abra **Open User Settings (JSON)** (`Ctrl + Shift + P`) e adicione:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": false,
  "files.autoSave": "off"
}
```

| Configuração              | O que faz                                |
| ------------------------- | ---------------------------------------- |
| `editor.defaultFormatter` | Define o Prettier como formatador padrão |
| `editor.formatOnSave`     | Desativa formatação automática ao salvar |
| `files.autoSave`          | Desativa salvamento automático           |

**`.prettierignore`:**

O `.prettierignore` lista o que o Prettier deve ignorar. Algumas pastas já são ignoradas por padrão:

> `node_modules` · `.git` · `dist` · `build`

Para este projeto, adicione apenas:

```
.next
```

---

## 🔧 Comandos Git

### 📋 Listagem

```bash
ls              # lista os arquivos do diretório atual
ls -l           # lista em formato de coluna
ls -la          # lista tudo, incluindo arquivos ocultos como `.git`

git log         # exibe o histórico de commits
git status      # mostra arquivos modificados desde o último commit
```

### 💾 Commit

```bash
git add .gitignore                   # adiciona um arquivo específico ao stage
git commit -m "mensagem do commit"   # cria um commit com a mensagem informada
git commit --amend                   # edita o último commit
git push                             # envia as alterações para o repositório remoto
```

---

## 📝 Observações

- `.nvmrc` → define a versão do Node recomendada para o projeto, no caso `lts/hydrogen`
- A sigla **RC** é abreviação de _run commands_
- `npm init` → cria o `package.json`, que lista todas as dependências com suas versões
- Para instalar o Next: `npm install next` ou `npm install next@versão`

---

## 🌐 Protocolos da Internet

| Sigla    | Nome Completo                 | Descrição                                      |
| -------- | ----------------------------- | ---------------------------------------------- |
| **HTTP** | HyperText Transfer Protocol   | Protocolo de transferência de hipertextos      |
| **FTP**  | File Transfer Protocol        | Protocolo dedicado à transferência de arquivos |
| **SMTP** | Simple Mail Transfer Protocol | Utilizado para envio e recebimento de e-mails  |

---

## 🖥️ Criar uma Página / Tela

As páginas são criadas como arquivos `.js` dentro da pasta `pages`. Exemplo básico:

```js
function Home() {
  return <h1>INICIO DA FUNDACAO</h1>;
}

export default Home;
```

- `return` → define o conteúdo que será renderizado na tela
