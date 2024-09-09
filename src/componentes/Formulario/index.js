import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [times, setTimes] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            times
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTimes('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para Criar o Card do Colaborador</h2>
                <CampoTexto
                     obrigatorio={true} 
                     label="Nome" 
                     placeholder="Digite seu nome"
                     valor={nome}
                     aoAlterado={valor => setNome(valor)}
                     />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="ex:https://github.com/washingtontrevizan.png"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    itens ={props.nomeDosTimes} 
                    label="Time"
                    valor={times}
                    aoAlterado={valor => setTimes(valor)}
                />
                <Botao texto='Criar Card'/>
            </form>
        </section>
    );

}



export default Formulario