import { useInstalaciones } from '../context/InstalacionesContext';

export default function Reservar(){
    const { instalaciones } = useInstalaciones();

    return (
        <section id="instalaciones" className="section">
            <h2>Reservas</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Instalación</th>
                    <th>Disponibilidad</th>
                    <th>Reservar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        instalaciones.map((instalacion) => (
                            instalacion.activo == true ? 
                                <tr key={instalacion.id}>
                                    <td>{instalacion.nombre}</td>
                                    <td>Disponible de 9 a 20 hs todos los días</td>
                                    <td><button className='btn btn-outline-success'> + </button></td>
                                </tr>
                            :
                                <tr key={instalacion.id}>
                                    <td>{instalacion.nombre}</td>
                                    <td>No disponible actualmente</td>
                                    <td> / </td>
                                </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

