import foto_perfil from "../images/foto_perfil.png"

export default function MisDatos(){

    return (

        <section className="user-data mb-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={foto_perfil} alt="Imagen de Usuario" className="img-fluid rounded-circle"/>
                </div>
                <div className="col-md-8">
                    <h2>Nombre y apellido</h2>
                    <p><strong>Email:</strong> Socioxx@gmail.com</p>
                    <p><strong>Número de Socio:</strong> 13051 </p>
                    <p><strong>Socios Relacionados:</strong> Actualmente no tiene ninguno.</p>
                </div>
            </div>
        </section>

    )

}