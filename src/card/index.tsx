import { useEffect, useState } from "react";

import { useDeviceContext } from "../context/deviceContext";

import Header from "./components/header";
import SelectInterval from "./components/select-interval";
import Pagination from "./components/pagination";
import Events from "./components/events";

import {
  StyledCard,
  SelectIntervalWrapper,
  PaginationWrapper,
  EventsList,
  VerticalLine,
  HorizontalLine,
} from "./Card.styled";
import { CardProps } from "./Card.types";

const Card = ({ data }: CardProps) => {
  const { items, label } = data;

  const [selectedDotId, setSelectedDotId] = useState(items[0].id);
  const [isRotation, setIsRotation] = useState(false);

  const { isMobile } = useDeviceContext();

  useEffect(() => {
    if (isMobile) setIsRotation(false);
  }, [isMobile]);

  return (
    <StyledCard>
      <Header label={label} />

      <SelectIntervalWrapper>
        {isMobile ? null : <HorizontalLine />}
        <SelectInterval
          selectedItemId={selectedDotId}
          items={items}
          isRotation={isRotation}
          setSelectedDotId={setSelectedDotId}
          setIsRotation={setIsRotation}
        />
      </SelectIntervalWrapper>
      <PaginationWrapper>
        <Pagination
          selectedItemId={selectedDotId}
          items={items}
          setSelectedDotId={setSelectedDotId}
        />
      </PaginationWrapper>
      <EventsList isRotation={isRotation}>
        <Events items={items.find((item) => item.id === selectedDotId)!.events} />
      </EventsList>

      {isMobile ? null : <VerticalLine />}
    </StyledCard>
  );
};

export default Card;
