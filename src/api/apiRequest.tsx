export const fetchContractsData = async () => {
  const response = await fetch("https://prices.algotest.xyz/contracts");
  const data = await response.json();
  return data;
};
export const fetchOptionChainData = async (selectedContractItem: string) => {
  const response = await fetch(
    `https://prices.algotest.xyz/option-chain-with-ltp?underlying=${selectedContractItem}`
  );
  const data = await response.json();
  return data;
};
