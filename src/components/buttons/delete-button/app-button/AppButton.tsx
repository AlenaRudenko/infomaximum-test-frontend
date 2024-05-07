import { TButton } from "./types"
import './styles.scss'
import { BurgerIcon } from "../../../../icons/source/burger-icon/BurgerIcon"
import { SavedIconFilled } from "../../../../icons/source/saved-icon/SavedIconFilled"

export const AppButton = ({text, type='catalog', isDisabled, onClick}:TButton) => {
    
    return(

        <>
        <button className={`appButton appButton--${type} ${isDisabled && "appButton--disabled"}`} disabled={isDisabled}>
            {type === 'catalog' &&(<BurgerIcon />)}
            {type === 'favorites' && (<SavedIconFilled />)}
            <h4>{text}</h4>
        </button>
        </>
    ) 
}