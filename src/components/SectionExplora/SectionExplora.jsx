import styles from './SectionExplora.module.css'
import { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionExplora() {

    const sectionExplora = useRef()

    useGSAP(() => {
        const tl = gsap.timeline({scrollTrigger: { trigger: `.${styles.titulo}`, start: 'top 80%' }});
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
                <a href="#" target="_blank" className={`fruta ${styles.chile}`}><img src="/explora/chile.png" alt="Chile" /></a>
                <a href="#" target="_blank" className={`fruta ${styles.limon}`}><img src="/explora/limon.png" alt="Limón" /></a>
                <a href="#" target="_blank" className={`fruta ${styles.manzana}`}><img src="/explora/manzana.png" alt="Manzana" /></a>
            </div>
            <div className={styles.colophon}>
                <img src="/explora/imagix_color.svg" alt="Imagix" />
            </div>
            
        </div>
    )
}

export default SectionExplora
