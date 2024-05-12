import styled from "styled-components";

export const ScrollContainer = styled.div`
  width: 100%;
  max-height: 100vh;
  overflow: auto;
`;

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 36px;
  max-width: 1920px;
  width: 100%;
`;

export const StyledSearchSortBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const StyledCars = styled.div`
  display: grid;
  margin-top: 42px;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 73px;
  margin-bottom: 150px;
  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledBanner = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`;
