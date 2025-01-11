import "./PopularesStyle.css"
import "./PopularesMedia.css"
import EntradaAvaliação from '../../components/EntradaAvaliação'

function PopularesPage () {

    function Click () {
      
        if (opcoes.style.display == 'none') {
         opcoes.style.display = 'flex'
        } else {
         opcoes.style.display = 'none'
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
    
     
         <main class="box2">
          <section className="JanelaPopulares">
            <h1 className="PopularesTitulo">Populares</h1>
            <div className="Exposição">
                <div className="CapaDoJogo1">
                  <div className="Ranking"><p>1°</p></div>
                    {/* Capa do Jogo */}
                </div>
                <div className="TextoJogo">
                    <div className="NomeJogoTodo">
                        <h1 className="NomeJogo">Days Gone</h1>
                    </div>
                    <div className="Descrição"><p>Days Gone é um jogo de ação e aventura em mundo aberto que se passa em um ambiente adverso dois anos após uma pandemia mundial devastadora.Entre na pele do antigo motociclista fora da lei Deacon St. John, um caçador de recompensas que tenta achar uma razão para viver numa terra cercada pela morte. Vasculhe assentamentos abandonados em busca de equipamentos para produzir itens e armas valiosos ou arrisque-se com outros sobreviventes que tentam ganhar a vida honestamente... ou de formas mais violentas.</p></div>
                </div>
            </div>
            <div>
              <EntradaAvaliação/>
            </div>
            <div className="Exposição">
                <div className="CapaDoJogo2">
                <div className="Ranking"><p>2°</p></div>
                    {/* Capa do Jogo */}
                </div>
                <div className="TextoJogo">
                    <div className="NomeJogoTodo">
                        <h1 className="NomeJogo">God of War</h1>
                    </div>
                    <div className="Descrição">Kratos é pai novamente. Como mentor e protetor de Atreus, um filho determinado a ganhar seu respeito, ele é forçado a encarar e controlar a fúria que há muito tempo o define enquanto viaja por um mundo ameaçador com o seu filho. Com a vingança contra os deuses do Olimpo no passado, Kratos agora vive no reino das divindades e monstros nórdicos. É nesse mundo duro e impiedoso que ele deve lutar para sobreviver enquanto ensina seu filho a fazer o mesmo e tenta impedi-lo de repetir os erros cruéis do Fantasma de Esparta.</div>
                </div>
            </div>
            <div>
              <EntradaAvaliação/>
            </div>
            <div className="Exposição">
                <div className="CapaDoJogo3">
                <div className="Ranking"><p>3°</p></div>
                    {/* Capa do Jogo */}
                </div>
                <div className="TextoJogo">
                    <div className="NomeJogoTodo">
                        <h1 className="NomeJogo">Horizon Zero Dawn</h1>
                    </div>
                    <div className="Descrição">Em um futuro distante, dominado por máquinas colossais que vagam pela Terra, a natureza retomou as ruínas da nossa civilização esquecida e pequenos grupos de sobreviventes se dividem em diferentes tribos. Empunhe o arco e a lança de Aloy, uma jovem caçadora de máquinas exilada da sua tribo, que parte em busca da verdade sobre suas origens e o misterioso mundo que ela precisa salvar.</div>
                </div>
            </div>
            <div>
              <EntradaAvaliação/>
            </div>
          </section>
          
            <section class="Compra"> 
            
                
               <button className='botãoCompra'><img src="./imgs/Group 20.png" alt="comprar" /></button>
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

export default PopularesPage