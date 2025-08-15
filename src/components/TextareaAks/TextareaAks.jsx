import "./TextareaAks.css"
export const TextareaAks = ({ value, onChange, onKeyDown }) => {
    return(
        <textarea 
            className="input__ask"
            rows="260px" 
            placeholder="Pergunte-me qualquer coisa"
            value={value}
            onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            onChange={onChange}
            onKeyDown={onKeyDown}
        ></textarea>
    );
}