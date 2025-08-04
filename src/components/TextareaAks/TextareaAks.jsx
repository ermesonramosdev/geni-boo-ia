import "./TextareaAks.css"
export const TextareaAks = () => {
    return(
        <textarea 
            className="input__ask"
            rows="260px" 
            placeholder="Pergunte-me qualquer coisa"
            onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
            }}
        ></textarea>
    );
}