import styles from './Inscripcion.module.css'

function Inscripcion({numero, img, titulo, enlace, fecha}) {
    return (
        <div className={styles.inscripcion}>
            {numero && <img className={styles.numero} src={`/intro/num${numero}.svg`} alt={numero} />}
            {fecha && <img className={styles.fecha} src={fecha} alt="Fecha"/>}
            <div className={styles.thumb}>
                <div>
                    <img src={img} alt={titulo} />
                </div>
            </div>
            {titulo && <h3>{titulo}</h3>}
            
            <a href={enlace}>INSCRÍBETE<br/> <strong>AQUÍ</strong></a>
        </div>
    )
}

export default Inscripcion
