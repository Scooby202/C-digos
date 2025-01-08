import "../ContaStyle.css"
import "../ContaMedia.css"
import Validação from "../../../components/Validação"

function RecuperarPage () {

        return(
          <body>
        
            <main className="TelaConta">
              <div className="LoginTodo">
                <a href="Conta.jsx" className="Login">Criar Conta</a>
              </div>
            <div className="FormularioTodo">
              <h1 className="Titulo">Recuperar <br></br> Conta</h1>
              <form className="Formulario" id="form" autoComplete="on">
                <div className="Espaço">
                <input className="InputForm" type="email" id="email" placeholder='E-mail'></input>
                </div>
              </form>
              <div className="ContinuaTodo">
                <a className="Continua" id="Continua" type="submit" onClick={Validação}></a>
              </div>
              <div className="ContinuaTodo2">
                <a className="Continua" id="Continua2" type="submit" onClick={Validação}></a>
              </div>
              <div className="LoginTodo2">
                <a href="Conta.jsx" className="Login">Criar Conta</a>
              </div>
            </div>
            <div className="CapaConta">
                {/* Capa da tela */}
            </div>
        
        
        
            </main>
          </body>

    )

}

export default RecuperarPage