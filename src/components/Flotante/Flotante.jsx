import styles from './Flotante.module.css'

function Flotante({tipo = 'Molecula', estilos}) {
    return (
        <div className={styles.flotante} style={estilos}>
            <img src={`./flotantes/flotante${tipo}.svg`} alt="Flotante" />
        </div>
    )
}

export default Flotante
