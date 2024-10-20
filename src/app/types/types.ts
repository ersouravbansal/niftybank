// types.ts

export interface Contract {
    token: string;
    option_type: "CE" | "PE";
    strike: number;
    // Add more fields as necessary based on your data structure
  }
  
  export interface OptionChainData {
    options: Record<string, {
      strike: number[];
      call_close: number[];
      put_close: number[];
    }>;
  }
  
  export interface StoreState {
    contractData: Record<string, any> | null;
    contractKeys: string[] | null;
    optionChainData: OptionChainData | null;
    selectedContractItem: string;
    selectedExpiry: string | null;
    setContractData: (newValue: Record<string, any>) => void;
    setContractKeys: (newValue: string[]) => void;
    setOptionChainData: (newValue: OptionChainData) => void;
    setSelectedContractItem: (newValue: string) => void;
    setSelectedExpiry: (newValue: string | null) => void;
  }
  