import "../pages/Home/PrincipalStyle.css"
import "../pages/Home/media.css"
let Contador = 0;
let Vezes = 0;

function Carrossel2Direita () {
    const carrosselBox2 = document.querySelector(".CarrosselDividido");
    const tamanho = document.querySelector("#Carrossel2Img")
    const Passa = document.querySelector("#img-1")
    
    Contador++;
    
    if ( Contador > 11 ) {
        Contador = 0;
    };
    
    carrosselBox2.style.transform = 'translate('+((-Contador) * ((Passa.clientWidth)+50))+'px)';

    Vezes = Contador;
}
    Contador = Vezes;
function Carrossel2Esquerda () {
    const carrosselBox2 = document.querySelector(".CarrosselDividido");
    const tamanho = document.querySelector("#Carrossel2Img")
    const Passa = document.querySelector("#img-1")
    
    Contador--;
    
    if (Contador <= 0) {
        Contador = 0;
    };
    
    carrosselBox2.style.transform = 'translate('+((-Contador) * ((Passa.clientWidth)+50))+'px)';


};

export {Carrossel2Direita, Carrossel2Esquerda};