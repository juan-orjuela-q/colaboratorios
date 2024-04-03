import { useRef } from 'react'
import styles from './SectionIntro.module.css'
function SectionIntro({ isopen, setIsopen }) {
    const sectionIntro = useRef()

    function handleClick() {
        setIsopen(true)

    }
    return (
        <>
            <div className={styles.sectionIntro} ref={sectionIntro}>
                <div className="container">
                    <img className={styles.logoImagix} src="/intro/logoImagix.svg" alt="Imagix" />
                    <div className={styles.info}>
                        <img src="/intro/colaboratorioLogo.svg" alt="Colaboraorios" />
                        
                    </div>
                </div>
                <div className={styles.media}>
                    <img src="/intro/pedestal.webp" alt="" />
                    <video src="/intro/limon.mp4"></video>
                </div>
                <div className={styles.cortinas}>
                    <div className={styles.cortina1}></div>
                    <div className={styles.cortina2}>
                        <div className={styles.cortina21}></div>
                        <div className={styles.cortina22}></div>
                    </div>
                </div>
                {!isopen && <button className='btn' onClick={handleClick}>EMPEZAR</button>}
            </div>
            {isopen && <Objetivos />}
        </>
    )
}

function Objetivos() {

    const objetivos = useRef()
    return (
        <div className={styles.objetivos} ref={objetivos}>

            <div className="container">
                <img src="/intro/losObjetivos.svg" alt="" />
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

        </div>
    )
}

export default SectionIntro
