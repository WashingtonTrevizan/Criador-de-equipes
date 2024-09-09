import './Banner.css'
function Banner () {
    // JSX
    return(
        <header className= "banner">
            <div className="Titulo">
                <h1>Cadastre a sua equipe para essa viagem espacial</h1>
            </div>
            <div>
                <img src="/imagens/Astronauta.svg"  alt="banner principal da pagina organo"/>
            </div>
       </header>
    )
}

export default Banner