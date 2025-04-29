import { useState, useMemo, useEffect, useRef } from "react";

import { cardStyles } from "../../../styles/card";
import { useDeviceContext } from "../../../context/deviceContext";

import {
  CircleWrapper,
  DotsContainer,
  Dot,
  DotText,
  CategoryLabel,
  YearsContainer,
  YearDisplay,
} from "./SelectInterval.styled";
import { TSelectIntervalProps, DotData } from "./SelectInterval.types";

const SelectInterval = ({
  selectedItemId,
  items,
  setSelectedDotId,
  isRotation,
  setIsRotation,
}: TSelectIntervalProps) => {
  const [rotation, setRotation] = useState(0);
  const [hoveredDotId, setHoveredDotId] = useState<number>(-1);

  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const { isMobile } = useDeviceContext();

  const selectedItem = items.find((item) => item.id === selectedItemId)!;

  const actualDotCount = Math.max(2, Math.min(6, items.length));

  const dots = useMemo(() => {
    const dotArray: DotData[] = [];

    const radius = cardStyles.desktop.selectInterval.size / 2;

    const step = 360 / actualDotCount;

    for (let i = 0; i < actualDotCount; i++) {
      // Convert step to degrees, starting from top (270 degrees) and moving clockwise
      const angle = i * step + 27;

      // Convert degrees to radians for trigonometric functions
      // Subtract 90 degrees to start from the top position (270 degrees in standard position)
      const angleInRadians = (angle - 90) * (Math.PI / 180);

      // Calculate position using trigonometry
      const topProp = `calc(50% + ${Math.sin(angleInRadians) * radius}px)`;
      const leftProp = `calc(50% + ${Math.cos(angleInRadians) * radius}px)`;

      dotArray.push({
        position: { topProp, leftProp },
        selected: items[i].id === selectedItemId,
        ...items[i],
      });
    }

    return dotArray;
  }, [actualDotCount, selectedItemId]);

  const calculateRotation = (dotId: number) => {
    if (dotId === null) return 0;

    // For counter-clockwise rotation, we need to determine how many degrees to rotate.
    // Since the initial dot (index 0) is already at the top position,
    // we need to rotate based on how far from the top position the selected dot is.

    // First determine what the top position is (dot index 0)
    // Then calculate how many steps counter-clockwise we need to rotate to get there

    // If it is first item, no rotation needed
    if (dotId === 1) return 0;

    // Calculate rotation in counter-clockwise direction
    // The formula calculates how many positions we need to move counter-clockwise
    // to bring the selected dot to the top
    const degreesPerPosition = 360 / actualDotCount;
    const counterClockwiseRotation = -(dotId - 1) * degreesPerPosition;

    return counterClockwiseRotation;
  };

  const handleDotClick = (dotId: number) => {
    if (dotId === selectedItemId) return;
    if (isRotation) return;

    setSelectedDotId(dotId);
  };

  useEffect(() => {
    if (isMobile) return;
    setIsRotation(true);

    setRotation(calculateRotation(selectedItemId));

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsRotation(false);
    }, cardStyles.desktop.selectInterval.transitionDuration * 1000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [selectedItemId, isMobile]);

  return (
    <>
      {isMobile ? null : (
        <>
          <CircleWrapper rotation={rotation} />
          <DotsContainer rotation={rotation}>
            {dots.map((dot) => {
              const isSelected = dot.selected || dot.id === hoveredDotId;
              return (
                <Dot
                  key={dot.id}
                  topProp={dot.position.topProp}
                  leftProp={dot.position.leftProp}
                  isSelected={isSelected}
                  onClick={() => handleDotClick(dot.id)}
                  onMouseEnter={() => setHoveredDotId(dot.id)}
                  onMouseLeave={() => setHoveredDotId(-1)}
                >
                  {isSelected ? (
                    <>
                      <DotText rotation={rotation}>{dot.id}</DotText>
                    </>
                  ) : null}
                </Dot>
              );
            })}
          </DotsContainer>
          {!isRotation ? <CategoryLabel>{selectedItem?.category}</CategoryLabel> : null}
        </>
      )}
      <YearsContainer>
        <YearDisplay isLeft>{selectedItem?.startYear}</YearDisplay>
        <YearDisplay>{selectedItem?.endYear}</YearDisplay>
      </YearsContainer>
    </>
  );
};

export default SelectInterval;
