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
  
  const selectedExpiry = useStore((state) => state.selectedExpiry);
  const setSelectedExpiry = useStore((state) => state.setSelectedExpiry);

  const handleExpiryChange = (expiry: string) => {
    setSelectedExpiry(expiry);
  };

  // Fetch contract data on component mount
  useEffect(() => {
    const fetchContractsData = async () => {
      try {
        const response = await fetch("https://prices.algotest.xyz/contracts");
        const data = await response.json();
        const keys = Object.keys(data);
        setContractData(data);
        setContractKeys(keys);
        console.log("Contract keys:", keys, "| Contract data:", data);
      } catch (error) {
        console.error("Error occurred while fetching contracts data:", error);
        setError(error as Error);
      }
    };

    fetchContractsData();
  }, [setContractData, setContractKeys]);

  // Fetch option chain data when selected contract item changes
  useEffect(() => {
    if (selectedContractItem) {
      const fetchOptionChainData = async () => {
        try {
          const response = await fetch(
            `https://prices.algotest.xyz/option-chain-with-ltp?underlying=${selectedContractItem}`
          );
          const data = await response.json();
          setOptionChainData(data);
          setSelectedExpiry(Object.keys(data.options)[0]);
        } catch (error) {
          console.error("Error occurred while fetching option chain data:", error);
          setError(error as Error);
        }
      };

      fetchOptionChainData();
    }
  }, [selectedContractItem, setOptionChainData, setSelectedExpiry]);

  // Set loading state based on data availability
  useEffect(() => {
    if (contractKeys?.length > 0 && optionChainData && contractData) {
      setLoading(false);
    }
  }, [contractData, contractKeys, optionChainData]);

  // Set up WebSocket connection to listen for live updates
  useEffect(() => {
    if (selectedExpiry) {
      const socket = new WebSocket("wss://prices.algotest.xyz/mock/updates");
      console.log("WebSocket connection initiated...");

      socket.addEventListener("open", () => {
        const subscribeMessage = {
          msg: {
            type: "subscribe",
            datatypes: ["ltp"],
            underlyings: [
              {
                underlying: selectedContractItem,
                cash: true,
                options: [selectedExpiry],
              },
            ],
          },
        };
        socket.send(JSON.stringify(subscribeMessage));
      });

      socket.addEventListener("message", (event) => {
        const response = JSON.parse(event.data);
        console.log("websocket response:",response)
        response?.ltp?.forEach((item) => {
          const element = document.getElementById(item.token);
          if (element) {
            element.innerText = item.ltp.toFixed(2);
          }
        });
      });

      return () => {
        console.log("Closing WebSocket connection");
        socket.close();
      };
    }
  }, [selectedExpiry, selectedContractItem]);

  // Prepare option data for rendering
  const expiryDates = optionChainData?.options ? Object.keys(optionChainData.options) : [];

  const optionData = expiryDates.reduce((acc, expiry) => {
    const { strike = [], call_close = [], put_close = [] } = optionChainData?.options?.[expiry] || [];
    acc[expiry] = {
      strikePrices: strike,
      callClosePrices: call_close,
      putClosePrices: put_close,
    };
    return acc;
  }, {} as Record<string, { strikePrices: number[]; callClosePrices: number[]; putClosePrices: number[] }>);

  // Destructure the data for easier access
  const { strikePrices, callClosePrices, putClosePrices } = optionData[selectedExpiry] || [];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex">
            <div className="w-1/4 p-4">
              <ContractList items={contractKeys} />
            </div>
            <div className="w-3/4 p-4 justify-start">
              <ExpiryDateFilter
                expiries={expiryDates}
                selectedExpiry={selectedExpiry}
                onChange={handleExpiryChange}
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Call Price</th>
                  <th className="py-3 px-6 text-left">Strike</th>
                  <th className="py-3 px-6 text-left">PUT Price</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {selectedExpiry && strikePrices?.map((strike, index) => (
                  <TableData
                    key={index}
                    callClose={callClosePrices?.[index]}
                    strike={strike}
                    putClose={putClosePrices?.[index]}
                    contracts={contractData}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default OptionChainTable;
