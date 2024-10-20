"use client"
import React, { useState } from "react";

const ContractList = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['NIFTYBANK', 'SENSEX', 'NIFTY50'];

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <>
      <div className="w-full max-w-xs mx-auto">
        {/* Dropdown container */}
        <div className="relative" onClick={() => setIsOpen(!isOpen)}>
          {/* Selected value box */}
          <div
            className={`w-full bg-green-300 text-center text-gray-700 py-3 rounded-lg cursor-pointer ${
              isOpen ? 'border border-green-500' : ''
            }`}
          >
            {selectedValue ? selectedValue : 'Select an option'}
          </div>

          {/* Dropdown list */}
          {isOpen && (
            <ul className="absolute w-full max-w-xs bg-white shadow-lg rounded-lg mt-1 z-10">
              {options.map((option) => (
                <li
                  key={option}
                  className="py-2 px-4 hover:bg-green-100 cursor-pointer text-center"
                  onClick={() => handleSelect(option)}
                >
                  <span className="block w-full whitespace-normal">{option}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default ContractList;