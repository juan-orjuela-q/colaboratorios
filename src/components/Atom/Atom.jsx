import styles from './Atom.module.css'
//Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Atom() {

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '.atomAnim',
            start: 'top center-=150px',
            end: '+=1000vh',
            scrub: 1,
            markers: true,
            pin: true,
            toggleActions: 'play none none none'
        
        })
    })
    return (
        <div className={`${styles.atom} atomAnim`}>
            <div className={styles.nucleus}>
            </div>
            <div className={styles.orbit}>
                <div className={styles.electron}></div>
            </div>
            <div className={styles.orbit}>
                <div className={styles.electron}></div>
            </div>
            <div className={styles.orbit}>
                <div className={styles.electron}></div>
            </div>
        </div>

    )
}

export default Atom
