import styled, { keyframes } from "styled-components";
import { blackBlue, blue } from "../../../styles/colors";
import { cardStyles } from "../../../styles/card";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const EventsContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 0.4s ease-out;

  @media (max-width: ${cardStyles.desktop.width}px) {
    .swiper-slide-next,
    .swiper-slide-prev {
      opacity: 0.4;
    }

    /* Add horizontal divider above content */
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: #c7cdd9;
      width: calc(100% - 20px);
    }

    .swiper {
      margin-top: 20px;
    }
  }
`;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  user-select: none;
  width: 100%;
  max-width: 100%;
  padding: 20px 30px 40px;
  box-sizing: border-box;
  min-height: 200px;
  text-align: left;

  @media (max-width: ${cardStyles.desktop.width}px) {
    padding: 0;
    min-height: fit-content;
  }
`;

export const EventTitle = styled.h2`
  font-size: 40px;
  font-weight: 400;
  line-height: 120%;

  margin-bottom: 20px;
  padding: 0;

  color: ${blue};

  text-transform: none;
  text-align: left;
  display: block;
  width: 100%;

  @media (max-width: ${cardStyles.desktop.width}px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const EventDescription = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0%;
  color: ${blackBlue};
  text-align: left;

  @media (max-width: ${cardStyles.desktop.width}px) {
    font-size: 14px;
    line-height: 145%;
  }
`;
