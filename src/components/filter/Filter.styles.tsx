import styled from "styled-components";

export const StyledFilterContainer = styled.div`
    display:flex;
    gap:12px;
    align-items:center;
`

export const StyledFilter = styled.select`
        width:204px;
        font-size: 18px;
        font-weight:500;
        height: 30px;
        border:none;
        outline: none;
        appearance: none;
        cursor:pointer;
        &:focus {
            outline:none;
        }

`