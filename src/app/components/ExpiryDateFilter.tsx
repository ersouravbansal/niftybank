"use client";
import React from "react";
import { ExpiryFilterProps } from "../types/types";

const ExpiryDateFilter: React.FC<ExpiryFilterProps> = ({
  expiries,
  selectedExpiry,
  onChange,
}) => {
  return (
    <>
      <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-thin scrollbar-thumb-green-400 scrollbar-thumb-rounded-full scrollbar-w-1">
        {expiries.map((expiry) => (
          <button
            key={expiry}
            onClick={() => onChange(expiry)}
            className={`py-2 px-4 whitespace-nowrap rounded-lg font-medium transition-colors duration-300
            ${
              selectedExpiry === expiry
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-green-200"
            }
          `}
          >
            {expiry}
          </button>
        ))}
      </div>
    </>
  );
};

export default ExpiryDateFilter;
