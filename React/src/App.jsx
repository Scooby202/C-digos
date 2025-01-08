import Principal from './pages/Home/Principal'
import ContaPage from './pages/Conta/Conta'
import LoginPage from './pages/Conta/Login/Login'
import RecuperarPage from './pages/Conta/Recuperação/Recuperar'
import SuaContaPage from './pages/Conta/Sua Conta/SuaConta'
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import PopularesPage from './pages/Populares/Populares'

function App() {
    return(
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Principal />}></Route>
        <Route path='/Conta.jsx' element={<ContaPage />}></Route>
        <Route path='/Login.jsx' element={<LoginPage />}></Route>
        <Route path='/Recuperar.jsx' element={<RecuperarPage />}></Route>
        <Route path='/SuaConta.jsx' element={<SuaContaPage />}></Route>
        <Route path='/Populares.jsx' element={<PopularesPage />}></Route>
      </Routes>
      </BrowserRouter>

    )
  
}

export default App
