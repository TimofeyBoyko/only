import { useDeviceContext } from "../../../context/deviceContext";

import { TPaginationProps } from "./Pagination.types";
import {
  PaginationContainer,
  PageCounter,
  ButtonContainer,
  DotsContainer,
  Dot,
} from "./Pagination.styled";
import NavigationButton from "../navigation-button";

const Pagination = ({ selectedItemId, items, setSelectedDotId }: TPaginationProps) => {
  const { isMobile } = useDeviceContext();

  const handlePrevClick = () => {
    if (selectedItemId > 1) {
      setSelectedDotId(selectedItemId - 1);
    }
  };

  const handleNextClick = () => {
    if (selectedItemId < items.length) {
      setSelectedDotId(selectedItemId + 1);
    }
  };

  // Format the page display as "01/06" with leading zeros
  const formatPageNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  // Generate the dots based on the number of items
  const renderDots = () => {
    return items.map((item) => (
      <Dot
        key={item.id}
        active={selectedItemId === item.id}
        onClick={() => setSelectedDotId(item.id)}
      />
    ));
  };

  return (
    <PaginationContainer>
      <div className="pagination">
        <PageCounter>
          {formatPageNumber(selectedItemId)}/{formatPageNumber(items.length)}
        </PageCounter>
        <ButtonContainer>
          <NavigationButton
            direction="prev"
            onClick={handlePrevClick}
            disabled={selectedItemId <= 1}
            ariaLabel="Previous page"
          />
          <NavigationButton
            direction="next"
            onClick={handleNextClick}
            disabled={selectedItemId >= items.length}
            ariaLabel="Next page"
          />
        </ButtonContainer>
      </div>
      {isMobile ? <DotsContainer>{renderDots()}</DotsContainer> : null}
    </PaginationContainer>
  );
};

export default Pagination;
