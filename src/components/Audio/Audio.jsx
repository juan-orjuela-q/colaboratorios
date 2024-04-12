import styles from './Audio.module.css'
import { useWeb } from '../../context/WebContext'
import { useRef, useEffect } from 'react'

function Audio() {
    //const [isPlaying, setIsPlaying] = useState(true)
    const { isSoundOn, setIsSoundOn } = useWeb()
    
    const audio = useRef()

    function handleClick() {
        setIsSoundOn(!isSoundOn)

    }
    useEffect(() => {
        if (isSoundOn) {
            audio.current.play()
        } else {
            audio.current.pause()
        }
    }, [isSoundOn])

    return (
        <div className={styles.audioBoton} onClick={handleClick}>
            <audio ref={audio} src="./audio/laboratorio.mp3" loop autoPlay={isSoundOn}></audio>
            {isSoundOn ? <img className={styles.on} src="./audio/soundOn.gif" alt="Audio On" /> : <img className={styles.off} src="./audio/soundOff.svg" alt="Audio Off" />}
            
        </div>
    )
}

export default Audio
