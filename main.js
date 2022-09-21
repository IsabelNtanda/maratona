
const elementRespostas=document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonperguntar=document.querySelector("#buttonperguntar")

const respostas=[
    "com certeza!",
    "Não tenho tanta certeza",
    "É decididamente assim",
    "Não conte com isso",
    "Sem dúvidas",
    "Pergunte novamente mais tarde.",
    "Sim,definitivamente",
    "Minha resposta é não",
    "Voce pode contar com isso.",
    "Melhor não te dizer nada",
    "A meu ver,sim",
    "Minhas fontes dizem que não",
    "Provalmente",
    "Não é possivel prever agora",
    "Perspectiva boa",
    "As perspectivas não são tão boas ",
    "Sim",
    "Concentra-te e pergunte novamente",
    "Sinais apontam que sim",
]


// clicar em fazer perguntas

function fazerPergunta(){

    if (inputPergunta.value == "") {

        alert("Digite a pergunta por favor")
        return
    }
    
    buttonperguntar.setAttribute('disabled', true)

    const pergunta="<div>" + inputPergunta.value + "</div>"
    // gerar numero aletorio


const totalRespostas = respostas.length
const numeroaletorio = Math.floor (Math.random() * totalRespostas)

elementRespostas.innerHTML= pergunta + respostas[numeroaletorio]




elementRespostas.style.opacity=1;
// Sumir com a resposta 
setTimeout(function(){
elementRespostas.style.opacity=0; 

buttonperguntar.removeAttribute("disabled")

},3000)

}





ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:1500,

}).reveal('#container')


