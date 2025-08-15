import { useState } from 'react';
import { BoxAks } from './components/BoxAks/BoxAks';
import { Cards } from './components/Cards/Cards';
import './global.css';
function App() {

  const [selectCard, setSelectCard] = useState(null);

  const texts = [
    "Explique este assunto com termos simples",
    "Faça um resumo",
    "Dê-me questões para praticar",
    "Dê exemplos da vida real!"
  ]

  const handleCardClick = (text) => {
    setSelectCard(text);
  }

  return (

    <div className="container">
      {!selectCard ? (
        <>
          <img src="image/mascote-pea.svg" alt="A Ervilha cientista" width="100px"/>
          <Cards 
            cardsText={texts}
            onCardClick={handleCardClick}
          />
        </>
      ) : (
        <>
          <div style={{ width: "500px", height: "auto" ,display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
            <img src="image/mascote-pea.svg" alt="A Ervilha cientista" width="60px"/>
            <div className="messages">
              <div className="message__card">
                <p>{selectCard}</p>
              </div>
            </div>
          </div>
          <BoxAks />
        </>
      )}
    </div>
  );
}

export default App
