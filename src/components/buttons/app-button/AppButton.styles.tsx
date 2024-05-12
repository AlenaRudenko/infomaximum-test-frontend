import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import HoverHeart from "./../../../assets/icons/heart/hover-heart.svg";
import Burger from "./../../../assets/icons/catalog/burger.svg";

export const StyledAppButton = styled.button<{
  type: string;
  disabled: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.type === "catalog"
      ? `url(${Burger}) no-repeat 15% 45%`
      : props.type === "favorite"
      ? `url(${HoverHeart}) no-repeat 1% 45%`
      : ""};
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    props.type === "favorite" ? COLORS.GRAY0WHITE : COLORS.BLUE2};
  color: ${(props) =>
    props.type === "favorite" ? COLORS.GRAY4BLACK : COLORS.GRAY0WHITE};
  padding: ${(props) =>
    props.type === "catalog"
      ? "9px 20px 9px 32px"
      : props.type === "card"
      ? "19px 99px"
      : props.type === "saved"
      ? "19px 34px"
      : "9px 20px 9px 40px"};
  width: ${(props) =>
    props.type === "card"
      ? "254px"
      : props.type === "saved"
      ? "259px"
      : "135px"};

  &:disabled {
    background-color: ${COLORS.GRAY2};
    color: ${COLORS.GRAY4BLACK};
  }
  &:hover {
    background-color: ${(props) =>
      props.type === "favorite" ? COLORS.GRAY0WHITE : COLORS.BLUE3};
  }
  &:hover:disabled {
    background-color: ${COLORS.GRAY2};
  }
  transition: background-color 0.3s ease-in-out;
`;
