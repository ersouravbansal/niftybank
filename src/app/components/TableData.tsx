import React, { useMemo } from "react";
import useStore from "../utils/store";
import { TableDataProps } from "../types/types";

const TableData: React.FC<TableDataProps> = ({
  callClose,
  strike,
  putClose,
  contracts,
}) => {
  const selectedExpiry = useStore((state) => state.selectedExpiry);
  const selectedContractItem = useStore((state) => state.selectedContractItem);
  const contractOPT = (contracts && contracts[selectedContractItem]) || {};

  const { myCEId, myPEId } = useMemo(() => {
    const expiryOPT = contractOPT.OPT || {};
    const strikeOPT = expiryOPT[selectedExpiry] || [];

    console.log("strike opt is", contractOPT);

    const myStrikeCE = strikeOPT.find(
      (item) => item.option_type === "CE" && item.strike === strike
    );

    const myStrikePE = strikeOPT.find(
      (item) => item.option_type === "PE" && item.strike === strike
    );
    return {
      strikeOPT,
      myCEId: myStrikeCE?.token,
      myPEId: myStrikePE?.token,
    };
  }, [contractOPT, selectedExpiry, strike]);

  return (
    <>
      <tr className="border-b border-gray-300 hover:bg-gray-100">
        <td id={myCEId} className="py-3 px-6">
          {callClose !== null ? callClose : "-"}
        </td>
        <td className="py-3 px-6 font-bold">
          {strike !== null ? strike : "-"}
        </td>
        <td id={myPEId} className="py-3 px-6">
          {putClose !== null ? putClose : "-"}
        </td>
      </tr>
    </>
  );
};

export default TableData;
