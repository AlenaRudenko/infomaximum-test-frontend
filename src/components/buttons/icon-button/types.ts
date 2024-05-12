export interface IButton {
  type: "heart" | "delete";
  $isDisabled?: boolean;
  $isFavorite?: boolean;
  onButtonClick: () => void;
}
