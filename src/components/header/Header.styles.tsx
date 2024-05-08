import styled from "styled-components";
import { COLORS } from "../../constants/colors";


export const StyledHeader = styled.header`
width: 100%;
position: fixed;
background-color: ${COLORS.GRAY0WHITE};
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 40px;
height: 70px;
`
export const StyledHeaderLogo = styled.div`
display: flex;
align-items: center;
width: 134px;
height: 18.49px;
img {
  margin-right: 21px;
  width: 100%;
}
`
export const Container = styled.div`
display: flex;
align-items: center;
`

export const HeaderContacts = styled.div`
    display: flex;
    margin-right: 166px;
  a {
    text-decoration: none;
    color: ${COLORS.GRAY4BLACK};
    font-weight: 500;
    margin-left: 31px;
  }
  
`