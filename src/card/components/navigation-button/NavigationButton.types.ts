export type NavigationButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  isSwiper?: boolean;
};
