// types.ts

export type ContractData = object | null;
export type ContractKeys = string[];
// export type OptionChainData = object | null;
export interface OptionChainData {
  options: {
    [expiry: string]: {
      strike: number[];
      call_close: number[];
      put_close: number[];
    };
  };
}

export interface StoreState {
  contractData: ContractData;
  contractKeys: ContractKeys;
  optionChainData: OptionChainData | null;
  selectedContractItem: string;
  selectedExpiry: string;
  setContractData: (newValue: ContractData) => void;
  setContractKeys: (newValue: ContractKeys) => void;
  setOptionChainData: (newValue: OptionChainData) => void;
  setSelectedContractItem: (newValue: string) => void;
  setSelectedExpiry: (newValue: string) => void;
}
export interface ExpiryFilterProps {
  expiries: string[];
  selectedExpiry: string | null;
  onChange: (expiry: string) => void;
}
export interface ContractOption {
  option_type: "CE" | "PE";
  strike: number;
  token: string;
}

// export interface Contracts {
//   [contractName: string]: {
//     OPT?: {
//       [expiry: string]: ContractOption[];
//     };
//   };
// }

export interface TableDataProps {
  callClose: number | null;
  strike: number | null;
  putClose: number | null;
  contracts: ContractData;
}
