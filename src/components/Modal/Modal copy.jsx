import { useEffect, useRef } from 'react';
import { useWeb } from '../../context/WebContext';
import styles from './Modal.module.css';

function Modal() {
    const { isModalOpen, videoID, setIsModalOpen } = useWeb();
    const modalRef = useRef(null);

    useEffect(() => {
        const modal = modalRef.current;

        if (isModalOpen) {
            modal.style.display = 'flex'; // Mostrar el modal al abrirlo
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
            iframe.frameBorder = '0';
            iframe.allow = 'autoplay; encrypted-media';
            modal.appendChild(iframe);
        } else {
            modal.style.display = 'none'; // Ocultar el modal al cerrarlo
            modal.innerHTML = ''; // Limpiar el contenido del modal al cerrarlo
        }

        return () => {
            modal.innerHTML = ''; // Limpiar el contenido del modal al desmontar el componente
        };
    }, [isModalOpen, videoID]);

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.modal} ref={modalRef}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={handleClose}>Cerrar</button>
                <div className={styles.videoContainer}>
                    {/* El video se insertará aquí dinámicamente */}
                </div>
            </div>
        </div>
    );
}

export default Modal;
