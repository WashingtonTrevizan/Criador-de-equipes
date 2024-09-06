import './CampoTexto.css'


const CampoTexto = (props) => {

    // let valor ='Hope'

    // const [valor, setValor] = useState('Washington Trevizan')

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className = "campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto