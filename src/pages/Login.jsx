import { useLogin } from '../context/loginContext'
import { useNavigate } from 'react-router-dom';

export default function Login(){

    const {loginAdmin, loginUsuario} = useLogin();
    const navigate = useNavigate();

    const handlerLoginUsuario = (e) => {
        e.preventDefault();
        loginUsuario();
        navigate("/micuenta")
    }

    const handlerLoginAdmin = (e) => {
        e.preventDefault();
        loginAdmin();
        navigate("/admin")
    }

    return (
        <>
        
            <h1>Iniciar sesión</h1>

            <form action="#" method="get" className="form container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" className="form_input" id="email" placeholder="Email" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">   
                        <label htmlFor="contrasenia" className="form-label">Contraseña</label>
                        <input type="password" name="contrasenia" className="form_input" id="contrasenia" placeholder="Contraseña" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <button type="submit" className="form_boton" onClick={handlerLoginUsuario}>Usuario</button>
                    </div>

                    <div className="col-6">
                        <button type="submit" className="form_boton" onClick={handlerLoginAdmin}>Admin</button>
                    </div>
                </div>

                <p className="form-text text-center mt-3">*Para registrarte, acercate por única vez a la sede central, o pedí tu usuario en la recepción del polideportivo.</p>

            </form>

        </>
    );
}