import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//Componentes
import Menu from './components/Menu'

//Contextos
import { LoginProvider } from './context/loginContext'
import { InstalacionesProvider } from './context/InstalacionesContext'

//Páginas
import Index from './pages/Index'
import Admin from './pages/Admin'
import Contacto from './pages/Contacto'
import Error404 from './pages/Error404'
import Instalaciones from './pages/Instalaciones'
import Login from './pages/Login'
import MiCuenta from './pages/MiCuenta'
import ProtectedRouteUser from './context/ProtectedRouteUser'
import ProtectedRouteAdmin from './context/ProtectedRouteAdmin'
import Footer from './components/Footer'
import Reservar from './pages/Reservar'

function App() {

  return (
    <>
      <div className="container-fluid">
        <LoginProvider>
        <InstalacionesProvider>
          <BrowserRouter>
            <Menu />
            <Routes>
              <Route exact path="/" element={<Index />} />
              <Route exact path="/admin" element={<ProtectedRouteAdmin> <Admin /> </ProtectedRouteAdmin>} />
              <Route exact path="/contacto" element={<Contacto />} />
              <Route exact path="/instalaciones" element={<Instalaciones />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/micuenta" element={<ProtectedRouteUser> <MiCuenta /> </ProtectedRouteUser>} />
              <Route exact path="/reservar" element={<ProtectedRouteUser> <Reservar /> </ProtectedRouteUser>} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </InstalacionesProvider>
        </LoginProvider>
        </div>
    </>
  )
}

export default App
