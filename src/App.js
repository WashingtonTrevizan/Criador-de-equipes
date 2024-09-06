
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaborades] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaborades([...colaboradores])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Time />
    

    </div>
  );
}

export default App;
