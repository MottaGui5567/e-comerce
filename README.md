<div align="center">

# 🛒 E-Commerce — Projeto de Estudos

**Projeto acadêmico para evolução como desenvolvedor full-stack**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

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

## 🐳 Docker

Imagine que você montou um computador do zero só para rodar seu projeto — com a versão certa do Node, o banco de dados já configurado, as variáveis de ambiente certas, tudo no lugar. Agora imagine poder copiar esse computador inteiro e entregar para qualquer pessoa, e ela conseguir rodar o projeto com um único comando, sem instalar nada manualmente.

Isso é o Docker. Ele cria **containers** — ambientes isolados e padronizados que empacotam tudo que a aplicação precisa para funcionar. O container roda igual em qualquer máquina, independente do sistema operacional ou das configurações locais de quem está usando.

---

### O problema que ele resolve

O problema clássico do desenvolvimento é o famoso **"na minha máquina funciona"**:

- Você usa Node 18, seu colega usa Node 16 → comportamentos diferentes
- Você tem o PostgreSQL na versão 15, o servidor de produção tem a versão 13 → queries que funcionam local quebram em produção
- Um dev usa Windows, outro usa Mac, o servidor usa Linux → caminhos de arquivo, permissões e configurações diferentes

Com o Docker, você define o ambiente uma vez num arquivo (`docker-compose.yml`) e todo mundo — desenvolvedores, servidores de staging, produção — roda exatamente o mesmo ambiente.

---

### Conceitos principais

| Conceito               | O que é                                                                      |
| ---------------------- | ---------------------------------------------------------------------------- |
| **Image**              | A "receita" do container — define o sistema, dependências e configurações    |
| **Container**          | A "receita em execução" — é a image rodando de fato                          |
| **Dockerfile**         | Arquivo onde você escreve a receita da sua aplicação                         |
| **docker-compose.yml** | Arquivo que orquestra múltiplos containers (ex: app + banco de dados juntos) |
| **Volume**             | Permite que os dados do container persistam mesmo após ele ser derrubado     |

---

### Por que usar neste projeto

Você já tem na arquitetura as pastas `infra/provisioning/staging` e `infra/provisioning/production` — o Docker é justamente a ferramenta que dá vida a esses ambientes. Na prática ele resolve:

- **Banco de dados** → em vez de cada dev instalar o PostgreSQL na própria máquina com configurações diferentes, o Docker sobe o banco automaticamente, já configurado
- **Ambientes isolados** → staging e production rodam em containers separados, sem interferência entre si
- **Onboarding rápido** → um novo dev clona o repositório, roda um comando e já tem tudo funcionando — sem guia de instalação de 20 passos

---

### Comandos principais

```bash
docker-compose up         # sobe todos os containers definidos no docker-compose.yml
docker-compose up -d      # sobe em segundo plano (sem travar o terminal)
docker-compose down       # derruba todos os containers
docker-compose logs       # exibe os logs dos containers em execução

docker ps                 # lista os containers que estão rodando
docker ps -a              # lista todos os containers, incluindo os parados
docker exec -it <id> bash # acessa o terminal dentro de um container
```

---

### Exemplo de docker-compose.yml

Um exemplo básico subindo a aplicação Next.js junto com um banco PostgreSQL e o PgAdmin:

```yaml
version: "3"

services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - database

  database:
    image: postgres:15
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: senha
      POSTGRES_DB: ecommerce
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  pgadmin:
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@admin.com
      PGADMIN_DEFAULT_PASSWORD: admin
    ports:
      - "8080:80"
    depends_on:
      - database

volumes:
  postgres_data:
```

| Parte                   | O que faz                                                       |
| ----------------------- | --------------------------------------------------------------- |
| `services`              | Define cada container que será criado                           |
| `build: .`              | Usa o `Dockerfile` da raiz para construir a imagem da aplicação |
| `ports`                 | Mapeia a porta do container para a porta da sua máquina         |
| `depends_on`            | Garante que o banco sobe antes da aplicação                     |
| `image: postgres:15`    | Usa a imagem oficial do PostgreSQL versão 15                    |
| `volumes`               | Persiste os dados do banco mesmo após derrubar o container      |
| `image: dpage/pgadmin4` | Interface gráfica para gerenciar o banco pelo navegador         |

---

### Instalando o cliente PostgreSQL

Antes de se conectar ao banco, é necessário instalar o cliente do PostgreSQL no sistema. O processo é feito em dois passos:

```bash
sudo apt update                    # 1º atualiza a lista de pacotes disponíveis
sudo apt install postgresql-client # 2º instala o cliente do PostgreSQL
```

**Por que dois comandos?**
O `apt` mantém uma lista local de pacotes disponíveis — mas ela fica desatualizada com o tempo. O `sudo apt update` não instala nada, apenas atualiza essa lista consultando os servidores do Linux. É como atualizar o catálogo de um mercado antes de fazer o pedido.

O `sudo` nos dois comandos significa **"execute como administrador"** — necessário porque instalar programas no sistema requer permissão elevada.

**Por que `postgresql-client` e não `postgresql`?**

| Pacote              | O que instala                    | Quando usar                                        |
| ------------------- | -------------------------------- | -------------------------------------------------- |
| `postgresql`        | O servidor completo do banco     | Quando o banco roda direto na sua máquina          |
| `postgresql-client` | Apenas as ferramentas de conexão | Quando o banco já roda em outro lugar (ex: Docker) |

Como o banco está dentro do container Docker, o servidor já está lá. O `postgresql-client` instala só o necessário para se conectar a ele a partir do terminal.

---

### Conectando ao banco — sem interface gráfica (terminal)

Com o container rodando (`docker-compose up -d`), conecte ao banco pelo terminal:

```bash
psql -h localhost -U admin -d ecommerce
```

| Parâmetro      | O que significa                                |
| -------------- | ---------------------------------------------- |
| `-h localhost` | Host onde o banco está rodando                 |
| `-U admin`     | Usuário definido no `docker-compose.yml`       |
| `-d ecommerce` | Nome do banco definido no `docker-compose.yml` |

Após conectar, o terminal entra no modo interativo do PostgreSQL. Os comandos mais úteis:

```sql
\l              -- lista todos os bancos de dados
\c ecommerce    -- conecta a um banco específico
\dt             -- lista todas as tabelas do banco atual
\d nome_tabela  -- mostra a estrutura de uma tabela
\q              -- sai do PostgreSQL

SELECT * FROM usuarios;               -- consulta todos os registros de uma tabela
INSERT INTO usuarios (nome) VALUES ('João');  -- insere um registro
```

---

### Conectando ao banco — com interface gráfica (PgAdmin)

O PgAdmin é uma interface gráfica para o PostgreSQL. Você visualiza tabelas, escreve queries e gerencia dados com cliques, sem precisar decorar comandos de terminal. Existem duas formas de usar:

---

#### Opção 1 — PgAdmin via Docker (recomendado para Codespaces)

**1. Configure o `compose.yaml`:**

```yaml
services:
  database:
    image: "postgres:16.0-alpine3.18"
    environment:
      POSTGRES_PASSWORD: "test1"
      POSTGRES_USER: "postgres"
      POSTGRES_DB: "ecommerce"
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  pgadmin:
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: "admin@admin.com"
      PGADMIN_DEFAULT_PASSWORD: "admin"
      PGADMIN_CONFIG_ENHANCED_COOKIE_PROTECTION: "False"
      PGADMIN_CONFIG_WTF_CSRF_CHECK_DEFAULT: "False"
    ports:
      - "8080:80"
    depends_on:
      - database

volumes:
  postgres_data:
```

> ⚠️ As linhas `PGADMIN_CONFIG_ENHANCED_COOKIE_PROTECTION` e `PGADMIN_CONFIG_WTF_CSRF_CHECK_DEFAULT` são necessárias para o PgAdmin funcionar corretamente no Codespaces. Sem elas a sessão não é mantida após o login.

**2. Suba os containers:**

```bash
docker-compose up -d
```

**3. Verifique se os dois containers estão rodando:**

```bash
docker ps
```

Deve aparecer duas linhas — uma para o `database` e outra para o `pgadmin`.

**4. Acesse o PgAdmin:**

- **Localmente:** abra `http://localhost:8080` no navegador
- **No Codespaces:** vá na aba **Portas** na barra inferior do VSCode e clique no link da porta `8080`

> 💡 No Codespaces as portas devem estar como **Private** — clique com botão direito na porta → **Port Visibility** → **Private**

**5. Faça login no PgAdmin:**

| Campo    | Valor             |
| -------- | ----------------- |
| Email    | `admin@admin.com` |
| Password | `admin`           |

**6. Registre o servidor do banco:**

1. Clique com botão direito em **Servers** no menu esquerdo
2. Clique em **Register** → **Server**
3. Preencha as abas:

**Aba General:**

| Campo | Valor             |
| ----- | ----------------- |
| Name  | `ecommerce-local` |

**Aba Connection:**

| Campo    | Valor       |
| -------- | ----------- |
| Host     | `database`  |
| Port     | `5432`      |
| Database | `ecommerce` |
| Username | `postgres`  |
| Password | `test1`     |

4. Clique em **Save** — o banco aparecerá no menu lateral

> ⚠️ O host é `database` e não `localhost` porque o PgAdmin está dentro do Docker. Os containers se comunicam entre si pelo nome do serviço.

---

#### Opção 2 — PgAdmin Desktop instalado na máquina

Baixe e instale em [https://www.pgadmin.org/download](https://www.pgadmin.org/download). Siga os mesmos passos acima, mas na aba **Connection** use `localhost` como host em vez de `database`.

---

**Resumo: qual host usar?**

| Situação                                                | Host        |
| ------------------------------------------------------- | ----------- |
| PgAdmin dentro do Docker (Codespaces ou local)          | `database`  |
| PgAdmin instalado na máquina conectando ao banco Docker | `localhost` |

---

### Comandos rápidos — Docker

```bash
docker-compose up -d        # sobe todos os containers em segundo plano
docker-compose down         # derruba todos os containers
docker-compose restart      # reinicia todos os containers
docker ps                   # lista os containers rodando
docker logs nome-container  # exibe os logs de um container específico
```

---

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
