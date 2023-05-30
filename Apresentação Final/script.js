function proximoPlaneta(){
    let titulo = document.querySelector('#tituloPlanetas') 
    let planetaAtual = document.querySelector("#planetaAtual")
    let texto = document.querySelector('#textoSobrePlaneta') 

    planetaAtual.classList.add(".animacaoPlanetaSaindo");
    texto.innerHTML = `
    Marte, o planeta vermelho, é um dos vizinhos mais fascinantes da Terra. Localizado a uma distância média de cerca de 225 milhões de quilômetros do Sol, Marte é o quarto planeta a partir do Sol em nosso sistema solar. Com uma atmosfera fina composta principalmente por dióxido de carbono, Marte tem características distintas que o tornam único.
    `
    titulo.innerHTML = "Planeta Marte"
    planetaAtual.src = "Assets/marte-planeta.gif";
}
function planetaAnterior(){
    let titulo = document.querySelector('#tituloPlanetas') 
    let texto = document.querySelector('#textoSobrePlaneta') 
    let planetaAtual = document.querySelector("#planetaAtual")
    titulo.innerHTML = "Planeta Terra"
   texto.innerHTML = `
   O planeta Terra, nosso lar cósmico, é um lugar incrível e diversificado, repleto de maravilhas naturais e uma infinidade de formas de vida. Situado na vastidão do espaço, o planeta Terra é o terceiro mais próximo do Sol em nosso sistema solar e o único conhecido até agora a abrigar vida.
   `
    planetaAtual.src = "Assets/image 1.png";
}