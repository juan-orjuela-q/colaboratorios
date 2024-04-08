import styles from './SectionExplora.module.css'
import { useRef } from 'react'

function SectionExplora() {

    const sectionExplora = useRef()
    return (
        <div className={styles.sectionExplora} ref={sectionExplora}>
            <div className={`${styles.titulo} container`}>
                <div className="burbuja1"></div>
                <div className="burbuja2"></div>
                <div className="burbuja3"></div>
                <img src="/explora/explora_mente.svg" alt="Explora y prepara tu mente para este encuentro" />
            </div>
            <div className={styles.final}>
                <img src="/explora/fondo_final_completo.webp" alt="Laboratorio" />
            </div>
            <div className={styles.colophon}>
                <img src="/explora/imagix_color.svg" alt="Imagix" />
            </div>
            
        </div>
    )
}

export default SectionExplora
