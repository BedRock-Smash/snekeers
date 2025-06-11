import { create } from "zustand";


export const useSearchStore = create((set) => ({
    activeSearch: "",
    setActiveSearch: (activeSearch) => { set({ activeSearch }) }

}))