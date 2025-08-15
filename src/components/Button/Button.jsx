import './Button.css';

export const Button = ({ icon, onClick }) => {
    return(
        <div className="container__button__aks">
            <button type="submit" className='icon__arrow__up' onClick={onClick}>{icon}</button>
        </div>
    );
}