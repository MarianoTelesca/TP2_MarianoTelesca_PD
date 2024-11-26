import MisReservas from "../components/MisReservas";
import MisDatos from "../components/MisDatos";
import LineaDivisoria from '../components/LineaDivisoria';

export default function MiCuenta() {

    return (
        <>
            <div className="container mt-5">

                <MisDatos />

                <LineaDivisoria />

                <MisReservas />
                
            </div>
        </>
    );
}