import React from "react";
import { HashLoader } from "react-spinners";

const SpinnerLoading = () => {
  return (
    <div className="flex justify-center items-center mt-[100px]">
      <HashLoader></HashLoader>
    </div>
  );
};

export default SpinnerLoading;
