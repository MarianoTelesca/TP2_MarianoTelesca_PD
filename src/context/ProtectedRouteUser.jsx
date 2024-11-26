import { useLogin } from './loginContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRouteUser( {children} ) {
    const { logueado } = useLogin();

    if(logueado == "usuario") {
        return children;
    } else {
        return <Navigate to="/" />;
    }

}

