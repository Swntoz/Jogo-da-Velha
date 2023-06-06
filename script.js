let tabuleiroHTML = document.querySelector('#tabuleiro')

let tabuleiro = ['_', '_', '_', '_', '_', '_', '_', '_', '_']
let jogada = 0, posicao

//Variáveis lógicas para verificar se há campeão:
//verdadeiro -> todos valores são X ou O
let linhaA, linhaB, linhaC, colunaD, colunaE, colunaF, diagonalG, diagonalH

while (jogada <= 8) {
  //Impressão do tabuleiro
  tabuleiroHTML.innerHTML = 
`${tabuleiro[0]}|${tabuleiro[1]}|${tabuleiro[2]}<br>
 ${tabuleiro[3]}|${tabuleiro[4]}|${tabuleiro[5]}<br>
 ${tabuleiro[6]}|${tabuleiro[7]}|${tabuleiro[8]}`
  //Jogada do X
  //Repete a jogada se a jogada é inválida:
  while (true) {
    posicao = Number(prompt("Jogada do X (digite uma posição de 0 a 8): "))
    //Se a posição é válida então aplica a jogada no tabuleiro e para o laço infinito:
    if (posicao >= 0 && posicao <= 8 && tabuleiro[posicao] === '_') {
      tabuleiro[posicao] = 'X'
      jogada++
      break
    }
  }
  tabuleiroHTML.innerHTML = 
`${tabuleiro[0]}|${tabuleiro[1]}|${tabuleiro[2]}<br>
 ${tabuleiro[3]}|${tabuleiro[4]}|${tabuleiro[5]}<br>
 ${tabuleiro[6]}|${tabuleiro[7]}|${tabuleiro[8]}`

  //Verificação se X é vencedor em uma das linhas, colunas ou diagonais:
  linhaA = (tabuleiro[0] === 'X') && (tabuleiro[1] === 'X') && (tabuleiro[2] === 'X')
  linhaB = (tabuleiro[3] === 'X') && (tabuleiro[4] === 'X') && (tabuleiro[5] === 'X')
  linhaC = (tabuleiro[6] === 'X') && (tabuleiro[7] === 'X') && (tabuleiro[8] === 'X')
  colunaD = (tabuleiro[0] === 'X') && (tabuleiro[3] === 'X') && (tabuleiro[6] === 'X')
  colunaD = (tabuleiro[1] === 'X') && (tabuleiro[4] === 'X') && (tabuleiro[7] === 'X')
  colunaD = (tabuleiro[2] === 'X') && (tabuleiro[5] === 'X') && (tabuleiro[8] === 'X')
  diagonalG = (tabuleiro[0] === 'X') && (tabuleiro[4] === 'X') && (tabuleiro[8] === 'X')
  diagonalH = (tabuleiro[2] === 'X') && (tabuleiro[4] === 'X') && (tabuleiro[6] === 'X')

  //Condicional para saber se "X" é o vencedor:
  if(linhaA || linhaB || linhaC || colunaD || colunaE || colunaF || diagonalG || diagonalH){
    alert(`O Jogador X é o vencedor!!!`)
    break
  }



  if (jogada <= 8) {
    //Jogada do O
    //Repete a jogada se a jogada é inválida:
    while (true) {
      posicao = Number(prompt("Jogada do O (digite uma posição de 0 a 8): "))
      //Se a posição é válida então aplica a jogada no tabuleiro e para o laço infinito:
      if (posicao >= 0 && posicao <= 8 && tabuleiro[posicao] === '_') {
        tabuleiro[posicao] = 'O'
        jogada++
        break
      }
    }
      //Verificação se O é vencedor em uma das linhas, colunas ou diagonais:
  linhaA = (tabuleiro[0] === 'O') && (tabuleiro[1] === 'O') && (tabuleiro[2] === 'O')
  linhaB = (tabuleiro[3] === 'O') && (tabuleiro[4] === 'O') && (tabuleiro[5] === 'O')
  linhaC = (tabuleiro[6] === 'O') && (tabuleiro[7] === 'O') && (tabuleiro[8] === 'O')
  colunaD = (tabuleiro[0] === 'O') && (tabuleiro[3] === 'O') && (tabuleiro[6] === 'O')
  colunaD = (tabuleiro[1] === 'O') && (tabuleiro[4] === 'O') && (tabuleiro[7] === 'O')
  colunaD = (tabuleiro[2] === 'O') && (tabuleiro[5] === 'O') && (tabuleiro[8] === 'O')
  diagonalG = (tabuleiro[0] === 'O') && (tabuleiro[4] === 'O') && (tabuleiro[8] === 'O')
  diagonalH = (tabuleiro[2] === 'O') && (tabuleiro[4] === 'O') && (tabuleiro[6] === 'O')

  //Condicional para saber se "O" é o vencedor
  if(linhaA || linhaB || linhaC || colunaD || colunaE || colunaF || diagonalG || diagonalH){
    alert(`O Jogador O é o vencedor!!!`)
    break
  }
  }
}