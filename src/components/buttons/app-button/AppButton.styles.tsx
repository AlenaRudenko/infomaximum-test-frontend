import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import HoverHeart from './../../../assets/icons/heart/hover-heart.svg'
import Burger from './../../../assets/icons/catalog/burger.svg'


export const StyledAppButton = styled.button<{type:string,isDisabled:boolean}>`
    display:flex;
    align-items:center;
    justify-content:center;
    background: ${(props) => props.type === 'catalog' ? `url(${Burger}) no-repeat 15% 45%` : props.type === 'favorite' ? `url(${HoverHeart}) no-repeat 1% 45%` : ''};
  border-radius: 5px;
  cursor: ${(props) => props.isDisabled ? 'not-allowed' : 'pointer'};
  background-color:${(props) => props.type === 'favorite' ? COLORS.GRAY0WHITE : COLORS.BLUE2};
  color:${(props) => props.type === 'favorite' ? COLORS.GRAY4BLACK : COLORS.GRAY0WHITE};
  padding:${(props) => props.type === 'catalog' ? "9px 20px 9px 32px" : props.type === 'card' ? "19px 99px" : "9px 20px 9px 40px" };
  width:${(props) => props.type === 'card' ? "254px" : "135px" };
  height:${(props) => props.type === 'card' ? "56px" : "36px" };
  &:hover:disabled {
    background-color: ${COLORS.GRAY2};
  }
  &:hover {
    background-color: ${(props) => props.type === 'favorite' ? COLORS.GRAY0WHITE : COLORS.BLUE3};
  }
  transition:background-color 0.3s ease-in-out;
`