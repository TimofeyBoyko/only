import styled, { css } from "styled-components";
import { blackBlue, blue, navigationButtonBorder } from "../../../styles/colors";
import { cardStyles } from "../../../styles/card";

const swiperStyles = css`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;

  border: none;
  background-color: white;
  box-shadow: 0px 0px 15px 0px #3877ee1a;
`;

export const StyledNavigationButton = styled.button<{
  direction: "prev" | "next";
  isSwiper?: boolean;
}>`
  width: 50px;
  height: 50px;

  min-width: 50px;
  min-height: 50px;

  border-radius: 50%;
  border: 1px solid ${navigationButtonBorder};
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.3s ease;

  ${(props) => props.isSwiper && swiperStyles}

  &:hover {
    border-color: ${blue};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      border-color: ${navigationButtonBorder};
    }
  }

  svg {
    width: 6px;
    height: 12px;
    fill: ${blackBlue};
    transform: ${(props) => (props.direction === "prev" ? "rotate(180deg)" : "none")};
  }

  @media (max-width: ${cardStyles.desktop.width}px) {
    width: 25px;
    height: 25px;

    min-width: 25px;
    min-height: 25px;

    svg {
      width: 3px;
      height: 6px;
    }
  }
`;
