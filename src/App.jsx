import { BoxAks } from './components/BoxAks/BoxAks';
import { Cards } from './components/Cards/Cards';
import './global.css';
function App() {

  return (
    <div className="container">
      <img src="image/mascote-pea.svg" alt="A Ervilha cientista" width="100px"/>
      <Cards 
      text={
        [
          "Explique este assunto com termos simples",
          "Faça um resumo",
          "Dê-me questões para praticar",
          "Dê exemplos da vida real!"

        ]
      }
      />
      <BoxAks />
    </div>
  )
}

export default App
