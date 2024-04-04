import styles from './SectionAprendizaje.module.css'
import { useRef } from 'react'
//Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flotante from '../Flotante/Flotante';
import Evento from '../Evento/Evento';
gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionAprendizaje() {

    const sectionAprendizaje = useRef()

    return (
        <div className={styles.sectionAprendizaje} ref={sectionAprendizaje}>
            <header className={`${styles.header} container`}>
                <img className={styles.aprendizajeTitulo} src="/aprendizaje/aprendizaje.svg" alt="Prepárate para el aprendizaje" />
                <div className={styles.naranja}>

                </div>
                <Flotante tipo="Molecula" estilos={{ top: '20px' }} />
                <Flotante tipo="Cubo" estilos={{ right: '0', top: '-30px', width: '100px' }} />
            </header>
            <div className={`${styles.agenda} container`}>
                <div className={styles.col1}>
                    <img src="/aprendizaje/martes.svg" alt="" />
                    <Evento
                        hora="8:00 am"
                        titulo="APERTURA DEL ENCUENTRO"
                        descripcion="Vamos a ingresar juntos al colaboratorio y a preparar nuestra mente para ver posibilidades."
                        enlace="#" />
                    <Evento
                        hora="8:30 am"
                        titulo="EL FUTURO EN UNA TAZA"
                        descripcion="Observar cuidadosamente 
                        fenómenos, comportamientos 
                        o características futuras." />
                    <Evento
                        hora="9:30 am"
                        titulo="HERRAMIENTAS ALKIM-IA"
                        descripcion="Conocer herramientas 
                        de inteligencia artificial."
                        enlace="#" />
                    <Evento
                        hora="9:30 am"
                        titulo="RETO ALKIM-IA"
                        descripcion="Disponer de herramientas 
                        con inteligencia artificial 
                        para su uso en experimentos
                        creativos." />
                    <Evento
                        hora="4:00 pm"
                        titulo="RECONOCIMIENTOS"
                        descripcion="Validar la precisión y 
                        confiabilidad de los 
                        resultados experimentales."
                        enlace="#" />
                </div>
                <div className={styles.col2}>
                    <img src="/aprendizaje/jueves.svg" alt="" />
                    <Evento
                        hora="9:00 am"
                        titulo="LA CIENCIA DE LA CREATIVIDAD"
                        descripcion="Combinar sustancias del arte para agregar a tus sesiones creativas."
                        enlace="#" />
                    <Evento
                        hora="11:00 am"
                        titulo="HERRAMIENTAS DE SIMPLICIDAD"
                        descripcion="Examinar detalladamente, 
                        frescas y nuevas herramientas
                         para abordar los retos 
                        de manera simple."
                        enlace="#" />
                    <Evento
                        hora="2:00 pm"
                        titulo="RETO  SIMPLE"
                        descripcion="Realizar pruebas controladas
                        para poner a prueba
                        los retos de simplicidad. " />
                </div>
                <div className={styles.erlenmeyer}></div>
            </div>

        </div>
    )
}

export default SectionAprendizaje
