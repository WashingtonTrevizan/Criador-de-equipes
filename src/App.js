
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const time = [
    {
    nome: 'Mecânica do Voo',
    corPrimaria:'#57c278',
    corSecundaria: '#d9f7e9'
  },
  {
    nome: 'Ambiente Espacial',
    corPrimaria:'#82cffa',
    corSecundaria: '#e8f8ff'
  },
  {
    nome: 'Estruturas Aeroespaciais',
    corPrimaria:'#a6d157',
    corSecundaria: '#F0F8E2'
  },
  {
    nome: 'Engenharia Aeroespacial',
    corPrimaria:'#E06B69',
    corSecundaria: '#fde7e8'
  },
  {
    nome: 'Piloto de Aeronaves',
    corPrimaria:'#DB6EBF',
    corSecundaria: '#FAE9F5'
  },
  {
    nome: 'Tecnologia da Informação',
    corPrimaria:'#FFBA05',
    corSecundaria: '#FFEEDF'
  }
  ]   

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario nomeDosTimes={time.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {time.map(time => <Time
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.times === time.nome)}      />)}
      <Rodape />
    

    </div>
  );
}

export default App;
