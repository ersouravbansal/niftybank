"use client";
import React, { useState } from "react";
import useStore from "../utils/store";
import { ContractKeys } from "../types/types";

const ContractList = ({ items }: { items: ContractKeys }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedContractItem = useStore((state) => state.selectedContractItem);

  const setSelectedContractItem = useStore(
    (state) => state.setSelectedContractItem
  );
  const handleSelectChange = (value: string) => {
    setSelectedContractItem(value);
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      {/* Dropdown container */}
      <div className="relative" onClick={() => setIsOpen(!isOpen)}>
        {/* Selected value box */}
        <div
          className={`w-full bg-green-300 text-center text-gray-700 py-3 rounded-lg cursor-pointer ${
            isOpen ? "border border-green-500" : ""
          }`}
        >
          <span>{selectedContractItem || "Select a Contract"}</span>
          {/* Down arrow icon */}
          <span className="">{isOpen ? "▲" : "▼"}</span>
        </div>

        {/* Dropdown list */}
        {isOpen && (
          <ul className="absolute max-w-xs bg-white shadow-lg rounded-lg mt-1 z-10 md:w-full sm:w-[40vw]">
            {items?.map((item, index) => (
              <li
                key={index}
                className="py-2 px-4 hover:bg-green-100 cursor-pointer text-center"
                onClick={() => handleSelectChange(item)} // Corrected the event handler
              >
                <span className="block w-full whitespace-normal">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ContractList;
