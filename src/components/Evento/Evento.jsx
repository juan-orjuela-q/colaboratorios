import styles from './Evento.module.css'
import { useRef } from 'react'
//Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

function Evento({ hora, titulo, descripcion, enlace }) {
    const evento = useRef()

    useGSAP(() => {
        const tl = gsap.timeline({
            ease: "power3.out", scrollTrigger: {
                trigger: evento.current,
                start: 'top 80%'
            }
        });

        tl.from('.hora', { text: ' ', duration: 1 })
        tl.from('h3', { text: ' ', duration: 1 }, '<0.5')
        tl.from('.descripcion', { opacity: 0, y: '100px', duration: 1 }, '<0.5')
        tl.to('.btn', { opacity: 1, duration: 1, delay: 1 }, '<')

    }, { scope: evento })

    return (
        <div className={styles.evento} ref={evento}>
            <p className="hora">{hora}</p>
            <h3>{titulo}</h3>
            <p className="descripcion">{descripcion}</p>
            {enlace && <a href={enlace} className='btn btnZoom'>zoom</a>}
        </div>
    )
}

export default Evento
