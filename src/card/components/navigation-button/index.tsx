import { NavigationButtonProps } from "./NavigationButton.types";
import { StyledNavigationButton } from "./NavigationButton.styled";

const NavigationButton = ({
  direction,
  onClick,
  disabled = false,
  ariaLabel,
  isSwiper = false,
}: NavigationButtonProps) => {
  return (
    <StyledNavigationButton
      direction={direction}
      onClick={onClick}
      disabled={disabled}
      isSwiper={isSwiper}
      aria-label={ariaLabel || `${direction === "prev" ? "Previous" : "Next"}`}
    >
      <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    </StyledNavigationButton>
  );
};

export default NavigationButton;
