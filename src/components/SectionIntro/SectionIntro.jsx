import { useRef, useEffect } from 'react'
import styles from './SectionIntro.module.css'
import { useWeb } from '../../context/WebContext'
//Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionIntro() {
    const sectionIntro = useRef()
    const videoLimon = useRef()

    const { isOpen, setIsOpen } = useWeb()


    useEffect(() => {
        if (isOpen) {
            videoLimon.current.play()
            sectionIntro.current.classList.add(styles.open)
        }
    }, [isOpen])


    function handleClick() {
        setIsOpen(true)
    }

    //Animación
    useGSAP(() => {
        //Timeline
        const tl = gsap.timeline({ ease: "power3.out" });

        tl.to(`.${styles.cortina1}`, { x: '-30vw', scale: 1.2, duration: 1 })
        tl.to(`.${styles.cortina2}`, { x: '40vw', scale: 1.25, duration: 1 }, '<')
        tl.to(`.${styles.cortina21}`, { x: '-10%', scale: 1.2, duration: 1 }, '<')
        tl.to(`.${styles.cortina22}`, { x: '-20%', scale: 1.2, duration: 1 }, '<')
        tl.from(`.${styles.media} img`, { y: '50%', scale: 0.6, duration: 1.5 }, '<')
        tl.from(`.${styles.media} video`, { opacity: 0, duration: 1.5 }, '<1.5')
        tl.from(`.${styles.logoImagix}, .${styles.info} img, .${styles.info} p`, { opacity: 0, duration: 1, stagger: 0.25 }, '<0.75')
        tl.to('.btn', { opacity: 1, duration: 1, delay: 1 }, '<')

    }, { scope: sectionIntro });

    return (
        <>
            <div className={styles.sectionIntro} ref={sectionIntro}>
                <div className="container">
                    <img className={styles.logoImagix} src="./intro/logoImagix.svg" alt="Imagix" />
                    <div className={styles.info}>
                        <img src="./intro/colaboratorioLogo.svg" alt="Colaboratorios" />
                        <p className="bold">
                            Estás en el lugar para experimentar, colaborar e
                            innovar, descubre las mezclas que elevarán
                            los <strong>índices de creatividad.</strong>
                        </p>
                    </div>
                </div>
                <div className={styles.media}>
                    <img src="./intro/pedestal_largo.svg" alt="" />
                    <video src="./intro/limonMorado.mp4" ref={videoLimon}></video>
                </div>
                <div className={styles.cortinas}>
                    <div className={styles.cortina1}>
                        <img src="./intro/cortinaIzq2.svg" alt="Cortina" className="imgFondo" />
                    </div>
                    <div className={styles.cortina2}>
                        <div className={styles.cortina21}>
                            <img src="./intro/cortinaDer1.svg" alt="Cortina" className="imgFondo" />
                        </div>
                        <div className={styles.cortina22}>
                            <img src="./intro/cortinaDer2.svg" alt="Cortina" className="imgFondo" />
                        </div>
                    </div>
                </div>
                {!isOpen && <button className={`btn ${styles.boton}`} onClick={handleClick}>EMPEZAR</button>}
                {isOpen && <Objetivos />}
            </div>

        </>
    )
}

function Objetivos() {

    const objetivos = useRef()
    //Animación
    useGSAP(() => {
        //Timeline
        const tl = gsap.timeline({ ease: "power3.out" });

        tl.to('img', { y: '5%', scale: 1.2, duration: 1 })
        tl.from('li', { opacity: 0, duration: 1, stagger: 0.25 }, '<0.75')


    }, { scope: objetivos });

    return (
        <div className={styles.objetivos} ref={objetivos}>

            <div className="container">
                <img src="./intro/losObjetivos.svg" alt="Los objetivos de la experimentación" />
                <ul>
                    <li><img src="./intro/num1.svg" alt="1" className="num" />Identificar el aporte de la <strong>mente creativa.</strong></li>
                    <li><img src="./intro/num2.svg" alt="2" className="num" />Deducir métodos de <strong>experimentación activa.</strong></li>
                    <li><img src="./intro/num3.svg" alt="3" className="num" />Verificar el poder del <strong>aprendizaje colaborativo.</strong></li>
                    <li><img src="./intro/num4.svg" alt="4" className="num" />Descubrir <strong>fórmulas</strong> simples y poderosas para <strong>innovar.</strong></li>
                </ul>
            </div>

        </div>
    )
}

export default SectionIntro
