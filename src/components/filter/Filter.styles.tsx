import styled from "styled-components";
import sortIcon from "./../../assets/icons/sort/sort.svg";

export const StyledFilterContainer = styled.div`
  width: 180px;
  display: flex;
  justify-content: flex-end;
  background: url(${sortIcon}) no-repeat 0% 45%;
`;

export const StyledFilter = styled.select`
  font-size: 18px;
  font-weight: 500;
  height: 30px;
  border: none;
  outline: none;
  appearance: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
