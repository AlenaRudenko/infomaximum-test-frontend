import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import hoverSearch from './../../assets/icons/search/hover-search.svg'
import pressedSearch from './../../assets/icons/search/pressed-search.svg'
import defaultSearch from './../../assets/icons/search/default-search.svg'


export const StyledSearchInput = styled.div`
    display:flex;
    align-items:center;
    width:445px;
    height:36px;
    border-radius:5px;
    border:1px solid ${COLORS.GRAY2};
    padding:6px 4px 6px 10px;

`
export const StyledSearchButton = styled.button`
    height: 24px;
    width: 24px;
    background: url(${defaultSearch}) no-repeat;
    transition: background 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
    background: url(${hoverSearch}) no-repeat;
    }
    &:active {
        background: url(${pressedSearch}) no-repeat;  
    }
`

export const StyledInput = styled.input`
width:407px;
border:none;
font-size:14px;
font-weight:400;
&:focus{
    outline: none;
}
`