import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import { useState } from 'react'
import './App.css'

function App() {

  const [cryptos,setCryptos] = useState([]);  

  const obtenerCryptos = (cryptosRecibidos)=>{
    setCryptos(cryptosRecibidos);
  };

  //console.log(cryptos);

  return (
    <>
      <h1>Valores Cryptomonedas:</h1>

      <MiApi solicitarCrypto={obtenerCryptos} />

      <Buscador cryptos = {cryptos} />

      
    </>
  )
}

export default App
