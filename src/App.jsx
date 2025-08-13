import { useState } from 'react';
import { BoxAks } from './components/BoxAks/BoxAks';
import { Cards } from './components/Cards/Cards';
import './global.css';
function App() {

  const [messages, setMessages] = useState([]);

  const handleCardClick = (text) => {
    setMessages((prev) => [...prev, { id: Date.now(), text}]);
  }

  return (

    <div className="container">
      <img src="image/mascote-pea.svg" alt="A Ervilha cientista" width="100px"/>

      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className="message-card">
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <Cards 
      text={[
          "Explique este assunto com termos simples",
          "Faça um resumo",
          "Dê-me questões para praticar",
          "Dê exemplos da vida real!"
        ]}
        onCardClick={handleCardClick}
      />
      <BoxAks />
    </div>
  )
}

export default App
