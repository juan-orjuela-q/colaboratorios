import styles from './Naranja.module.css'
import { useRef } from 'react'
//Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Naranja() {
    const naranja = useRef()

    useGSAP(() => {
        gsap.to(`.${styles.frames}`, { scale: 2.25, duration: 1, scrollTrigger: { trigger: `.${styles.frames}`, start: 'top 80%', end: 'top 100px', scrub: 1 } })
    }, { scope: naranja });
    return (
        <div className={styles.naranja} ref={naranja}>
            <div className={styles.frames}></div>
        </div>
    )
}

export default Naranja
