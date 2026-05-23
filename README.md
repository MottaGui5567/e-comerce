# Objetivos

O principal objetivo desse "e-commerce" é apenas para fins acadêmicos, para buscar tornar-me um programador melhor com o principal objetivo de entender mais e conseguir me tornar um programador full-stack, tanto para estagiar e fazer freelance em busca de uma condição de vida melhor.

---

## E-commerce

E-commerce com a finalidade de treinar e colocar implementações a fim de estudos.

---

## Instalação

```bash
npm install react
npm install next
npm install react-dom
```

> Para utilizar versões específicas, coloque um `@` após o nome do pacote.  
> Exemplo: `npm install react-dom@18.3.1`

---

## Observações

- `.nvmrc` → para definir a versão padrão e recomendada do Node, no caso a `lts/hydrogen`
- A sigla **RC** ao final é abreviação para *run commands*
- Utilizar o `npm init` para criar um arquivo `package.json`, o mesmo lista as dependências do projeto. Ex: next versão 1.0.0, react versão 2.1.4
- Instalar o Next: `npm install next` ou `npm install next@versão`

---

## Protocolos da Internet

| Sigla | Nome Completo | Descrição |
|-------|--------------|-----------|
| **HTTP** | HyperText Transfer Protocol | Protocolo de transferência de hipertextos |
| **FTP** | File Transfer Protocol | Protocolo dedicado à transferência de arquivos |
| **SMTP** | Simple Mail Transfer Protocol | Utilizado principalmente para enviar e receber e-mails |

---

## .gitignore

O arquivo `.gitignore` é criado com o intuito de não "travar" o commit. Sendo assim, quando for commitar, não serão enviados o `.next` ou `node_modules` para o Git, pois os mesmos são baixados automaticamente quando inicializamos o projeto e utilizamos:

```bash
npm i
# ou
npm install
```

O comando já baixa as devidas dependências do projeto.

---

## Criar uma Página / Tela

Para a criação de uma tela, iniciamos o projeto com um arquivo `NomeProjeto.js` e declaramos da seguinte forma:

```js
function Home() {
    return (
        <h1>INICIO DA FUNDACAO</h1>
    );
}

export default Home;
```

- `return`: basicamente tudo que vai dentro dele é o conteúdo da página, seja o front ou back. No exemplo acima, forma básica apenas do front.

---

## Comandos Git

### Listagem

```bash
ls              # lista os arquivos
ls -l           # lista os arquivos em formato de coluna
ls -la          # lista os arquivos em formato de coluna, incluindo arquivos ocultos como `.` e `.git`

git log         # mostra todos os logs de commits do projeto
git status      # mostra tudo que foi modificado ou adicionado em comparação com a última versão conhecida pelo Git
```

---

### Commit

```bash
git add .gitignore                              # irá subir apenas o arquivo .gitignore
git commit -m "mensagem do commit"              # o -m é para a mensagem do commit
git commit --amend                              # permite editar o último commit
git push                                        # envia para a branch (GitHub), não ficando mais apenas local
```