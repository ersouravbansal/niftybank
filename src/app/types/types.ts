// types.ts

export type ContractData = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
} | null;
export type ContractKeys = string[];
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
export interface WebSocketLTP {
  token: string;
  timestamp: string;
  ltp: number;
  bb_qty: number;
  bb_price: number;
  ba_qty: number;
  ba_price: number;
  vol_in_day: number;
}
export interface TableDataProps {
  callClose: number | null;
  strike: number | null;
  putClose: number | null;
  contracts: ContractData;
}
