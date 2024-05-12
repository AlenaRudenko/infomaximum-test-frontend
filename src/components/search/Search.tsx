import { observer } from "mobx-react-lite";
import {
  StyledInput,
  StyledSearchButton,
  StyledSearchInput,
} from "./Search.styles";
import { IProps } from "./types";
import { memo } from "react";

export const Search = memo(
  observer(({ onTextChange, placeholder, onButtonClick, value }: IProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onTextChange(e.target.value);
    };
    return (
      <StyledSearchInput>
        <StyledInput
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
        <StyledSearchButton onClick={onButtonClick} />
      </StyledSearchInput>
    );
  })
);
