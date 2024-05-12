import styled from "styled-components";
import { COLORS } from "../../../../constants/colors";

export const StyledCarSection = styled.section`
  width: 445px;
  height: 498px;
  border-radius: 15px 15px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 26px;
`;

export const StyledCarImageContainer = styled.div`
  width: 443px;
  position: relative;
  height: 310px;
  padding: 2px;
  border: 1px solid ${COLORS.GRAY2};
  border-radius: 15px 15px 0px 0px;
`;

export const StyledImage = styled.img<{ $isDisabled: boolean }>`
  opacity: ${(props) => props.$isDisabled && "0.1"};
  object-fit: cover;
  width: 100%;
`;

export const StyledImageBanner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 237px;
  height: 59px;
  background: ${COLORS.GRAY4BLACK};
  padding: 15px 33px 16px 34px;
  border-radius: 12px;
  z-index: 10;
  color: ${COLORS.GRAY0WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const StyledModelBrand = styled.h3`
  width: 420px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledPriceYear = styled.div`
  display: flex;
  width: 100%;
  gap: 14px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
