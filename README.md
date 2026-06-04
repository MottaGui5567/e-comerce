# 🛒 Objetivos

Este projeto de e-commerce tem fins exclusivamente acadêmicos, com o objetivo de evoluir como programador e aprofundar os conhecimentos necessários para atuar como desenvolvedor full-stack — seja em estágios ou trabalhos freelance.

---

## 🛍️ E-commerce

Projeto de e-commerce voltado para estudo e prática de implementações reais.

---

## 📦 Instalação

```bash
npm install react
npm install next
npm install react-dom
```

> Para instalar uma versão específica, use `@` após o nome do pacote.  
> Exemplo: `npm install react-dom@18.3.1`

---

## 📝 Observações

- `.nvmrc` → define a versão padrão do Node recomendada para o projeto, no caso `lts/hydrogen`
- A sigla **RC** é abreviação de _run commands_
- O comando `npm init` cria o arquivo `package.json`, que lista todas as dependências do projeto com suas respectivas versões
- Para instalar o Next: `npm install next` ou `npm install next@versão`

---

## 🌐 Protocolos da Internet

| Sigla    | Nome Completo                 | Descrição                                      |
| -------- | ----------------------------- | ---------------------------------------------- |
| **HTTP** | HyperText Transfer Protocol   | Protocolo de transferência de hipertextos      |
| **FTP**  | File Transfer Protocol        | Protocolo dedicado à transferência de arquivos |
| **SMTP** | Simple Mail Transfer Protocol | Utilizado para envio e recebimento de e-mails  |

---

## 🚫 .gitignore

O `.gitignore` impede que determinados arquivos sejam enviados ao Git no momento do commit. Pastas como `.next` e `node_modules` não precisam ser versionadas, pois são geradas automaticamente ao rodar:

```bash
npm i
# ou
npm install
```

---

## 🖥️ Criar uma Página / Tela

As páginas são criadas como arquivos `.js` dentro da pasta `pages`. Exemplo básico:

```js
function Home() {
  return <h1>INICIO DA FUNDACAO</h1>;
}

export default Home;
```

- `return`: define o conteúdo que será renderizado na tela. No exemplo acima, apenas um elemento de front-end simples.

---

## 🔧 Comandos Git

### 📋 Listagem

```bash
ls              # lista os arquivos do diretório atual
ls -l           # lista os arquivos em formato de coluna
ls -la          # lista todos os arquivos, incluindo ocultos como `.git`

git log         # exibe o histórico de commits do projeto
git status      # mostra os arquivos modificados ou adicionados desde o último commit
```

### 💾 Commit

```bash
git add .gitignore                   # adiciona apenas o arquivo .gitignore ao stage
git commit -m "mensagem do commit"   # cria um commit com a mensagem informada
git commit --amend                   # edita o último commit
git push                             # envia as alterações para o repositório remoto (GitHub)
```

---

## 🧪 Testes Automatizados

Testes automatizados garantem que o código funciona conforme o esperado e evitam que novas alterações quebrem funcionalidades já existentes. Existem dois tipos principais utilizados neste projeto:

- **Teste unitário** → testa uma função ou lógica isolada, sem depender de serviços externos
- **Teste de integração** → testa o fluxo completo de uma funcionalidade, como uma requisição real à API

A estrutura de pastas reflete essa separação:

```
📂 test
 ┣ 📂 integration      → testes de integração (ex: chamadas à API)
 ┃ ┗ 📂 api/v1/status
 ┃   ┗ 📜 get.test.js
 ┗ 📂 unit             → testes unitários (ex: funções isoladas)
   ┗ 📜 calculadora.test.js
```

---

### Instalação

```bash
npm install jest --save-dev
```

Para projetos com React, instale também o ambiente de simulação do DOM:

```bash
npm install jest-environment-jsdom --save-dev
```

---

### Configuração

Adicione o script de teste no `package.json`:

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watchAll"
}
```

- `test` → roda todos os testes uma única vez
- `test:watch` → fica observando alterações e roda os testes automaticamente a cada save

---

### Teste Unitário

Testa uma função de forma isolada, sem depender de banco de dados, API ou qualquer serviço externo. Os arquivos devem ter a extensão `.test.js` ou `.spec.js`:

```js
function soma(a, b) {
  return a + b;
}

test("deve retornar a soma de dois números", () => {
  expect(soma(2, 3)).toBe(5);
});
```

- `test()` → define um caso de teste com uma descrição e uma função
- `expect()` → define o valor a ser verificado
- `toBe()` → verifica se o valor é exatamente o esperado

---

### Teste de Integração

Testa o fluxo completo de uma funcionalidade — no exemplo abaixo, uma requisição real ao endpoint `/api/v1/status` verificando se ele retorna o código `200`:

```js
test("GET /api/v1/status deve retornar 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
```

- `fetch()` → faz a chamada HTTP ao endpoint
- `async/await` → necessário pois a requisição à API é assíncrona (leva um tempo para responder)
- `response.status` → captura o código HTTP retornado pela API

#### Entendendo o async/await

O JavaScript por padrão não espera — ele continua executando o resto do código enquanto uma tarefa demorada acontece em segundo plano. Isso é o comportamento **assíncrono**.

O problema é que às vezes você **precisa** esperar. Se o código tentasse ler `response.status` antes da resposta da API chegar, o resultado seria um erro — como tentar comer a pizza antes do entregador bater na porta.

As três peças que resolvem isso:

- **`fetch()`** → é o entregador. Sai para buscar a resposta da API, o que leva um tempo
- **`await`** → pausa aquela linha e só segue para a próxima quando o `fetch` terminar e a resposta chegar
- **`async`** → regra do JavaScript: toda função que usa `await` obrigatoriamente precisa ter `async` na frente, avisando que ela pode ter esperas dentro

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

> **Resumindo:** `async` avisa que a função tem esperas, e `await` é a espera em si.

> **Atenção:** para rodar testes de integração, o servidor precisa estar rodando (`npm run dev`) antes de executar o teste.

---

### Comandos

```bash
npm test                       # roda todos os testes do projeto
npm run test:watch             # roda os testes em modo observador
npx jest NomeDoArquivo         # roda apenas um arquivo de teste específico
```

---

## ⚙️ EditorConfig

O `.editorconfig` define regras de formatação para o código, como indentação e quebras de linha. Pode ser criado em uma pasta específica ou, de preferência, na raiz do projeto, garantindo que todo o código siga o mesmo padrão independentemente do editor utilizado.

---

## ✨ Prettier

**Instalação:**

```bash
npm install prettier -D  # instala como dependência de desenvolvimento
```

O Prettier analisa os arquivos do projeto e aplica formatação automaticamente com base nas regras configuradas. Ele atua de forma complementar ao EditorConfig, cobrindo a padronização do estilo do código.

Para facilitar o uso, adicione os scripts abaixo no `package.json`, na mesma seção do `npm run dev`:

```json
"lint:check": "prettier --check .",
"lint:fix": "prettier --write ."
```

- `lint:check` → verifica se há arquivos fora do padrão
- `lint:fix` → corrige automaticamente os arquivos fora do padrão

---

### 🧩 Extensão no VSCode

Para que o Prettier funcione integrado ao VSCode, é necessário instalar a extensão oficial:

1. Abra o VSCode e vá em **Extensions** (`Ctrl + Shift + X`)
2. Pesquise por **Prettier - Code formatter**
3. Instale a extensão publicada por _Prettier_

---

### ⚙️ Configurando o Prettier como formatador padrão

Após instalar a extensão, é necessário defini-la como o formatador padrão do editor:

1. Abra as configurações do VSCode (`Ctrl + Shift + P`) e busque por **Open User Settings (JSON)**
2. Adicione ou ajuste as seguintes linhas:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": false,
  "files.autoSave": "off"
}
```

- `editor.defaultFormatter` → define o Prettier como formatador padrão
- `editor.formatOnSave` → desativa a formatação automática ao salvar (o Prettier deve ser rodado manualmente via `npm run lint:fix`)
- `files.autoSave` → desativa o salvamento automático, evitando que o arquivo seja salvo antes de você terminar de escrever

---

### 🚫 .prettierignore

O `.prettierignore` funciona de forma semelhante ao `.gitignore`: lista os arquivos e pastas que o Prettier deve ignorar ao verificar ou formatar o código.

> **Atenção:** algumas pastas já são ignoradas pelo Prettier por padrão, sem precisar declará-las no arquivo:
>
> - `node_modules`
> - `.git`
> - `dist`
> - `build`

Para este projeto, além dessas, basta adicionar a pasta `.next`, que é gerada automaticamente pelo Next.js:

```
.next
```

---

## 📁 Arquitetura de Pastas

O projeto segue o padrão **MVC (Model-View-Controller)**, separando responsabilidades em camadas bem definidas:

```
📦 root
 ┣ 📂 pages         → View: telas e rotas da aplicação (Next.js usa essa pasta para criar as rotas automaticamente)
 ┃ ┗ 📜 index.js
 ┣ 📂 models        → Model: regras de negócio e estrutura dos dados
 ┃ ┣ 📜 user.js
 ┃ ┣ 📜 content.js
 ┃ ┗ 📜 password.js
 ┣ 📂 infra         → infraestrutura da aplicação: banco de dados, migrações e ambientes
 ┃ ┣ 📜 database.js
 ┃ ┣ 📂 migrations      → versionamento e alterações na estrutura do banco de dados
 ┃ ┗ 📂 provisioning    → configurações de ambiente
 ┃   ┣ 📂 staging        → ambiente de homologação (testes antes de ir para produção)
 ┃   ┗ 📂 production     → ambiente de produção
 ┗ 📂 tests         → testes automatizados da aplicação
```

### Responsabilidades

- **pages** → camada de visualização (View). No Next.js, cada arquivo dentro dessa pasta vira automaticamente uma rota
- **models** → camada de dados (Model). Define a estrutura e as regras de negócio de cada entidade, como usuário, conteúdo e senha
- **infra** → camada de infraestrutura. Centraliza a conexão com o banco de dados, migrações e configurações por ambiente
- **tests** → concentra todos os testes automatizados do projeto, mantendo-os separados do código de produção

> No Next.js a camada de **Controller** fica dentro da própria pasta `pages/api`, onde cada arquivo representa um endpoint da API.

---

## 🔌 API

Uma API funciona como um garçom em um restaurante: o cliente (navegador ou app) faz um pedido (`request`), o garçom leva até a cozinha (servidor), e traz de volta a resposta (`response`). Os **códigos HTTP** são o sistema que toda a internet usa para comunicar o resultado desse pedido — se deu certo, se houve erro, e qual foi o motivo.

No Next.js, a API é criada dentro da pasta `pages/api`. Cada arquivo dentro dessa pasta vira automaticamente um endpoint acessível via HTTP, sem precisar configurar rotas manualmente. Por exemplo, o arquivo `pages/api/status.js` já fica disponível em `/api/status`.

### Como funciona

Cada arquivo exporta uma função que recebe dois parâmetros:

- `request` → a "batida na porta": contém tudo que veio do cliente (método, dados, headers, etc.)
- `response` → a resposta que você devolve para quem fez o pedido

### Exemplo

```js
function status(request, response) {
  response.status(200).json({ cahve: "ola" });
}

export default status;
```

- `response.status(200)` → informa que a requisição foi bem-sucedida
- `.json({ ... })` → envia os dados de volta no formato JSON

### Códigos HTTP mais comuns

Os códigos HTTP são divididos em famílias. Quanto maior o número, mais grave o problema:

| Código | Significado           | Quando ocorre                                               |
| ------ | --------------------- | ----------------------------------------------------------- |
| `200`  | OK                    | Requisição bem-sucedida                                     |
| `201`  | Created               | Algo foi criado com sucesso (ex: novo usuário)              |
| `400`  | Bad Request           | O cliente mandou dados inválidos ou incompletos             |
| `401`  | Unauthorized          | O usuário não está autenticado (não está logado)            |
| `404`  | Not Found             | O recurso solicitado não existe                             |
| `500`  | Internal Server Error | Erro no servidor — o problema é no back-end, não no cliente |
