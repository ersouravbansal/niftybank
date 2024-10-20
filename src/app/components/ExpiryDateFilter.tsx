"use client";
import React, { useState } from "react";

const ExpiryDateFilter = () => {
  const [selectedExpiryDate, setSelectedExpiryDate] = useState<number | null>(
    null
  );

  // Expiry dates can be represented as strings for simplicity
  const expiryDates = [
    "1 Month",
    "3 Months",
    "7 Years",
    "3 Months",
    "7 Years",
    "3 Months",
    "7 Years",
    "3 Months",
    "7 Years",
  ];

  const handleButtonClick = (index: number) => {
    setSelectedExpiryDate(index);
  };
  return (
    <>
      <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-thin scrollbar-thumb-green-400 scrollbar-thumb-rounded-full scrollbar-w-1">
      {expiryDates.map((expiryDate, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(index)}
          className={`py-2 px-4 whitespace-nowrap rounded-lg font-medium transition-colors duration-300
            ${
              selectedExpiryDate === index
                ? "bg-green-500 text-white" // Selected expiry date button styles
                : "bg-gray-200 text-gray-700 hover:bg-green-200"
            }
          `}
        >
          {expiryDate}
        </button>
      ))}
    </div>
    </>
  );
};

export default ExpiryDateFilter;
