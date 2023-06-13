
let posicao0 = document.querySelector("#posicao0")
let posicao1 = document.querySelector("#posicao1")
let posicao2 = document.querySelector("#posicao2")
let posicao3 = document.querySelector("#posicao3")
let posicao4 = document.querySelector("#posicao4")
let posicao5 = document.querySelector("#posicao5")
let posicao6 = document.querySelector("#posicao6")
let posicao7 = document.querySelector("#posicao7")
let posicao8 = document.querySelector("#posicao8")

let tabuleiro = ['_', '_', '_', '_', '_', '_', '_', '_', '_']
let jogada = 0, posicao, jogador

//Verifica se é a vez do X ou O:
function atribuirJogador(){
    //Verifica se é a vez do X ou O:
  //Se 'jogada' é par então é a vez do X
  
  if(jogada % 2 === 0){
    jogador = 'X'  
  }
  //Se 'jogada' é impar então é a vez do O
  else{
    jogador = 'O'
  }
  return jogador
}

//Verifica se a posição jogada está vazia e realiza a jogada:
function realizarJogada(posicao, botao, jogador){
  if(tabuleiro[posicao] === '_'){
    botao.innerHTML = jogador
    tabuleiro[posicao] = jogador
    jogada++
    }
}

function resetarTabuleiro(){

}

function verificarCampeao(jogador){
  //Verificação se X ou O é vencedor em uma das linhas, colunas ou diagonais:
  linhaA = (tabuleiro[0] === jogador) && (tabuleiro[1] === jogador) && (tabuleiro[2] === jogador)
  linhaB = (tabuleiro[3] === jogador) && (tabuleiro[4] === jogador) && (tabuleiro[5] === jogador)
  linhaC = (tabuleiro[6] === jogador) && (tabuleiro[7] === jogador) && (tabuleiro[8] === jogador)
  colunaD = (tabuleiro[0] === jogador) && (tabuleiro[3] === jogador) && (tabuleiro[6] === jogador)
  colunaE = (tabuleiro[1] === jogador) && (tabuleiro[4] === jogador) && (tabuleiro[7] === jogador)
  colunaF = (tabuleiro[2] === jogador) && (tabuleiro[5] === jogador) && (tabuleiro[8] === jogador)
  diagonalG = (tabuleiro[0] === jogador) && (tabuleiro[4] === jogador) && (tabuleiro[8] === jogador)
  diagonalH = (tabuleiro[2] === jogador) && (tabuleiro[4] === jogador) && (tabuleiro[6] === jogador)

  //Condicional de teste para saber se X é vencedor:
  if (linhaA || linhaB || linhaC || colunaD || colunaE || colunaF || diagonalG || diagonalH) {
    alert(`Parabéns!!! ${jogador} venceu!`)
    //resetarTabuleiro()
  }
}

posicao0.addEventListener("click", function() {

  jogador = atribuirJogador()

  realizarJogada(0, posicao0, jogador)

  verificarCampeao(jogador)
  
})

posicao1.addEventListener("click", function(){

  jogador = atribuirJogador()

  realizarJogada(1, posicao1, jogador)
  
  verificarCampeao(jogador)
  
})

posicao2.addEventListener("click", function(){

  jogador = atribuirJogador()

  realizarJogada(2, posicao2, jogador)

  verificarCampeao(jogador)
  
})

posicao3.addEventListener("click", function(){

  jogador = atribuirJogador()

  realizarJogada(3, posicao3, jogador)

  verificarCampeao(jogador)
  
})

posicao4.addEventListener("click", function(){

  jogador = atribuirJogador()

  realizarJogada(4, posicao4, jogador)

  verificarCampeao(jogador)
  
})

posicao5.addEventListener("click", function(){

  jogador = atribuirJogador()

  realizarJogada(5, posicao5, jogador)

  verificarCampeao(jogador)
  
})

posicao6.addEventListener("click", function(){

  jogador = atribuirJogador()

  realizarJogada(6, posicao6, jogador)

  verificarCampeao(jogador)
  
})

posicao7.addEventListener("click", function(){

  jogador = atribuirJogador()

  realizarJogada(7, posicao7, jogador)

  verificarCampeao(jogador)
  
})

posicao8.addEventListener("click", function(){

  jogador = atribuirJogador()

  realizarJogada(8, posicao8, jogador)

  verificarCampeao(jogador)
  
})

posicao9.addEventListener("click", function(){

  jogador = atribuirJogador()

  realizarJogada(9, posicao9, jogador)

  verificarCampeao(jogador)
  
})
