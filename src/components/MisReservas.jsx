import { useState } from "react";
import { useInstalaciones } from '../context/InstalacionesContext';


export default function MisReservas(){
    const [expandido, setExpandido] = useState(null);
    const { instalaciones } = useInstalaciones();

    const expansionReservas = (instalacion) => {
    setExpandido(expandido === instalacion ? null : instalacion);
    };

    return (

        <section className="reservas">
            <h3>Historial de Reservas</h3>
            <div className="list-group">
            {
                instalaciones.map((instalacion) => (
                    <div key={instalacion.id} className="list-group-item">
                    <h4
                        className="cursor-pointer historial_reservas"
                        onClick={() => expansionReservas(instalacion.nombre)}
                    >
                        {instalacion.nombre}
                    </h4>
                    {expandido === instalacion.nombre && (
                        <div>
                            <p>No tiene ni tuvo ninguna reserva en este servicio.</p>
                        </div>
                    )}
                    </div>
                ))
            }
            </div>
        </section>

    )
}