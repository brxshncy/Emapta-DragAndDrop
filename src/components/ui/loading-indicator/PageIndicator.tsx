import React from "react";
import { LoadingSpinner } from "../svg/LoadingSpinner";

export const PageIndicator = () => {
  return (
    <div className="flex min-h-inherit items-center justify-center">
      <LoadingSpinner />
      Loading Data...
    </div>
  );
};
