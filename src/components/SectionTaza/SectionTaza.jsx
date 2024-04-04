import styles from './SectionTaza.module.css'
import { useRef } from 'react'
//Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flotante from '../Flotante/Flotante';
import Inscripcion from '../Inscripcion/Inscripcion';

//import Naranja from '../Naranja/Naranja';
gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionTaza() {
    const sectionTaza = useRef()

    return (
        <div className={styles.sectionTaza} ref={sectionTaza}>
            <header className={`${styles.header} container`}>
                <img className={styles.tazaTitulo} src="/taza/futuroTaza.svg" alt="El futuro en una taza" />
                {/* <Naranja /> */}
                <Flotante tipo="Molecula2" estilos={{ top: '-220px', left: '50%', width: '160px' }} />
            </header>
            <div className={`${styles.inscripciones} container`}>
                <div className={styles.col1}>
                    <p>
                        Un espacio para <strong>observar y
                            escuchar</strong> cuidadosamente
                        fenómenos, comportamientos
                        o características futuras desde
                        <strong>la mirada de personas que se están atreviendo a experimentar.</strong>
                    </p>
                    <img src="/taza/cupos.svg" alt="Inscríbete pronto hay 50 cupos para cada taza" />
                    <Inscripcion numero="1" img="dummy_thumb.webp" titulo="Nombre del video" enlace="#" />
                    <div className={styles.experimentaccion}>
                        <img src="/taza/experimentaccion.svg" alt="Experimentacción" />
                        <p className="bold">
                            Experimentar es un juego que despierta nuestra curiosidad y nos lleva a desbloquear niveles, descubrir nuevas cosas y
                            divertirnos en el proceso.<br /><br />
                            <strong>¡Atrévete a experimentar!</strong>
                        </p>
                    </div>

                </div>
                <div className={styles.col2}>
                    <Inscripcion numero="2" img="dummy_thumb.webp" titulo="Nombre del video" enlace="#" />
                    <Inscripcion numero="3" img="dummy_thumb.webp" titulo="Nombre del video" enlace="#" />
                    <Flotante tipo="Cono" estilos={{ position: 'relative', right: '-50%', top: '-30px', width: '150px' }} />
                </div>
                <div className={styles.probeta}>
                    <img src="/taza/probeta.webp" alt="" />

                </div>
            </div>

        </div>
    )
}

export default SectionTaza
