import React from "react";

import { TDataItem } from "../../../data";

export type TSelectIntervalProps = {
  items: TDataItem[];

  selectedItemId: number;
  setSelectedDotId: React.Dispatch<React.SetStateAction<number>>;

  isRotation: boolean;
  setIsRotation: React.Dispatch<React.SetStateAction<boolean>>;
};

export type DotData = {
  position: {
    topProp: string;
    leftProp: string;
  };
  selected?: boolean;
} & TDataItem;
