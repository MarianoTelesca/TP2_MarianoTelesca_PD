import { useState } from 'react';

const listaSocios = [
    { id: '001', nombre: 'Mariano Telesca', email: 'mariano.telesca@gmail.com', activo: true },
    { id: '002', nombre: 'Enzo Fernandez', email: 'e.fernandez@hotmail.com', activo: false },
    { id: '003', nombre: 'Pedro Escamoso', email: 'pedro.esc@gmail.com', activo: true },
];

export default function ListaSocios() {
    const [socios, setSocios] = useState(listaSocios);

    const handleSocioChange = (id) => {
        const socios_temp = socios.map(socios => socios.id == id? { ...socios, activo: !socios.activo } : socios);
        setSocios(socios_temp);
    };   

    return (
        <section id="socios" className="section">
            <h2>Socios</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th># de Socio</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {socios.map((socio) => (
                    <tr key={socio.id}>
                        <td>{socio.id}</td>
                        <td>{socio.nombre}</td>
                        <td>{socio.email}</td>
                        <td>
                        <input
                            type="checkbox"
                            checked={socio.activo}
                            onChange={() => handleSocioChange(socio.id)}
                        /> {socio.activo ? 'Activo' : 'Inactivo'}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </section>

    );
}
