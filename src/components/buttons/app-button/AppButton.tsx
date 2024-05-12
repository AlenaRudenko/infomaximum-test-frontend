import { TButton } from "./types";
import { StyledAppButton } from "./AppButton.styles";
import { memo } from "react";

export const AppButton = memo(
  ({ text, type, $isDisabled = false, onClick }: TButton) => {
    return (
      <StyledAppButton type={type} disabled={$isDisabled} onClick={onClick}>
        <h4>{text}</h4>
      </StyledAppButton>
    );
  }
);
