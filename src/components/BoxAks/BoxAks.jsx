import { TextareaAks } from "../TextareaAks/TextareaAks";
import { ButtonAks } from "../Button/Button";
import { FaArrowCircleUp  } from "react-icons/fa";
import './BoxAks.css';

export const BoxAks = () => {
    return(
        <div className="container__box__aks">
            <TextareaAks />
            <ButtonAks icon={<FaArrowCircleUp  />}/>
        </div>
    );
}