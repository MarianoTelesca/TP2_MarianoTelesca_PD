import logo from '../images/logo_sin_texto.png'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';
//Contextos
import { useLogin } from '../context/loginContext'

export default function Menu(){

    const {logueado, logout} = useLogin();
    const navigate = useNavigate();

    const handlerLogout = (e) => {
        e.preventDefault()
        logout();
        navigate("/");
    }

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand"><img src={logo} alt="Logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/instalaciones'>Instalaciones</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                    
                    {
                        (!logueado) ? 
                            <Link className="btn btn-outline-success" type="submit" to="/login">Login</Link> 
                            :
                            (logueado == "usuario") ? 
                                <>
                                    <ul className="navbar-nav navbar-nav-scroll">
                                        <li className="nav-item">
                                            <Link className="dropdown-item" to="/micuenta">Mi Cuenta</Link>
                                        </li>
                                    </ul>

                                    <button className="btn btn-outline-success" onClick={handlerLogout}>Logout</button>
                                </>
                                :
                                <>
                                    <Link className="btn btn-outline-success" type="submit" to="/admin">Admin</Link>
                                    <button className="btn btn-outline-success" onClick={handlerLogout}>Logout</button>
                                </>
                    }

                </div>
            </div>
        </nav>
    )

}