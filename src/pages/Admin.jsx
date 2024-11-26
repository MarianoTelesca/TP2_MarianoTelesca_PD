import ListaSocios from '../components/ListaSocios'
import ListaInstalaciones from '../components/ListaInstalaciones';
import LineaDivisoria from '../components/LineaDivisoria';

export default function Admin() {

    return (
        <div className="container">

            <h1 className="text-center">Panel de Administración</h1>

            <ListaSocios />

            <LineaDivisoria />

            <ListaInstalaciones />

        </div>
    );
}
