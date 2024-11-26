import sede_flores from '../images/sede_flores.png'
import sede_centro from '../images/sede_centro.png'

export default function Sedes(){

    return(

        <section className="container my-5">
            <h2 className="text-center text-primary">Nuestras Sedes</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <img src={sede_flores} alt="Sede 1" className="card-img-top sede_img" />
                        <div className="card-body">
                            <h5 className="card-title">Sede Flores</h5>
                            <p className="card-text">Descripción breve de la sede central.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <img src={sede_centro} alt="Sede 2" className="card-img-top sede_img" />
                        <div className="card-body">
                            <h5 className="card-title">Sede Central</h5>
                            <p className="card-text">Descripción breve de la sede norte.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

}