import styles from './Ponente.module.css'
function Ponente({ img, titulo, descripcion }) {
    return (
        <div className={styles.ponente}>
            <h3>{titulo}</h3>
            <div className={styles.thumb}>
                <div>
                    <img src={`/ciencia/${img}`} alt={titulo} />
                </div>
            </div>
            <p>{descripcion}</p>
        </div>
    )
}

export default Ponente
