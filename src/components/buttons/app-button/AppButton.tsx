import { TButton } from "./types"
import { StyledAppButton } from "./AppButton.styles"

export const AppButton = ({text, type='catalog', isDisabled=false, onClick}:TButton) => {
    
    return(
            <StyledAppButton type={type} isDisabled={isDisabled}>
                <h4>{text}</h4>
            </StyledAppButton>

    ) 
}