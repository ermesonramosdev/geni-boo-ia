import './Cards.css';
export const Cards = ({ text }) => {

    return(
        <div className="cards__wrapper">
            {text.map((item, index) => (
                <article className="container-card" key={index}>
                    <p>{item}</p>
                </article>
            ))}
        </div>
    );
}