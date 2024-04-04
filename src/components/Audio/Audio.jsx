import styles from './Audio.module.css'
import { useState, useRef, useEffect } from 'react'

function Audio() {
    const [isPlaying, setIsPlaying] = useState(true)
    const audio = useRef()

    function handleClick() {
        setIsPlaying(!isPlaying)

    }
    useEffect(() => {
        if (isPlaying) {
            audio.current.play()
        } else {
            audio.current.pause()
        }
    }, [isPlaying])

    return (
        <div className={styles.audioBoton} onClick={handleClick}>
            <audio ref={audio} src="/audio/bubbles.mp3" loop autoPlay={isPlaying}></audio>
            <img src={isPlaying ? "/audio/audioOn.svg" : "/audio/audioOff.svg"} alt="Audio" />
        </div>
    )
}

export default Audio
