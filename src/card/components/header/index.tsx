import { HeaderProps } from "./Header.types";
import { StyledHeader, StyledTitleWrapper, StyledSeparator, StyledTitle } from "./Header.styled";
import { useDeviceContext } from "../../../context/deviceContext";

const Header = ({ label }: HeaderProps) => {
  const { isMobile } = useDeviceContext();

  return (
    <StyledHeader>
      <StyledTitleWrapper>
        {!isMobile ? <StyledSeparator /> : null}
        <StyledTitle>{label}</StyledTitle>
      </StyledTitleWrapper>
    </StyledHeader>
  );
};

export default Header;
