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

O `.prettierignore` funciona de forma semelhante ao `.gitignore`: lista os arquivos e pastas que o Prettier deve ignorar ao verificar ou formatar o código. Para este projeto, basta ignorar a pasta `.next`, que é gerada automaticamente pelo Next.js e não deve ser formatada:

```
.next
```
