import styles from './SectionTaza.module.css'
import { useRef } from 'react'
//Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flotante from '../Flotante/Flotante';
import Inscripcion from '../Inscripcion/Inscripcion';
import Chile from '../Chile/Chile';
import Manzana from '../Manzana/Manzana';

//import Naranja from '../Naranja/Naranja';
gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionTaza({isopen}) {
    const sectionTaza = useRef()

    useGSAP(() => {
        gsap.from(`.${styles.tazaTitulo}`, { opacity: 0, duration: 1, scrollTrigger: { trigger: `.${styles.tazaTitulo}`, start: 'top 80%' } })
        gsap.from('.descripcionTaza', { opacity: 0, duration: 1, scrollTrigger: { trigger: '.descripcionTaza', start: 'top 80%' } })
        gsap.from('.cuposTaza', { scale: 0, duration: 1, scrollTrigger: { trigger: '.cuposTaza', start: 'top 80%' } })
        gsap.from(`.${styles.probeta}`, { y: '20px', opacity: 0, duration: 2, scrollTrigger: { trigger: `.${styles.probeta}`, start: 'top 80%' } })
        
        gsap.from(`.${styles.experimentaccion} img`, { scale: 0, duration: 1, scrollTrigger: { trigger: `.${styles.experimentaccion}`, start: 'top 80%' } })
        gsap.from(`.${styles.experimentaccion} p`, { opacity: 0, duration: 1, scrollTrigger: { trigger: `.${styles.experimentaccion}`, start: 'top 80%' } })

    }, { scope: sectionTaza });

    return (
        <div id="seccionTaza" className={styles.sectionTaza} ref={sectionTaza}>
            <header className={`${styles.header} container`}>
                <img className={styles.tazaTitulo} src="/taza/futuroTaza.svg" alt="El futuro en una taza" />
                <Chile isopen={isopen}/>
                <Flotante tipo="Molecula2" estilos={{ top: '-220px', left: '50%', width: '160px' }} />
            </header>
            <div className={`${styles.inscripciones} container`}>
                <div className={styles.col1}>
                    <p className='descripcionTaza'>
                        Un espacio para <strong>observar y
                            escuchar</strong> cuidadosamente
                        fenómenos, comportamientos
                        o características futuras desde
                        <strong>la mirada de personas que se están atreviendo a experimentar.</strong>
                    </p>
                    <img className='cuposTaza' src="/taza/cupos.svg" alt="Inscríbete pronto hay 50 cupos para cada taza" />
                    <Inscripcion numero="1" img="/taza/invitado1.png" enlace="#"  isopen={isopen}/>
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
                    <Inscripcion numero="2" img="/taza/invitado2.png"  enlace="#"   isopen={isopen}/>
                    <Inscripcion numero="3" img="/taza/invitado3.png"  enlace="#"   isopen={isopen}/>
                    <Flotante tipo="Cono" estilos={{ position: 'relative', right: '-50%', top: '-30px', width: '150px' }} />
                </div>
                <div className={styles.probeta}>
                    <img src="/taza/probeta.webp" alt="" />

                </div>
            </div>
            <div className={`${styles.manzana} container`}>
                <img src="/taza/fllecha.svg" alt="" />
                <Manzana />
            </div>
            <img className='separador' src="/taza/separador2.svg" alt="" />
        </div>
    )
}

export default SectionTaza
