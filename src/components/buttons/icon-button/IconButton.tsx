import { StyledIconButton } from "./IconButton.styles";
import { IButton } from "./types";

export const IconButton = ({
  type,
  $isDisabled,
  $isFavorite,
  onButtonClick,
}: IButton) => {
  return (
    <StyledIconButton
      type={type}
      $isFavorite={$isFavorite}
      disabled={$isDisabled}
      onClick={onButtonClick}
    />
  );
};
