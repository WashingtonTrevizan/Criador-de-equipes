import '../Rodape/Rodape.css'

const Rodape = () => {
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/WashingtonTrevizan/Biometria-University" target="_blank">
                        <img src=  '/imagens/fb.png' alt='imagem do facebook'></img>
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src=  '/imagens/tw.png' alt='imagem do twitter'></img>
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src=  '/imagens/ig.png' alt='imagem do instagram'></img>
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src='/imagens/logo.png' alt='' />
        </section>
        <section>
            <p>Desenvolvido por Washington Trevizan</p>
        </section>
    </footer>)
}

export default Rodape