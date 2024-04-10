import styles from './Inscripcion.module.css'
import { useRef } from 'react'
//Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Inscripcion({ numero, img, titulo, enlace, fecha }) {

    const inscripcion = useRef()
    useGSAP(() => {
        gsap.from('.contenedor', { scale: 0.75, opacity: 0, y: '100px', duration: 1, scrollTrigger: { trigger: inscripcion.current, start: 'top 80%'} })

    }, { scope: inscripcion });
    return (
        <div className={styles.inscripcion} ref={inscripcion}>
            <div className="contenedor">
                {numero && <img className={styles.numero} src={`/intro/num${numero}.svg`} alt={numero} />}
                {fecha && <img className={styles.fecha} src={fecha} alt="Fecha" />}
                <div className={styles.thumb}>
                    <div>
                        <img src={img} alt={titulo} />
                    </div>
                </div>
                {titulo && <h3>{titulo}</h3>}

                <a href={enlace}>INSCRÍBETE<br /> <strong>AQUÍ</strong></a>
            </div>

        </div>
    )
}

export default Inscripcion
