import styles from './Evento.module.css'
//Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

function Evento({hora, titulo, descripcion, enlace}) {
    return (
        <div className={styles.evento}>
            <p className="hora">{hora}</p>
            <h3>{titulo}</h3>
            <p className="descripcion">{descripcion}</p>
            {enlace && <a href={enlace} className='btn'>zoom</a>}
        </div>
    )
}

export default Evento
