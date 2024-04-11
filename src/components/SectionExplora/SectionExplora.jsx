import styles from './SectionExplora.module.css'
import { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tooltip from '../Tooltip/Tooltip';
gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionExplora() {

    const sectionExplora = useRef()

    useGSAP(() => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: `.${styles.titulo}`, start: 'top 80%' } });
        tl.from(`.${styles.titulo}`, { scale: 0, y: 200, duration: 1, ease: "power4.out" })
        tl.from('.burbuja', { scale: 0, duration: 0.5, stagger: 0.25, ease: "back.out(4)" }, '<0.5')
        tl.from('.fruta', { opacity: 0, duration: 0.5, stagger: 0.25 }, '>1')

    }, { scope: sectionExplora });



    return (
        <div className={styles.sectionExplora} ref={sectionExplora}>
            <div className={`${styles.titulo} container`}>
                <div className="burbuja burbuja1"></div>
                <div className="burbuja burbuja2"></div>
                <div className="burbuja burbuja3"></div>
                <img src="/explora/explora_mente.svg" alt="Explora y prepara tu mente para este encuentro" />

            </div>
            <div className={styles.final}>
                <div className="finalAtom"></div>
                <img src="/explora/mesa_experimentos.webp" alt="Laboratorio" />
                <div className={`fruta ${styles.chile}`}>
                    <img src="/explora/chile.png" alt="Chile" />
                    <Tooltip
                        titulo="Los procrastinnovadores"
                        descripcion="Un podcast que nos muestra los beneficios tiene la procrastinación 
                    en el pensamiento creativo y la innovación."
                        formato="PODCAST" enlace="https://open.spotify.com/episode/1z2Dcn7WZAIeDHAFV0BcEg?si=NXryu79eSaWqGvYKV641Yg"
                        estilos="estilo1"
                        css={{left: 0, transform: 'none'} } />
                </div>
                <div className={`fruta ${styles.limon}`}>
                    <img src="/explora/limon.png" alt="Limón" />
                    <Tooltip
                        titulo="Fooduristic 2023"
                        descripcion="Contiene las tendencias, las reflexiones y las buenas prácticas de los protagonistas de 
                        las soluciones a los desafíos del sector alimentario en ámbitos como la sostenibilidad, 
                        la salud y el bienestar."
                        formato="LIBRO PDF" enlace="https://www.kmzerohub.com/post/fooduristic-2024"
                        estilos="estilo2" />
                </div>
                <div className={`fruta ${styles.manzana}`}>
                    <img src="/explora/manzana.png" alt="Manzana" />
                    <Tooltip
                        titulo="Justifica tu respuesta"
                        descripcion="Da consejos para el día a día en el aula, sobre nuevas metodologías, resolución de 
                        conflictos, educación emocional o técnicas de estudio. Si bien es en el aula, 
                        probablemente funcionen en las sesiones de aprendizaje en la corporación."
                        formato="BLOG" enlace="https://justificaturespuesta.com/"
                        estilos="estilo3"
                        css={{right: '15%', left: 'initial', transform: 'none'} } />
                </div>
                <div className={`fruta ${styles.probeta1}`}>
                    <img src="/explora/probeta1.png" alt="Probeta" />
                    <Tooltip
                        titulo="El efecto mariposa de la 
                        imprenta de Gutenberg."
                        descripcion="Cada descubrimiento o innovación trae consigo un efecto."
                        formato="VIDEO" enlace="https://www.youtube.com/watch?v=kKRO7tUqu1s"
                        estilos="estilo4" />
                </div>
                <div className={`fruta ${styles.probeta2}`}>
                    <img src="/explora/probeta2.png" alt="Probeta" />
                    <Tooltip
                        titulo="How to manage for 
                        collective creativity"
                        descripcion="Encuentra herramientas y tácticas que mantienen el flujo de grandes ideas."
                        formato="ted video" enlace="https://www.ted.com/talks/linda_hill_how_to_manage_for_collective_creativity"
                        estilos="estilo5"
                         />
                </div>
            </div>
            <div className={styles.colophon}>
                <img src="/explora/imagix_color.svg" alt="Imagix" />
            </div>

        </div>
    )
}

export default SectionExplora
