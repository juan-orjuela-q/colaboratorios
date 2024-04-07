import styles from './Inscripcion.module.css'

function Inscripcion({numero, img, titulo, enlace}) {
    return (
        <div className={styles.inscripcion}>
            <img src={`/intro/num${numero}.svg`} alt={numero} />
            <div className={styles.thumb}>
                <div>
                    <img src={`/taza/${img}`} alt={titulo} />
                </div>
            </div>
            <h3>{titulo}</h3>
            <a href={enlace}>INSCRÍBETE<br/> <strong>AQUÍ</strong></a>
        </div>
    )
}

export default Inscripcion
