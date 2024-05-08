import styled from "styled-components";
import hoverHeart from "./../../../assets/icons/heart/hover-heart.svg"
import emptyHeart from "./../../../assets/icons/heart/empty-heart.svg"
import pressedHeart from "./../../../assets/icons/heart/pressed-heart.svg"

export const StyledFavButton = styled.button<{isDisabled:boolean, isFavorited:boolean}>`
height: 27px;
width: 27px;
margin-left: 25px;
background:${(props) => props.isDisabled ? `url(${emptyHeart}) no-repeat`: props.isFavorited ? `url(${pressedHeart}) no-repeat` : `url(${emptyHeart}) no-repeat`} ;
cursor: pointer;
&:hover {
  background: url(${hoverHeart}) no-repeat;
}
transition:background 0.3s ease-in-out;
`