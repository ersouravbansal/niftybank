import React from "react";
import TableData from "./TableData";
import ContractList from "./ContractList";
import ExpiryDateFilter from "./ExpiryDateFilter";

const OptionChainTable = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/4 p-4">
          <ContractList />
        </div>
        <div className="w-3/4 p-4 justify-start">
          <ExpiryDateFilter />
        </div>
      </div>
      <TableData />
    </>
  );
};

export default OptionChainTable;
