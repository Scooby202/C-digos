import "./ContaStyle.css"
import "./ContaMedia.css"
import Validação from "../../components/Validação";

function ContaPage() {


  return (
  <body>

    <main className="TelaConta">
      <div className="LoginTodo">
        <a href="Login.jsx" className="Login">Fazer Login</a>
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
      <div className="ContinuaTodoR">
        <a className="Continua" id="Continua" type="submit" onClick={Validação}></a>
      </div>
      <div className="LoginTodo2m">
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