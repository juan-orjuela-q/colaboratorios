import styles from './Manzana.module.css'
import { useRef } from 'react'
//Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Manzana() {
    const manzana = useRef()

    useGSAP(() => {
        gsap.to(`.${styles.frames}`, { rotation: 50, transformOrigin: "79% 90%", duration: 1, scrollTrigger: { trigger: `.${styles.frames}`, start: 'top 70%', end: 'top 100px', scrub: 1, markers: true } })
    }, { scope: manzana });
    
    return (
        <div className={styles.manzana} ref={manzana}>
            <div className={styles.frames}></div>
        </div>
    )
}

export default Manzana
