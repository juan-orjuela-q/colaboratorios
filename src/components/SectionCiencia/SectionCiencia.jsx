import styles from './SectionCiencia.module.css'
import { useRef } from 'react'
//Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ponente from '../Ponente/Ponente';
import Flotante from '../Flotante/Flotante';
import Inscripcion from '../Inscripcion/Inscripcion';
//import PuzzleGame from '../PuzzleGame/PuzzleGame';


gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionCiencia() {

    const sectionCiencia = useRef()

    useGSAP(() => {
        gsap.from(`.${styles.cienciaTitulo}`, { opacity: 0, duration: 1, scrollTrigger: { trigger: `.${styles.cienciaTitulo}`, start: 'top 80%' } })
        gsap.from('.bold', { opacity: 0, duration: 1, scrollTrigger: { trigger: '.bold', start: 'top 80%' } })
        gsap.from('.imgReto', { scale: 0, duration: 1, scrollTrigger: { trigger: '.imgReto', start: 'top 80%' } })
        gsap.from('.descReto', { opacity: 0, duration: 1, scrollTrigger: { trigger: '.descReto', start: 'top 80%' } })


    }, { scope: sectionCiencia });

    return (
        <div className={styles.sectionCiencia} ref={sectionCiencia}>
            <header className={`${styles.header} container`}>
                <img className={styles.cienciaTitulo} src="./ciencia/creatividad.svg" alt="La ciencia de la creatividad" />
                <p className='bold'>Combinar sustancias del arte para agregar a tus <strong>sesiones creativas.</strong></p>
            </header>
            {/* <PuzzleGame /> */}
            <div className={`${styles.ponentes} container`}>
                <div className={styles.col1}>
                    <Ponente
                        img="cienciaAzul.png" />
                    <img className={styles.flecha} src="./ciencia/flecha_1.svg" alt="Flecha" />

                    <h2>¡UN ENCUENTRO<br /> PARA TODOS!</h2>

                    <Flotante tipo="Cubo" estilos={{ bottom: '-90px', left: '20px', width: '120px' }} />

                </div>
                <div className={styles.col2}>
                    <Ponente
                        img="cienciaVerde.png" />
                    <Ponente
                        img="cienciaMagenta.png" />
                    <Flotante tipo="Molecula" estilos={{ bottom: '-190px', right: '20px', width: '90px' }} />
                </div>
                <div className={styles.probeta}>
                    <img src="./ciencia/probetaRedonda.webp" alt="Probeta" />
                </div>
                <img src="./ciencia/triangulo.svg" alt="" className={styles.triangulo} />
                <Flotante tipo="Cubo" estilos={{ top: '120px', left: '50%', marginLeft: '-40px', width: '120px' }} />
            </div>
            <div id="seccionRetos" className={`${styles.reto} container`}>
                <div className={styles.col1}>
                    <img className='imgReto' src="./ciencia/reto.svg" alt="" />
                    <p className='descReto'>Es momento de poner a prueba las hipótesis, hacer uso de todo instrumento y <strong>activar la mente creativa.</strong><br /><br />
                        Incríbete tenemos <strong>200 cupos</strong> para cada reto.</p>
                    <Inscripcion fecha="./ciencia/martesReto.svg" img="./ciencia/thumbRetoMartes.webp" enlace="https://calendly.com/paula-yji/alkimia" videoID='./videos/retoMartes.mp4' />
                    <Flotante tipo="Cubo" estilos={{ bottom: '-160px', left: '20px', width: '120px' }} />
                </div>
                <div className={styles.col2}>
                    <Inscripcion fecha="./ciencia/juevesReto.svg" img="./ciencia/thumbRetoJueves.webp" enlace="https://calendly.com/paula-yji/simplicidad" videoID='./videos/retoJueves.mp4' />
                    <Flotante tipo="Cono" estilos={{ bottom: '160px', right: '20px', width: '120px' }} />
                    <Flotante tipo="Molecula2" estilos={{ bottom: '0', right: '90%', width: '120px' }} />
                </div>
            </div>
            <img className='separador' src="./ciencia/separador3.svg" alt="" />
        </div>
    )
}

export default SectionCiencia
