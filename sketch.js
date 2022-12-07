
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
 mostraAtor();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  mostraCarros();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
