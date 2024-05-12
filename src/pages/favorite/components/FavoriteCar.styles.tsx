import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const StyledCarContainer = styled.section`
  height: 334px;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 24px;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${COLORS.GRAY2};
  }
  &:last-of-type:after {
    background-color: white;
    left: 0;
  }
`;

export const StyledCarImage = styled.div`
  width: 443px;
  height: 308px;
  padding: 2px;
  border: 1px solid ${COLORS.GRAY2};
  border-radius: 12px;
`;

export const StyledCarPic = styled.img`
  object-fit: cover;
  width: 99%;
`;

export const StyledCarDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledDescription = styled.div`
  max-width: 834px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  p {
    color: ${COLORS.GRAY3};
  }
`;

export const StyledText = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.3em;
  height: 3.7em;
`;

export const StyledPriceButtonCOntainer = styled.div`
  max-width: 834px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
`;
