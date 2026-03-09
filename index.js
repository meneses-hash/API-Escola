const express = require ('express')
const app = express()
 
app.use(express.json())
 
const professores = [
    {
        id: 1,
        nome: "Bethania",
        disciplina: "Filosofia",
        anoContratacao: 2022
    },
    {
        id: 2,
        nome: "Gabriel",
        disciplina: "Ed. Fisica",
        anoContratacao: 2024
    },
    {
        id: 3,
        nome: "Haul",
        disciplina: "Geografia",
        anoContratacao: 2026
 
    }
]
 
const alunos = [
    {
        id: 1,
        nome:"Arthur Duque",
        email: "arthur@gmail.com",
    },
    {
        id: 2,
        nome:"Pedro Sperati",
        email:"pedro@gmail.com",
    },
    {
        id: 3,
        nome:"Julia Lopes",
        email:"julia@gmail.com"
    }
]
 
 
//Alunos
app.get("/", function(req, res){
    res.send("Hello World!, vc conseguiu!")
})
 
app.get("/alunos", function(req, res){
    const nome = req.query.nome
 
    if(!nome){
        return res.json(alunos)
    }
    const alunosFiltrados = alunos.filter(a => a.nome.toLowerCase().includes(nome.toLowerCase()))
 
    res.json(alunosFiltrados)
 
})
 
app.post("/alunos", function(req,res){
    const nomeQueVeioDoCliente = req.body.nome
    const emailQueVeioDoCliente = req.body.email
 
    if( !nomeQueVeioDoCliente || !emailQueVeioDoCliente){
        return res.status(400).json({erro:"Nome e email são obrigatórios!"})
    }
 
 
 
    const novoAluno = {
        id: 4,
        nome: nomeQueVeioDoCliente,
        email: emailQueVeioDoCliente,
    }
    alunos.push(novoAluno)
    res.status(201).send()
})
 
 
 
 
app.get("/alunos/:id", function(req,res){
    const id = parseInt(req.params.id)
    const aluno = alunos.find( a => a.id == id)
    if(aluno){
        return res.json(aluno)
    }else{
        res.status(404).json("Aluno não encontrado")
    }
})
 
 
 
 
app.put("/alunos/:id", function(req,res){
    const id = parseInt(req.params.id)
    // const nome = req.body.nome
    // const email = req.body.email
 
    const {nome, email} = req.body
 
    if (!nome || !email) {
        return res.status(400).json("nome e email são obrigatorios")
    }
 
    const indexDoAluno = alunos.findIndex(a => a.id == id)
 
    if(indexDoAluno === -1){
        return res.status(404).json("Aluno não encontrado")
    }
 
    alunos[indexDoAluno].email = email
    alunos[indexDoAluno].nome = nome
 
    return res.json(alunos[indexDoAluno])
})
 
app.delete("/alunos/:id", function(req,res){
    const id = parseInt(req.params.id)
    const index = alunos.findIndex(a => a.id === id)
 
    if(index === -1){
        return res.status(404).json("Aluno não encontrado")
    }
 
    const alunoRemovido = alunos.splice(index,1)
    return res.status(204).json("Aluno deletado com sucesso!")
})
 
app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
})
 
//__________________________________________________________________________________________________________________________
 
app.get("/professores", function(req, res){
    const anoContratacao = req.query.anoContratacao
 
    if(!anoContratacao){
        return res.json(professores)
    }
    const professoresFiltrados = professores.filter(a => a.anoContratacao == parseInt(anoContratacao))
    res.json(professoresFiltrados)
 
})
 
 
app.post("/professores", function(req,res){
    const nomeQueVeioDoCliente = req.body.nome
    const disciplinaQueVeioDoCliente = req.body.disciplina
    const anoContratacaoQueVeioDoCliente = req.body.anoContratacao
    if( !nomeQueVeioDoCliente || !disciplinaQueVeioDoCliente || !anoContratacaoQueVeioDoCliente){
        return res.status(400).json({erro:"Nome, disciplina e ano de contratação são obrigatórios!"})
    }
 
//criação de um novo professor
 
    const novoProfessor = {
        id: 4,
        nome: nomeQueVeioDoCliente,
        disciplina: disciplinaQueVeioDoCliente,
        anoContratacao: anoContratacaoQueVeioDoCliente
    }
    professores.push(novoProfessor)
    res.status(201).send()
})
 
//deletar
 
app.delete("/professores/:id", function(req,res){
    const id = parseInt(req.params.id)
    const index = professores.findIndex(a => a.id === id)
 
    if(index === -1){
        return res.status(404).json("Professor não encontrado")
    }
 
    const professorRemovido = professores.splice(index,1)
    return res.status(204).json("Professor deletado com sucesso!")
})
 
//editar
 
app.put("/professores/:id", function(req,res){
    const id = parseInt(req.params.id)
 
    const {nome, disciplina} = req.body
 
    if (!nome || !disciplina) {
        return res.status(400).json("nome e disciplina são obrigatorios")
    }
 
    const indexDoProfessor = professores.findIndex(a => a.id == id)
 
    if(indexDoProfessor === -1){
        return res.status(404).json("Professor não encontrado")
    }
 
    professores[indexDoProfessor].disciplina = disciplina
    professores[indexDoProfessor].nome = nome
 
    return res.json(professores[indexDoProfessor])
})


//1. crie uma nova lista de professores


 
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
 
 
