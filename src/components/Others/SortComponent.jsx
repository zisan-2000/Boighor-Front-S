import React from "react";

const SortComponent = ({ productCount }) => {
  return (
    <div className="bgThemeColor flex  items-center justify-between p-4 shadow-md">
      <div className="text-lg font-semibold">মোট {productCount} টি পণ্য</div>
    </div>
  );
};

export default SortComponent;
