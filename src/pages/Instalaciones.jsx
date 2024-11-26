import { Link } from 'react-router-dom';
import LineaDivisoria from '../components/LineaDivisoria';
import { useInstalaciones } from '../context/InstalacionesContext';
import { useLogin } from '../context/loginContext'

export default function Instalaciones(){

    const { logueado } = useLogin();
    const { instalaciones } = useInstalaciones();

    return (
        <>
            <h1>Instalaciones habilitadas y disponibles</h1>

            <LineaDivisoria />

            {
                (logueado == "usuario") ? 
                    <>
                        <Link className="form_boton" to='/reservar'> Reservar ahora! </Link>
                        <LineaDivisoria />
                    </>
                    :
                    null
            }

            <div className="d-flex align-items-start">

                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {
                        instalaciones.map((instalacion) => (
                            instalacion.activo == true ? 
                            <button key={instalacion.id} className="nav-link" id={`v-pills-${instalacion.nombre}-tab`} data-bs-toggle="pill" data-bs-target={`#v-pills-${instalacion.nombre}`} type="button" role="tab" aria-controls={`v-pills-${instalacion.nombre}`} aria-selected="true">{instalacion.nombre}</button>
                            :
                            null
                        ))
                    }
                </div>

                <div className="tab-content" id="v-pills-tabContent">
                    {
                        instalaciones.map((instalacion) => (
                            instalacion.activo == true?
                            <div key={instalacion.id} className="tab-pane fade" id={`v-pills-${instalacion.nombre}`} role="tabpanel" aria-labelledby={`v-pills-${instalacion.nombre}-tab`}>
                                <img src={instalacion.imagen} alt={`Imagen de las instalaciones de ${instalacion.nombre}`} className="imagenes_instalaciones" />
                                <p>{instalacion.descripción}</p>
                            </div>
                            :
                            null
                        ))
                    }
                </div>
            </div>
        </>
    );
}