
const elementoResposta = document.querySelector("#resposta")
const elementoPergunta = document.querySelector("#inputPergunta")
const botaoPerguntar = document.querySelector("#buttonPerguntar")
const respostas = ["Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]



//clicar em fazer pergunta
function fazerPergunta() {
    
    if(elementoPergunta.value == ""){
        alert("Digite sua pergunta")
        return
    }
    botaoPerguntar.setAttribute("disabled", true)

    const pergunta = '<div>' + elementoPergunta.value + '</div>'

    //gerar numero aleatorio
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    console.log(respostas[numeroAleatorio])
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
    //sumir a resposta depois de 2 segundos
    elementoResposta.style.opacity = 1;
    setTimeout(function(){
        elementoResposta.style.opacity = 0;
        botaoPerguntar.removeAttribute("disabled")
    }, 2000)
}