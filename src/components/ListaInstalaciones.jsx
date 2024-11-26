import { useInstalaciones } from '../context/InstalacionesContext';

export default function ListaInstalaciones() {

    const { instalaciones, instalacionHabilitada } = useInstalaciones();

    const handlerInstalacionesChange = (id) => {
        instalacionHabilitada(id);
        };

    return (
        <section id="instalaciones" className="section">
            <h2>Instalaciones</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Instalación</th>
                    <th>Disponibilidad (meses)</th>
                    <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        instalaciones.map((instalacion) => (
                            <tr key={instalacion.id}>
                                <td>{instalacion.nombre}</td>
                                <td>{instalacion.disponibilidad}</td>
                                <td> <input type="checkbox" checked={instalacion.activo} onChange={() => handlerInstalacionesChange(instalacion.id)}/> 
                                    {instalacion.activo ? 'Activo' : 'Inactivo'}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    );
}
