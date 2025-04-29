import styled, { css } from "styled-components";

import { blackBlue, separatorColor } from "../styles/colors";
import { cardStyles } from "../styles/card";

const StyledCard = styled.div`
  width: 100%;
  max-width: ${cardStyles.desktop.width}px;

  height: fit-content;

  border: 1px solid ${separatorColor};

  box-sizing: border-box;

  position: relative;

  display: grid;
  grid-template-columns: ${cardStyles.desktop.header.width}px 1fr;
  grid-template-rows: ${cardStyles.desktop.header.height}px ${cardStyles.desktop.pagination
      .height}px auto;
  gap: 0 ${cardStyles.desktop.gap}px;

  padding-top: ${cardStyles.desktop.paddingTop}px;
  padding-bottom: ${cardStyles.desktop.paddingBottom}px;

  @media (max-width: ${cardStyles.desktop.width}px) {
    width: auto;
    height: fit-content;

    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;

    gap: 56px;

    padding-left: 20px;
    padding-top: 59px;
    padding-bottom: 14px;

    border: none;
  }
`;

const SelectIntervalWrapper = styled.div`
  width: ${cardStyles.desktop.selectInterval.size}px;
  height: ${cardStyles.desktop.selectInterval.size}px;

  padding: ${cardStyles.desktop.selectInterval.marginTop}px 0
    ${cardStyles.desktop.selectInterval.marginBottom}px 0;

  grid-column: 2;
  grid-row: 1 / 3;

  @media (max-width: ${cardStyles.desktop.width}px) {
    width: fit-content;
    height: fit-content;

    grid-column: 1;
    grid-row: 2;

    padding: 0;
  }

  position: relative;
`;

const PaginationWrapper = styled.div`
  grid-column: 1;
  grid-row: 2;

  height: ${cardStyles.desktop.pagination.height}px;

  box-sizing: border-box;

  display: flex;
  align-items: flex-end;

  margin-left: ${cardStyles.desktop.marginLeft}px;

  @media (max-width: ${cardStyles.desktop.width}px) {
    height: fit-content;

    grid-column: 1;
    grid-row: 4;

    margin-left: 0px;
  }
`;

const EventsList = styled.div<{ isRotation: boolean }>`
  grid-column: 1 / 3;
  grid-row: 3;

  margin: 0 ${cardStyles.desktop.marginLeft}px;
  margin-top: 56px;
  opacity: ${(props) => (props.isRotation ? 0 : 1)};
  visibility: ${(props) => (props.isRotation ? "hidden" : "visible")};
  transition: ${(props) => (props.isRotation ? "none" : "opacity 0.4s ease-out")};

  @media (max-width: ${cardStyles.desktop.width}px) {
    grid-column: 1;
    grid-row: 3;

    margin: 0;

    width: 100%;
    max-width: 100%;

    overflow: hidden;
  }
`;

const lineStyles = css`
  position: absolute;

  background-color: ${blackBlue};

  opacity: 0.1;
  z-index: 1;
`;

const VerticalLine = styled.div`
  top: 0;
  left: 50%;

  transform: translate(-50%, -${cardStyles.desktop.paddingTop}px);

  width: 1px;
  height: calc(100% + ${cardStyles.desktop.paddingTop}px);

  ${lineStyles}
`;

const HorizontalLine = styled.div`
  top: 50%;
  left: 0;

  transform: translate(-${cardStyles.desktop.header.width + cardStyles.desktop.gap}px, -50%);

  width: ${cardStyles.desktop.width}px;
  height: 1px;

  ${lineStyles}
`;

export {
  StyledCard,
  SelectIntervalWrapper,
  PaginationWrapper,
  EventsList,
  VerticalLine,
  HorizontalLine,
};
