import {create} from "zustand"


export const useBasketIsOpenStore = create(
    set => ({
    isOpen:false,
    setIsOpen:  (isOpen) => {set({isOpen})}
}))