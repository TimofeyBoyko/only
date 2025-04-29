import styled from "styled-components";

import { headerSeparator, blackBlue } from "../../../styles/colors";
import { cardStyles } from "../../../styles/card";

const StyledHeader = styled.div`
  margin-left: -1px;

  max-width: ${cardStyles.desktop.header.width}px;

  @media (max-width: ${cardStyles.desktop.width}px) {
    max-width: ${cardStyles.mobile.header.width}px;
  }
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSeparator = styled.div`
  width: 5px;

  height: 120px;

  background: ${headerSeparator};

  margin-right: ${cardStyles.desktop.marginLeft}px;
`;

const StyledTitle = styled.h1`
  color: ${blackBlue};

  font-size: 56px;
  font-weight: 700;
  line-height: 120%;

  margin: 0;

  user-select: none;

  @media (max-width: ${cardStyles.desktop.width}px) {
    font-size: 20px;
  }
`;

export { StyledHeader, StyledTitleWrapper, StyledSeparator, StyledTitle };
