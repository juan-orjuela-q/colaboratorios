import { useEffect, useRef } from 'react';
import { useWeb } from '../../context/WebContext';
import styles from './Modal.module.css';

function Modal() {
    const { isModalOpen, videoPath, setIsModalOpen } = useWeb();
    
    const modalRef = useRef(null);
    const videoContainerRef = useRef(null);

    useEffect(() => {
        const modal = modalRef.current;
        const videoContainer = videoContainerRef.current;

        if (isModalOpen) {
            modal.style.display = 'flex'; // Mostrar el modal al abrirlo
            const video = document.createElement('video');
            video.src = videoPath;
            video.controls = false;
            video.autoplay = true;
            videoContainer.appendChild(video);
        } else {
            videoContainer.style.display = 'none'; // Ocultar el modal al cerrarlo
            videoContainer.innerHTML = ''; // Limpiar el contenido del modal al cerrarlo
        }

        return () => {
            videoContainer.innerHTML = ''; // Limpiar el contenido del modal al desmontar el componente
        };
    }, [isModalOpen, videoPath]);

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.modal}  ref={modalRef}>
            <button className={`${styles.closeButton} btn`} onClick={handleClose}>Cerrar</button>
            <div className={styles.modalContent}>
                
                <div className={styles.videoContainer}  ref={videoContainerRef}>
                    {/* El video se insertará aquí dinámicamente */}
                </div>
            </div>
        </div>
    );
}

export default Modal;
