import "../ContaStyle.css"
import "../ContaMedia.css"
import Validação from "../../../components/Validação"

function SuaContaPage () {



    function Click () {
      
        if (opcoes.style.display == 'none') {
         opcoes.style.display = 'flex'
            } else {
         opcoes.style.display = 'none'
            }
          return
         }

        return(
          <body>
            <header>
            <div class="barra">
              <a href="/"><img className='logo' src=".\imgs\image 3.png" alt="Imagem do site" /></a>
              <span class="material-icons" id='menu' onClick={Click}>menu</span>
              <div className='menuTodo' id='opcoes' >
                <button className='botõesPrincipais'><a href="Lançamentos.jsx">Lançamentos </a></button>
                <button className='botõesPrincipais'><a href="Populares.jsx">Populares</a></button>
                <button className='botõesPrincipais'><a href="Gêneros.jsx">Gêneros</a></button>
                <button className='botõesPrincipais'><a href="Promoções.jsx">Promoções</a></button>
                <button className='botõesPrincipais'><a href="Conta.jsx">Conta</a></button>
                <form>
                 <input className='buscar'>
                
                 </input>
                 <button className='buscarButton' > <img className='buscarimg' src=".\imgs\Vector.png" alt="buscar" /> </button>
                </form>
              </div>
            </div>
            </header>
        
            <main className="Tela">
            <div className="MeusJogos">
                {/* Capa da tela */}
                <h1 className="TituloJogos">Jogos Adquiridos:</h1>
                <a className="BotãoCompra"></a>
            </div>
            <div className="FormularioTodo">
              <h1 className="Titulo">Olá, "Nome do Usuário" </h1>
              <p className="Texto">Seu Email é Nomeusuário@email.com</p>
              <p className="Texto">Seu CPF é 123.456.789-00</p>
              <div className="CampoBotões">
                <div className="BotãoContaTodo"> 
                    <button className="Botão">Alterar Dados<span class="material-icons" id='create'>create</span></button>
                </div>
                <div className="BotãoContaTodo">
                    <button className="Botão">Excluir Conta<span class="material-icons" id='delete'>delete</span></button>
                </div>
              </div>
            </div>
            
            <div className="MeusJogos2">
                {/* Capa da tela */}
                <h1 className="TituloJogos">Jogos Adquiridos:</h1>
                <a className="BotãoCompra2"></a>
            </div>
        
        
        
            </main>
          </body>

    )

}

export default SuaContaPage