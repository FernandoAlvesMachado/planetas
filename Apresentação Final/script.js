function proximoPlaneta(){
    let titulo = document.querySelector('#tituloPlanetas') 
    let planetaAtual = document.querySelector("#planetaAtual")
    let texto = document.querySelector('#textoSobrePlaneta') 

    texto.innerHTML = `
    Marte, o planeta vermelho, é um dos vizinhos mais fascinantes da Terra. Localizado a uma distância média de cerca de 225 milhões de quilômetros do Sol, Marte é o quarto planeta a partir do Sol em nosso sistema solar. Com uma atmosfera fina composta principalmente por dióxido de carbono, Marte tem características distintas que o tornam único.
    `
    titulo.innerHTML = "Planeta Marte"
    planetaAtual.style.opacity = '0'
    
    setTimeout(()=>{
        planetaAtual.src = "Assets/marte-planeta.gif";
        planetaAtual.style.opacity = '1'
    }, 700)
    
}
function planetaAnterior(){
    let titulo = document.querySelector('#tituloPlanetas') 
    let texto = document.querySelector('#textoSobrePlaneta') 
    let planetaAtual = document.querySelector("#planetaAtual")
    titulo.innerHTML = "Planeta Terra"
    texto.innerHTML = `
    O planeta Terra, nosso lar cósmico, é um lugar incrível e diversificado, repleto de maravilhas naturais e uma infinidade de formas de vida. Situado na vastidão do espaço, o planeta Terra é o terceiro mais próximo do Sol em nosso sistema solar e o único conhecido até agora a abrigar vida.
    `
    planetaAtual.style.opacity = '0'
   
   setTimeout(()=>{
        planetaAtual.src = "Assets/image 1.png";
        planetaAtual.style.opacity = '1'
    }, 700)
}

const usuarios = [
    {
        login:'DuDuduEdu',
        pass: '1234'
    },
    {
        login:'Vasco',
        pass: '5678'
    },
    {
        login:'Pedrogameplays',
        pass: '221133'
    },
    {
        login:'TropaRaulGil',
        pass: '98765'
    },
    {
        login:'FazoL',
        pass: '131313'
    }
]

let botao = document.getElementById('btnLogar');

botao.addEventListener('click' , function logar(evt){

    evt.preventDefault()
    let pegaUsuario = document.getElementById('iptEmail').value;
    let pegaSenha = document.getElementById('iptSenha').value;
    let validaLogin = false

    for(let i in usuarios){
        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            validaLogin = true
            break
        }
    }

    if(validaLogin == true){
        location.href = '../login.html'
        // alert('Acerto mizeravi')
    }else{
        alert('Usuario ou senha incorreta')
    }

})