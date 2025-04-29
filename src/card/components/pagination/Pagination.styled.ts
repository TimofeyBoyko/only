import styled from "styled-components";

import { blackBlue, blue } from "../../../styles/colors";
import { cardStyles } from "../../../styles/card";

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  gap: 40px;

  .pagination {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: ${cardStyles.desktop.width}px) {
    .pagination {
      gap: 10px;
    }
  }
`;

export const PageCounter = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${blackBlue};

  user-select: none;

  @media (max-width: ${cardStyles.desktop.width}px) {
    font-weight: 400;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${cardStyles.desktop.width}px) {
    gap: 8px;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: ${cardStyles.desktop.width}px) {
    gap: 8px;
    margin-top: 15px;
  }
`;

export const Dot = styled.button<{ active: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${blackBlue};
  transition: background-color 0.3s ease;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  opacity: ${(props) => (props.active ? 1 : 0.4)};

  &:hover {
    opacity: 1;
    background-color: ${blackBlue};
  }
`;
