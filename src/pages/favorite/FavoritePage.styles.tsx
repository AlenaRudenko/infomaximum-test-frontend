import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const StyledContainer = styled.div`
  max-width: 1838px;
  width: 100%;
  margin: 0 auto;
  margin-top: 46px;
  height: 100%;
  max-height: 85vh;
`;

export const StyledCarsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 26px;
  padding-top: 50px;
  border-top: 1px solid ${COLORS.GRAY2};
  flex-direction: column;
  display: flex;
  gap: 36px;
`;
