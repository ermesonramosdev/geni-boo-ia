import './Cards.css';
export const Cards = ({ cardsText, onCardClick }) => {

    return(
        <div className="cards__wrapper">
            {cardsText.map((item, index) => (
                <article className="container-card" key={index} onClick={() => onCardClick(item)}>
                    <p>{item}</p>
                </article>
            ))}
        </div>
    );
}