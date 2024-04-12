import styles from './SectionAprendizaje.module.css'
import { useRef } from 'react'
//Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flotante from '../Flotante/Flotante';
import Evento from '../Evento/Evento';
import Naranja from '../Naranja/Naranja';
import Atom from '../Atom/Atom';
gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionAprendizaje() {

    const sectionAprendizaje = useRef()

    useGSAP(() => {
        gsap.from(`.${styles.aprendizajeTitulo}`, { opacity: 0, duration: 1, scrollTrigger: { trigger: `.${styles.aprendizajeTitulo}`, start: 'top 80%' } })
        gsap.from('.martes', { opacity: 0, duration: 1, scrollTrigger: { trigger: '.martes', start: 'top 80%' } })
        gsap.from('.jueves', { opacity: 0, duration: 1, scrollTrigger: { trigger: '.jueves', start: 'top 80%' } })
        gsap.from(`.${styles.erlenmeyer}`, { y: '20px', opacity: 0, duration: 2, scrollTrigger: { trigger: `.${styles.erlenmeyer}`, start: 'top 80%' } })
        gsap.from(`.${styles.recomendacion}`, { opacity: 0, y: '100px', duration: 1, scrollTrigger: { trigger: `.${styles.recomendacion}`, start: 'top 80%' } })

    }, { scope: sectionAprendizaje });

    return (
        <div className={styles.sectionAprendizaje} ref={sectionAprendizaje}>
            <Atom />
            <header className={`${styles.header} container`}>
                <img className={styles.aprendizajeTitulo} src="./aprendizaje/aprendizaje.svg" alt="Prepárate para el aprendizaje" />
                <Naranja />
                <Flotante tipo="Molecula" estilos={{ top: '20px' }} />
                <Flotante tipo="Cubo" estilos={{ right: '0', top: '-30px', width: '100px' }} />
            </header>
            <div className={`${styles.agenda} container`}>
                <div className={styles.col1}>
                    <img className='martes' src="./aprendizaje/martes.svg" alt="" />
                    <Evento
                        hora="8:00am - 10:20am"
                        titulo="HERRAMIENTAS Y RETO ALKIM-IA"
                        descripcion="Desarrolla tu creatividad aumentada conociendo y experimentando con herramientas de Inteligencia Artificial"
                        enlace="#seccionRetos"
                        label="Acceso con inscripción previa" />
                    <Evento
                        hora="10:30 am - 11:30am"
                        titulo="EL FUTURO EN UNA TAZA"
                        descripcion="Conversaciones con expertos para analizar fenómenos y comportamientos futuros."
                        enlace="#seccionTaza"
                        label="Acceso con inscripción previa" />
                    <Evento
                        hora="4:00pm - 5:00pm"
                        titulo="RECONOCIMIENTOS"
                        descripcion="Un tiempo para honrar los científicos creativos que hacen posibles y confiables los resultados experimentales."
                        enlace="#"
                        label="Acceso general al Colaboratorio" />
                </div>
                <div className={styles.col2}>
                    <img className='jueves' src="./aprendizaje/jueves.svg" alt="" />
                    <Evento
                        hora="8:00am - 10:20am"
                        titulo="HERRAMIENTAS Y RETO DE SIMPLICIDAD"
                        descripcion="Examinar nuevas y frescas herramientas para abordar los retos de manera simple."
                        enlace="#seccionRetos"
                        label="Acceso con inscripción previa" />
                    <Evento
                        hora="10:30am - 12:00"
                        titulo="LA CIENCIA DE LA CREATIVIDAD"
                        descripcion="Conoce sustancias del arte para combinar en tus sesiones creativas."
                        enlace="#"
                        label="Acceso general al Colaboratorio" />

                    <Flotante tipo="Molecula" estilos={{ right: '-160px', bottom: '-30px', width: '100px', position: 'relative' }} />

                </div>
                <div className={styles.erlenmeyer}>
                    <img src="./aprendizaje/erlenmeyer.webp" alt="" />
                </div>

            </div>
            <div className={styles.recomendacionContainer}>
                <img src="./aprendizaje/comillas.svg" alt="" className="comilla comilla1" />
                <p className={styles.recomendacion}>Todos los experimentos en<br />
                    nuestro Colaboratorio están pensados<br />
                    para darte <strong>herramientas creativas</strong>,<br />
                    no pierdas la oportunidad de<br />
                    <strong>nutrir y expandir tu mente.</strong></p>
                    <img src="./aprendizaje/comillas.svg" alt="" className="comilla comilla2" />
            </div>
            <img className='separador' src="./aprendizaje/separador1.svg" alt="" />
        </div>
    )
}

export default SectionAprendizaje
