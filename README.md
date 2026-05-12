# Obijetivos

o principal obijetivo desse "e-comerce" é apenas para fins academicos, para buscar tornar-me um programador melhor com o principal obijetivo de entender mais e conseguir me tornar um programador full-stack, tanto para estagiar e fazer frelance em busca de uma condicao de vida melhor.


## e-comerce
e-comerce com a finalidade para treinar e colocar implementações afim de estudos.

## instalação
- npm install react
- npm install next
- npm install react-dom

- para utilizar verções expecificas  colo um " @ " ex: npm install react-dom@18.3.1

## oberservações

- .nvmrc --> para definir verção parão e recomendada do node no caso a lts/hydrogen
- a sigla RC ao final é abreviação para run commands 
- untilizar o npm init para criar um arquivo (package.json), o mesmo lsita as dependencias do projeto, Ex: next versão 1.0.0 react versão 2.1.4

- instalat o next (npm install next OU npm next@versão)

## protocolos da internet (tipos)

- http  --> hypertext transfer protocol (Protocolo de transferencias de hypertextos)

- ftp   --> file transfer protocol (é um protocolo dedicado a transferencia de arquivos.)

- smtp  --> simple mail transfer protocol (utilizado principalmente para enviar e receber email)

## gitignore
O arquivo ".gitignore" é criado com o intuido de nao "travar" o commit sendo assim qunado for commitar, nao subir o .next ou node /node_modules para o git, pois os mesmos são baixados automaticamente quando incializamos o proveto e utilizavos o  
- NPM I ou NPM INSTALL 

no qual o coamndo ja baixa as devidas dependencias do projeto 

## criar uma pagina/ tela
para a crição de uma tela damos inico no projeto como " NomeProjeto.js " e declaramos da seguinte forma 

```
function Home() {
    return 
    <h1> INICIO DA FUNDACAO </h1>
}

 export default Home;
```
- return: basicamente tudo que vai detro dele é o conteudo da paguina seja o front ou back, mas no exemplo forma basica apenas do front. 


## comandos Git

### listagem
```

- ls --> lsita os arquivos

- ls -l --> lista os arquivos em formato de coluna 

- ls -la -- lista os arquivos em formato de coluna, porem mostra todos os arquivos até mesmo como pastas escondidas como a: . e a .git etc...

-----------------------------------------------------------------------------------------------------------------------------------------

- git log --> mostra todos os logs de commits do projeto.

- git status --> mostra tudo que foi modificado ou adicionado em comparação com a ultima verção conhecida pelo git


```

### commit

``` 
- git add .gitignore --> ira subir apenas o arquivo .gitignore 

- git commit -m "show de bola seu primeiro commtit no repositorio " --> o -m é para a mensagem do commit 

- git commit --amend --> consegue editar o seu commit 


```
