
let nome = document.getElementById("nomeInput")
let cpf = document.getElementById("cpfInput")
let nasc = document.getElementById("nascInput")
let city = document.getElementById("cityInput")
let lista = document.getElementById("list")

let btnCad = document.getElementById("btnCadastrar")
let btnLimp = document.getElementById("btnLimpar")

 btnCad.addEventListener("click", function(){
    let cliente = {}
    
    cliente.nome = nome.value
    cliente.cpf  = cpf.value
    cliente.nasci = nasc.value
    cliente.cidade = city.value

    let newCliente = document.createElement("li")

    newCliente.innerHTML = `<strong>Nome:</strong>  ${cliente.nome}  <strong>CPF:</strong> ${cliente.cpf}  <strong>Nascimento:</strong> ${cliente.nasci}  <strong>Cidade:</strong> ${cliente.cidade}`
    lista.appendChild(newCliente)
 })

 btnLimp.addEventListener("click", function(){
    nome.value =""
    cpf.value =""
    nasc.value =""
    city.value =""
 })