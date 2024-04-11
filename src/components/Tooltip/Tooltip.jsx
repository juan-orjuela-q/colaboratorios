import styles from './Tooltip.module.css'
function Tooltip({titulo, descripcion, formato, enlace, estilos = 'estilo1', css = {}}) {
    return (
        <div className={`${styles.tooltip} ${estilos}`} style={css}>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <h4>{formato}</h4>
            <a href={enlace} target="_blank">VER MÁS</a>
        </div>
    )
}

export default Tooltip
