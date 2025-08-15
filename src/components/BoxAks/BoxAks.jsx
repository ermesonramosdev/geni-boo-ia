import { TextareaAks } from "../TextareaAks/TextareaAks";
import { Button } from "../Button/Button";
import { FaArrowCircleUp, FaUserCircle   } from "react-icons/fa";
import './BoxAks.css';
import { useState } from "react";

export const BoxAks = () => {

    //Armazena o texto do TextareAks
    const [messagem, setMessagem] = useState("");
    //Serve para armazenar os cards que o usuário ira digitar fazendo uma pergumta
    const [cards, setCards] = useState([]);

    //Adicionar os cards que o usuário ira perguntar
    const addCards = () => {
        if(messagem.trim() !== "") {
            setCards([...cards, messagem]);
            setMessagem("")
        }
    }

   const addCardsEnter = (e) => {  
        if(e.key === "Enter") {
            e.preventDefault();
            addCards();
        }  
   }
    

    return(
        <>
            {cards.map((card) => (
                <div style={{ width: "500px", height: "auto" ,display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row-reverse", margin: "5px", gap: "5px" }}>
                        <div className="icon__user">
                            <FaUserCircle />
                        </div>
                        <div className="messages">
                        <div className="message__card">
                            <p>{card}</p>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="container__box__aks">
                <TextareaAks value={messagem} onChange={(e) => setMessagem(e.target.value)} onKeyDown={addCardsEnter}/> 
                <Button onClick={addCards} icon={<FaArrowCircleUp  />}/>
            </div>
        </>
    );
}