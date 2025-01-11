import "../pages/Home/PrincipalStyle.css"
import "../pages/Home/media.css"
    

function Carrossel () {
    const carrosselBox = document.querySelector("#img1")
    const image = document.querySelectorAll("#imagens img");
    let Contador = 0;
    

    function CarrosselMove() {
        
        Contador++;

        if ( Contador > 3 ) {
            Contador = 0;
        }
        imagens.style.transform = 'translate('+((-Contador) * ((img1.clientWidth)))+'px)';
    };

    setInterval(CarrosselMove, 2800);


    return (
        <div className='carrosselTudo'>
            <div className='carrossel' id="imagens"> 
          <img className='imgc' id="img1" src="./imgs/carouselp.png" alt="img1" />
          <img className='imgc' src="./imgs/carouselp.png" alt="img2" />
          <img className='imgc' src="./imgs/carouselp.png" alt="img3" />
          <img className='imgc' src="./imgs/carouselp.png" alt="img4" />
            </div>
       </div>
    )
}

export default Carrossel
