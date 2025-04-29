import styled, { css, keyframes } from "styled-components";

import { blackBlue, blue, pink, backgroundColor, dotBorderColor } from "../../../styles/colors";
import { cardStyles } from "../../../styles/card";

const generalStyles = css`
  width: ${cardStyles.desktop.selectInterval.size}px;
  height: ${cardStyles.desktop.selectInterval.size}px;
`;

const transormStyles = css<{ rotation: number }>`
  transform: rotate(${(props) => props.rotation}deg);
  transition: transform ${cardStyles.desktop.selectInterval.transitionDuration}s ease;
`;

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleWrapper = styled.div<{ rotation: number }>`
  position: absolute;

  border: 1px solid ${blackBlue};
  border-radius: 50%;
  opacity: 0.1;
  pointer-events: none;

  ${generalStyles}

  ${transormStyles}
`;

const DotsContainer = styled.div<{ rotation: number }>`
  z-index: 2;

  ${generalStyles}

  ${transormStyles}
`;

const DotText = styled.span<{ rotation: number }>`
  transform: rotate(${(props) => -props.rotation}deg);

  ${flexCenter}

  width: 100%;
  height: 100%;
`;

const Dot = styled.div<{ topProp: string; leftProp: string; isSelected?: boolean }>`
  position: absolute;

  top: ${(props) => props.topProp};
  left: ${(props) => props.leftProp};
  transform: translate(-50%, -50%);

  width: ${(props) => (props.isSelected ? "56px" : "6px")};
  height: ${(props) => (props.isSelected ? "56px" : "6px")};

  border: ${(props) => (props.isSelected ? `1px solid ${dotBorderColor}` : "none")};
  border-radius: 50%;

  background-color: ${(props) => (props.isSelected ? backgroundColor : blackBlue)};

  z-index: ${(props) => (props.isSelected ? 5 : 2)};

  ${flexCenter}

  font-weight: normal;
  font-size: ${(props) => (props.isSelected ? "20px" : "0")};
  color: ${blackBlue};

  transition: all 0.3s ease;

  cursor: pointer;

  user-select: none;

  &:hover {
    width: 56px;
    height: 56px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const CategoryLabel = styled.div`
  position: absolute;

  left: 83%;
  top: 60px;

  font-size: 20px;
  line-height: 30px;
  font-weight: 700;

  color: ${blackBlue};

  animation: ${fadeIn} 0.4s ease-out;

  user-select: none;
`;

const YearsContainer = styled.div`
  position: absolute;

  width: 100%;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${flexCenter};

  gap: 66px;

  pointer-events: none;

  @media (max-width: ${cardStyles.desktop.width}px) {
    position: relative;
    top: unset;
    left: unset;

    transform: unset;

    gap: 20px;
  }
`;

const YearDisplay = styled.div<{ isLeft?: boolean }>`
  font-size: 200px;
  font-weight: 700;
  line-height: 160px;
  letter-spacing: -2%;

  color: ${(props) => (props.isLeft ? blue : pink)};

  pointer-events: none;
  user-select: none;

  @media (max-width: ${cardStyles.desktop.width}px) {
    font-size: 56px;
    line-height: 100%;
  }
`;

export { CircleWrapper, DotsContainer, DotText, Dot, CategoryLabel, YearsContainer, YearDisplay };
