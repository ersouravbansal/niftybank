import { create } from "zustand";
import { StoreState } from "../types/types"
const useStore = create<StoreState>((set) => ({
  contractData: null,
  contractKeys: [],
  optionChainData: null,
  selectedContractItem: "BANKNIFTY",
  selectedExpiry: "",
  setContractData: (newValue) => set({ contractData: newValue }),
  setContractKeys: (newValue) => set({ contractKeys: newValue }),
  setOptionChainData: (newValue) => set({ optionChainData: newValue }),
  setSelectedContractItem: (newValue) =>
    set({ selectedContractItem: newValue }),
  setSelectedExpiry: (newValue) => set({ selectedExpiry: newValue }),
}));
export default useStore;
