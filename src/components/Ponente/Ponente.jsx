import styles from './Ponente.module.css'
import { useRef } from 'react'
//Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Ponente({ img, titulo, descripcion }) {

    const ponente = useRef()
    useGSAP(() => {
        gsap.from('.contenedor', { scale: 0.75, opacity: 0, y: '100px', duration: 1, scrollTrigger: { trigger: ponente.current, start: 'top 80%' } })

    }, { scope: ponente });

    return (
        <div className={styles.ponente} ref={ponente}>
            <div className='contenedor'>
                <h3>{titulo}</h3>
                <div className={styles.thumb}>
                    <div>
                        <img src={`./ciencia/${img}`} alt={titulo} />
                    </div>
                </div>
                <p>{descripcion}</p>
            </div>

        </div>
    )
}

export default Ponente
