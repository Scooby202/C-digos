import "./ContaStyle.css"
import "./ContaMedia.css"
import Validação from "../../components/Validação";

function ContaPage() {

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
      <div className="LoginTodo">
        <a href="Login.jsx" className="Login">Fazer Login</a>
      </div>
      <div className="ContinuaTodo">
        <a className="Continua" id="Continua" type="submit" onClick={Validação}></a>
      </div>
    <div className="FormularioTodo">
      <h1 className="Titulo">Registrar</h1>
      <form className="Formulario" id="form">
        <input className="InputForm" type="text" id="name" placeholder='Nome de Usuário'></input>
        <input className="InputForm" type="email" id="email" placeholder='E-mail'></input>
        <input className="InputForm" type="CPF" id="CPF" placeholder='CPF'></input>
        <input className="InputForm" type="password" id="password" placeholder='Senha'></input>
        <input className="InputForm" type="password" id="passwordCheck" placeholder='Confirmar Senha'></input>
      </form>
      <div className="ContinuaTodo2">
        <a className="Continua" id="Continua2" type="submit" onClick={Validação}></a>
      </div>
      <div className="LoginTodo2">
        <a href="Login.jsx" className="Login">Fazer Login</a>
      </div>
    </div>
    <div className="CapaConta">
      {/* Capa da Tela */}
    </div>



    </main>
  </body>

  )


}

export default ContaPage;