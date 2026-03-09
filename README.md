# API Escola - Nodee.Js + Express
API REST simples para gerenciar alunos e professores
 
## Pré-requisitos 
-Node.js instalado
 
## Como rodar
 
### Instalar dependencias
```bash
npm i
```
 
### Iniciar o servidor
 
```bash
node index.js
```
 
### Acessar
Abra o navegador em: `http://localhost:3000`
 
## Endpoints
 
### Alunos
 
| Metodo | Endpoint | Descrição |
|--------|----------|-----------|
|GET | `/alunos` | Lista os alunos|
|GET | `/alunos/:id`| Buscar um aluno expecifico |
|POST | `/alunos` | Cria um novo aluno|
|PUT  | `/alunos/:id` | Atualiza um aluno|
|DELETE | `/alunos/:id` | Remove um aluno|
 
### Professores
 
| Metodo | Endpoint | Descrição |
|--------|----------|-----------|
|GET | `/professores` | Lista todos os professores|
|POST | `/professores` | Cria um novo professor|
|PUT  | `/professores/:id` | Atualiza um professor|
|DELETE | `/professores/:id` | Remove um professor|
 
## Tecnologias
- Node.js
- Express
 
  ## Notas
  - Os dados são armazenados em memória (reniciar o servidor apaga tudo)
 
