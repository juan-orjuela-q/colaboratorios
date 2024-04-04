import { useRef, useEffect } from 'react'
import styles from './SectionIntro.module.css'
function SectionIntro({ isopen, setIsopen }) {
    const sectionIntro = useRef()
    const videoLimon = useRef()

    //Reproducir video si isOpen es true, usando useEffect
    useEffect(() => {
        if (isopen) {
            videoLimon.current.play()
            sectionIntro.current.classList.add(styles.open)
        }
    }, [isopen])


    function handleClick() {
        setIsopen(true)

    }
    return (
        <>
            <div className={styles.sectionIntro} ref={sectionIntro}>
                <div className="container">
                    <img className={styles.logoImagix} src="/intro/logoImagix.svg" alt="Imagix" />
                    <div className={styles.info}>
                        <img src="/intro/colaboratorioLogo.svg" alt="Colaboratorios" />
                        <p className="bold">
                            Estás en el lugar para experimentar, colaborar e
                            innovar, descubre las mezclas que elevarán
                            los <strong>índices de creatividad.</strong>
                        </p>
                    </div>
                </div>
                <div className={styles.media}>
                    <img src="/intro/pedestal_largo.svg" alt="" />
                    <video src="/intro/limon.mp4" ref={videoLimon}></video>
                </div>
                <div className={styles.cortinas}>
                    <div className={styles.cortina1}></div>
                    <div className={styles.cortina2}>
                        <div className={styles.cortina21}></div>
                        <div className={styles.cortina22}></div>
                    </div>
                </div>
                {!isopen && <button className={`btn ${styles.boton}`} onClick={handleClick}>EMPEZAR</button>}
                {isopen && <Objetivos />}
            </div>
            
        </>
    )
}

function Objetivos() {

    const objetivos = useRef()
    return (
        <div className={styles.objetivos} ref={objetivos}>

            <div className="container">
                <img src="/intro/losObjetivos.svg" alt="Los objetivos de la experimentación" />
                <ul>
                    <li>Identificar el aporte de la <strong>mente creativa.</strong></li>
                    <li>Deducir métodos de <strong>experimentación activa.</strong></li>
                    <li>Verificar el poder del <strong>aprendizaje colaborativo.</strong></li>
                    <li>Descubrir <strong>fórmulas</strong> simples y poderosas para <strong>innovar.</strong></li>
                </ul>
            </div>

        </div>
    )
}

export default SectionIntro
