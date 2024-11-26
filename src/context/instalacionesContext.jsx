import { createContext, useContext, useState } from "react";
import instalaciones_futbol from '../images/instalaciones_futbol.jpg'
import instalaciones_tenis from '../images/instalaciones_tenis.jpg'
import instalaciones_basket from '../images/instalaciones_basket.jpg'
import instalaciones_quincho from '../images/instalaciones_parrilla.jpg'
import instalaciones_cumple from '../images/instalaciones_cumple.jpg'
import instalaciones_pileta from '../images/instalaciones_pileta.jpg'
import instalaciones_gimnasio from '../images/instalaciones_gimnasio.jpg'

const listaInstalaciones = [
    { id:1, nombre: "Pileta", activo: false, disponibilidad: "Diciembre a Marzo", imagen: instalaciones_pileta, descripción:"La pileta está habilitada de diciembre a marzo, contando con guardavidas en todo momento para asegurar la seguridad de nuestros socios. El acceso se paga aparte y los invitados individuales son aceptados con un cargo adicional. Durante esta temporada, ofrecemos clases de aquagym para mantenerte en forma mientras te diviertes. Nuestra pileta cuenta con una zona para bebés, una zona de baja profundidad para niños y una parte profunda de 2 metros, ideal para disfrutar del agua en todas sus formas." },
    { id:2, nombre: "Gimnasio", activo: true, disponibilidad: "Todo el año", imagen: instalaciones_gimnasio, descripción:"Nuestro gimnasio está disponible sin turno previo, con un entrenador siempre presente para guiarte en tus entrenamientos. Además, ofrecemos una amplia variedad de clases, desde yoga, baile, running, hasta patinaje y más. Las clases están dirigidas por profesionales que te ayudarán a mejorar tu forma física en un ambiente ameno y motivador, adaptado a todos los niveles." },
    { id:3, nombre: "Futbol", activo: true, disponibilidad: "Todo el año", imagen: instalaciones_futbol, descripción:"Contamos con dos canchas de fútbol para el disfrute de nuestros socios. La cancha principal de 11 jugadores está en excelente estado, ideal para partidos y torneos. Además, tenemos una cancha más pequeña de 8, perfecta para partidos informales o entrenamientos. Ambas se encuentran en condiciones óptimas y se utilizan para eventos y partidos regulares, ofreciendo un espacio de calidad para todos los amantes de este deporte." },
    { id:4, nombre: "Tenis", activo: true, disponibilidad: "Todo el año", imagen: instalaciones_tenis, descripción:"En nuestro polideportivo, los fanáticos del tenis pueden disfrutar de seis canchas de polvo de ladrillo, que se mantienen y cuidan a diario para asegurar la mejor experiencia. Ofrecemos reservas de media hora para singles y una hora para dobles. Además, tenemos una escuelita de tenis con profesores altamente capacitados, donde podrás perfeccionar tu técnica. También organizamos torneos para fomentar la competencia entre los socios, brindando un espacio completo para el disfrute de este deporte." },
    { id:5, nombre: "Basket", activo: true, disponibilidad: "Todo el año", imagen: instalaciones_basket, descripción:"Contamos con una cancha de básquet y otra de vóley, ambas disponibles para todos nuestros socios. Puedes pedir pelotas en la recepción para disfrutar de estos deportes con amigos o en familia. Las canchas son de uso libre y están en perfectas condiciones para quienes desean practicar o disfrutar de partidos informales." },
    { id:6, nombre: "Parrillas", activo: true, disponibilidad: "Todo el año", imagen: instalaciones_quincho, descripción:"Nuestros quinchos y parrillas están diseñados para ofrecerte una experiencia social única. Disponemos de dos quinchos cerrados con gran capacidad, ideales para reuniones o eventos privados. Además, contamos con alrededor de 20 parrillas al aire libre, cada una con mesas para que disfrutes de un buen asado en familia o con amigos en un entorno relajado y cómodo." },
    { id:7, nombre: "Cumpleaños", activo: true, disponibilidad: "Marzo a Noviembre", imagen: instalaciones_cumple, descripción:"Ofrecemos el espacio perfecto para celebrar tu cumpleaños o cualquier otro evento especial. Con capacidad para una gran cantidad de invitados, nuestros salones están disponibles para celebraciones de marzo a noviembre. Durante la temporada alta (diciembre a febrero), no es posible realizar eventos, y los invitados no pueden hacer reservas para las canchas de tenis. Sin embargo, te aseguramos una experiencia inolvidable con todos los servicios a tu disposición." },
];

const instalacionesContext = createContext();

export function InstalacionesProvider({children}){
    
    const [instalaciones, setInstalaciones] = useState(listaInstalaciones);
    
    const instalacionHabilitada = (id) => {
        const instalaciones_temp = instalaciones.map((instalacion) =>
            instalacion.id == id? { ...instalacion, activo: !instalacion.activo } : instalacion
        )
        setInstalaciones(instalaciones_temp)
    };

    return ( 
        <instalacionesContext.Provider value={ {instalaciones, instalacionHabilitada} } > 
            {children} 
        </instalacionesContext.Provider>
    )
}

export function useInstalaciones(){
    return ( useContext(instalacionesContext) );
}