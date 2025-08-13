import './Cards.css';
export const Cards = ({ text, onCardClick }) => {

    return(
        <div className="cards__wrapper">
            {text.map((item, index) => (
                <article className="container-card" key={index} onClick={() => onCardClick(item)}>
                    <p>{item}</p>
                </article>
            ))}
        </div>
    );
}