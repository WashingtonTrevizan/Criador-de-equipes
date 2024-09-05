import './Formulario.css'
import CampoTexto from '../CampoTexto';


function Formulario() {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para Criar o Card do Colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    );
}

export default Formulario