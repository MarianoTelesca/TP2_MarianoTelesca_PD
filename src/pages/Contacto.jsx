export default function Contacto(){

    return (
        

        <>
            <h1> Contacto</h1>
                    <form action="#" method="get" className="form container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="nombre"></label>
                                <input type="text" name="nombre" className="form_input" id="nombre" placeholder="Nombre" required />  
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">   
                                <label htmlFor="apellido"></label>
                                <input type="text" name="apellido" className="form_input" id="apellido" placeholder="Apellido" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="email"></label>
                                <input type="email" name="email" className="form_input" id="email" placeholder="Email" required />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <select name="edad" className="form_input">
                                    <option className="form_opcion" value="18-30">18-30 años</option>
                                    <option className="form_opcion" value="31-45">31-45 años</option>
                                    <option className="form_opcion" value="+46">+46 años</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label htmlFor="consulta" className="form-label">Consulta</label>
                            <textarea name="consulta" id="consulta" className="form_input" placeholder="Escribe tu consulta aquí..."></textarea>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <button type="submit" className="form_boton" data-bs-toggle="modal" data-bs-target="#exampleModal">Enviar</button>
                            </div>
                            <div className="col-6">
                                <button type="reset" className="form_boton">Reset</button>
                            </div>
                        </div>
                    </form>

        
        </>

    );
}