import React from "react";
import { LoadingSpinner } from "../svg/LoadingSpinner";

export const AppLoadingIndicator = () => {
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
        // onClick={toggleModal}
      >
        <LoadingSpinner />
        <span className="text-white">Loading Data...</span>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
};
