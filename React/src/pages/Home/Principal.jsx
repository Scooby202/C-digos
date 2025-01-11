import Carrossel from "../../components/Carrossel"
import {Carrossel2Direita, Carrossel2Esquerda} from "../../components/Carrossel2"
import "./PrincipalStyle.css"
import "./media.css"


function Principal() {


  function CarrosselMove2Esquerda() {
    Carrossel2Esquerda();
    return

 };

  function CarrosselMove2Direita() {
    Carrossel2Direita();
    return

 };

 function Click () {
      
    if (opcoes.style.display == 'none') {
      opcoes.style.display = 'flex'
      imagens.style.display = 'none'
    } else {
      opcoes.style.display = 'none'
      imagens.style.display = 'flex'
    }

  return
 }



  return (
  
   <body>
     <header>
        <div class="barra">
          <a href="/"><img className='logo' src=".\imgs\image 3.png" alt="Imagem do site" /></a>
          <span class="material-icons" id='menu' onClick={Click}>menu</span>
          <div className='menuTodo' id='opcoes' >
            <button className='botõesPrincipais'><a href="Lançamentos.jsx">Lançamentos </a></button>
            <p className="Divisão"></p>
            <button className='botõesPrincipais'><a href="Populares.jsx">Populares</a></button>
            <p className="Divisão"></p>
            <button className='botõesPrincipais'><a href="Gêneros.jsx">Gêneros</a></button>
            <p className="Divisão"></p>
            <button className='botõesPrincipais'><a href="Promoções.jsx">Promoções</a></button>
            <p className="Divisão"></p>
            <button className='botõesPrincipais'><a href="Conta.jsx">Conta</a></button>
            <form>
             <input className='buscar'>
            
             </input>
             <button className='buscarButton' > <img className='buscarimg' src=".\imgs\Vector.png" alt="buscar" /> </button>
            </form>
          </div>
        </div>
     </header>

 
     <main class="box">
      <section className='janela'>
        <button className='carrosselButton'>/\</button>
          <Carrossel/>
        <button className='carrosselButton'>\ /</button>

      </section>
      
        <section class="lançamentos"> 
          <h1 className='textoLançamentos'>Lançamentos</h1>
            <div class="jogosLançamentos">
              <button className='carrosselButton2' onClick={CarrosselMove2Esquerda}>  / <br></br>\  </button>
              <div className="Carrossel2" id="Carrossel2Img">
                <div className="CarrosselDividido">
                   <img class="imagemJogo" src="./imgs/Rectangle 13.png" alt="img1" id="img-1" />
                   <img class="imagemJogo" src="./imgs/Rectangle 14.png" alt="img2" id="img-2" />
                   <img class="imagemJogo" src="./imgs/Rectangle 15.png" alt="img3" id="img-3" />
                   <img class="imagemJogo" src="./imgs/Rectangle 16.png" alt="img4" id="img-4" />
                   <img class="imagemJogo" src="./imgs/Rectangle 17.png" alt="img5" id="img-5" />
                   <img class="imagemJogo" src="./imgs/Rectangle 13.png" alt="img1" id="img-1" />
                   <img class="imagemJogo" src="./imgs/Rectangle 14.png" alt="img2" id="img-2" />
                   <img class="imagemJogo" src="./imgs/Rectangle 15.png" alt="img3" id="img-3" />
                   <img class="imagemJogo" src="./imgs/Rectangle 16.png" alt="img4" id="img-4" />
                   <img class="imagemJogo" src="./imgs/Rectangle 17.png" alt="img5" id="img-5" />
                   <img class="imagemJogo" src="./imgs/Rectangle 13.png" alt="img1" id="img-1" />
                   <img class="imagemJogo" src="./imgs/Rectangle 14.png" alt="img2" id="img-2" />
                   <img class="imagemJogo" src="./imgs/Rectangle 15.png" alt="img3" id="img-3" />
                   <img class="imagemJogo" src="./imgs/Rectangle 16.png" alt="img4" id="img-4" />
                   <img class="imagemJogo" src="./imgs/Rectangle 17.png" alt="img5" id="img-5" />
                </div>
              </div>
              <button className='carrosselButton2' onClick={CarrosselMove2Direita}>\ <br></br> /</button>
            </div>
           <button className='botãoCompra'><img className='ImgCompra' src="./imgs/Group 20.png" alt="comprar" /></button>
        </section>
       
     </main>

   
     <footer className='todoRodape'>
      <span className='todoRodape'>
        <div className='rodape'>
          <div className='loja'>
            <img src="./imgs/image 6.png" alt="logoRodape" className='logoRodape' />
            <p className='textoLoja'>GameStore<br></br>
            <p className='textoLoja2'>Seu jogo favorito é aqui</p></p>
          </div>
          <div className='link'>
            <a href="" className='linkText1'>Explorar</a>
            <a href="/" className='linkText'>Início</a>
            <a href="Populares.jsx" className='linkText'>Populares</a>
            <a href="Conta.jsx" className='linkText'>Conta</a>
          </div>
          <div className='todoContato'>
            <h2>Contato</h2>
            <div className='contato'>
              <img src="./imgs/Mail.png" alt="Mail" className='logoContato' /><p>gamegamedame@teste.com</p>
            </div>
            <div className='contato'>
              <img src="./imgs/Phone.png" alt="Telefone" className='logoContato' /><p>(99) 9 9999-9999</p>
            </div>
            <div className='contato'>
              <img src="./imgs/Location.png" alt="Local" className='logoContato' /><p>Shopping X, Lavras - MG </p>
            </div>
          </div>
        </div>
        <div className='credito'>
            <p>2024 Game Store | By Emakers Júnior</p>
          </div>
      </span>
        
     </footer>

    </body>
  )
}

export default Principal
