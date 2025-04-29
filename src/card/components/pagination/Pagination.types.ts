import React from "react";

import { TDataItem } from "../../../data";

export type TPaginationProps = {
  selectedItemId: number;

  items: TDataItem[];

  setSelectedDotId: React.Dispatch<React.SetStateAction<number>>;
};
