import vista_aerea from '../images/vista_aerea.png'
import { Link } from 'react-router-dom';
import Sedes from '../components/Sedes';
import LineaDivisoria from '../components/LineaDivisoria';

export default function Index(){

    return (
        <>
            <section>
                <img src={vista_aerea} alt="Polideportivo" className="img-fluid w-100 imagen_index" />
                <h1 className="text-center mt-4">Polideportivo Asociación de Medicos Municipales</h1>
            </section>

            <LineaDivisoria />

            <Sedes />

            <LineaDivisoria />

            <section className="container">
                <h2 className="text-center text-primary">Nuestra Historia</h2>
                <p className="lead text-center">El polideportivo fue fundado en 1990, con el objetivo de ofrecer instalaciones deportivas de calidad a toda la comunidad. Desde entonces, ha crecido y se ha diversificado para incluir múltiples sedes en diferentes zonas de la ciudad.</p>
            </section>

            <LineaDivisoria />

            <section className="container">
                <h2 className="text-center text-primary">Nuestros Servicios</h2>
                <div className="row">
                    <div className="col-md-4">
                        <ul>
                            <li>Gimnasio</li>
                            <li>Cancha de Fútbol</li>
                            <li>Piscina</li>
                            <li>Clases de Yoga y Pilates</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li>Voleibol</li>
                            <li>Canchas de Tenis</li>
                            <li>Salón de fiestas</li>
                            <li>Actividades Recreativas</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li>Cancha de Basket</li>
                            <li>Clases de Baile, Aquagym y más</li>
                            <li>Quinchos y parrillas</li>
                            <li>Espacio verde</li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <LineaDivisoria />

            <section className="container section-bg-light">
                <h2 className="text-center text-primary">Más Información</h2>
                <p className="text-center">Descubre nuestras actividades, horarios y promociones en nuestra página web.</p>
                <div className="d-flex justify-content-center">
                    <Link to="/contacto" className="btn btn-primary">Contactanos</Link>
                </div>
            </section>

        </>
        
    );
}