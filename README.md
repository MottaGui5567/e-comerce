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

Testes automatizados garantem que o código funciona conforme o esperado e evitam que novas alterações quebrem funcionalidades já existentes.

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

### Criando um Teste

Os arquivos de teste devem ter a extensão `.test.js` ou `.spec.js`. Exemplo básico:

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

### Comandos

```bash
npm test              # roda todos os testes do projeto
npm run test:watch    # roda os testes em modo observador
npx jest NomeDoArquivo   # roda apenas um arquivo de teste específico
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

No Next.js, a API é criada dentro da pasta `pages/api`. Cada arquivo dentro dessa pasta vira automaticamente um endpoint acessível via HTTP, sem precisar configurar rotas manualmente.

### Como funciona

Cada arquivo exporta uma função que recebe dois parâmetros:

- `request` → contém os dados da requisição (método, body, headers, etc.)
- `response` → usado para enviar a resposta ao cliente

### Exemplo

O arquivo `pages/api/status.js` cria automaticamente o endpoint `/api/status`:

```js
function status(request, response) {
  response.status(200).json({ cahve: "ola" });
}

export default status;
```

- `response.status(200)` → define o código HTTP da resposta (`200` significa sucesso)
- `.json({...})` → envia os dados no formato JSON para o cliente

### Códigos HTTP mais comuns

| Código | Significado                                 |
| ------ | ------------------------------------------- |
| `200`  | OK — requisição bem-sucedida                |
| `201`  | Created — recurso criado com sucesso        |
| `400`  | Bad Request — dados inválidos na requisição |
| `401`  | Unauthorized — não autenticado              |
| `404`  | Not Found — recurso não encontrado          |
| `500`  | Internal Server Error — erro no servidor    |
