"use client";
import React, { useEffect, useState } from "react";
import TableData from "./TableData";
import ContractList from "./ContractList";
import ExpiryDateFilter from "./ExpiryDateFilter";
import useStore from "../utils/store";
import Spinner from "./Spinner";

const OptionChainTable = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const contractData = useStore((state) => state.contractData);
  const setContractData = useStore((state) => state.setContractData);

  const contractKeys = useStore((state) => state.contractKeys);
  const setContractKeys = useStore((state) => state.setContractKeys);

  const optionChainData = useStore((state) => state.optionChainData);
  const setOptionChainData = useStore((state) => state.setOptionChainData);

  const selectedContractItem = useStore((state) => state.selectedContractItem);
  const setSelectedContractItem = useStore(
    (state) => state.setSelectedContractItem
  );

  const selectedExpiry = useStore((state) => state.selectedExpiry);
  const setSelectedExpiry = useStore((state) => state.setSelectedExpiry);

  const handleExpiryChange = (expiry) => {
    setSelectedExpiry(expiry);
  };

  useEffect(() => {
    const fetchContractsData = async () => {
      try {
        const response = await fetch("https://prices.algotest.xyz/contracts");
        const data = await response.json();
        const keys = Object.keys(data);
        setContractData(data);
        setContractKeys(keys);
        console.log("contract keys->", keys, "|", "contract data:", data);
      } catch (error) {
        console.log("Error occured at fetchContractsData():", error);
        setError(error as Error);
      }
    };
    fetchContractsData();
  }, []);
  useEffect(() => {
    const fetchOptionChainData = async () => {
      try {
        const response = await fetch(
          `https://prices.algotest.xyz/option-chain-with-ltp?underlying=${selectedContractItem}`
        );
        const data = await response.json();
        setOptionChainData(data);
        setSelectedExpiry(Object.keys(data.options)[0]);
      } catch (error) {
        console.log("Error occured at fetchOptionChainData()", error);
        setError(error as Error);
      }
    };
    fetchOptionChainData();
  }, [selectedContractItem]);

  useEffect(() => {
    if (contractKeys && optionChainData && contractData) {
      setLoading(false);
    }
  }, [contractData, contractKeys, optionChainData]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default OptionChainTable;
