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
        gsap.to(`.${styles.frames}`, {
            x: 150, y: -150, /*transformOrigin: "79% 90%",*/ duration: 1, scrollTrigger: {
                trigger: `.${styles.frames}`, start: 'top 70%', end: 'bottom 100px', scrub: 1
            }
        })
    }, { scope: manzana });

    return (
        <div className={styles.manzana} ref={manzana}>
            <img src="./manzana/base.webp" alt="Manzana" className="imgFondo" />
            <div className={styles.frames}>
                <img src="./manzana/pedazo.webp" alt="Manzana Pedazo" className="imgFondo" />
            </div>
        <a href="https://drive.google.com/drive/folders/19Nz12YhXRpf8oMkH5f3Yn5sHiMeRnxIT?usp=sharing" target="_blank">&nbsp;</a>
        </div>
    )
}

export default Manzana
