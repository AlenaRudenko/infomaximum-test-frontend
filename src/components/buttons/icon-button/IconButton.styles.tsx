import styled from "styled-components";
import hoverHeart from "./../../../assets/icons/heart/hover-heart.svg";
import emptyHeart from "./../../../assets/icons/heart/empty-heart.svg";
import pressedHeart from "./../../../assets/icons/heart/pressed-heart.svg";
import disableHeart from "./../../../assets/icons/heart/disable-heart.svg";
import defaultDelete from "./../../../assets/icons/delete/delete-default.svg";
import pressedDelete from "./../../../assets/icons/delete/delete-pressed.svg";
import hoverDelete from "./../../../assets/icons/delete/delete-hover.svg";

export const StyledIconButton = styled.button<{
  disabled?: boolean;
  $isFavorite?: boolean;
  type: string;
}>`
  height: ${(props) => {
    if (props.type === "heart") {
      return `29px`;
    }
    if (props.type === "delete") {
      return "57px";
    }
  }};
  width: ${(props) => {
    if (props.type === "heart") {
      return `29px`;
    }
    if (props.type === "delete") {
      return "56px";
    }
  }};
  margin-left: 25px;
  background: ${(props) => {
    if (props.type === "heart") {
      if (props.$isFavorite) {
        return `url(${pressedHeart}) no-repeat`;
      } else return `url(${emptyHeart}) no-repeat`;
    }
    if (props.type === "delete") {
      return `url(${defaultDelete}) no-repeat`;
    }
  }};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    background: ${(props) => {
      if (props.type === "heart") {
        return `url(${hoverHeart}) no-repeat`;
      }
      if (props.type === "delete") {
        return `url(${hoverDelete})`;
      }
    }};
  }
  &:disabled {
    background: url(${disableHeart}) no-repeat;
  }
  &:hover:disabled {
    background: url(${disableHeart}) no-repeat;
  }
  &:active {
    background: ${(props) => {
      if (props.type === "heart") {
        if (props.$isFavorite) {
          return `url(${emptyHeart}) no-repeat`;
        } else return `url(${pressedHeart}) no-repeat`;
      }
      if (props.type === "delete") {
        return `url(${pressedDelete})`;
      }
    }};
  }
  transition: background 0.3s ease-in-out;
`;
