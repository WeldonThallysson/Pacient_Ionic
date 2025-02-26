import { create } from "zustand";
import { IUserData } from "../interfaces/interface.details.users";

interface IUseAccompanyingPatientsStore {
    accompanyingPatients: IUserData[] 
    handleAccompanyingPatients: (item: IUserData[]) => void;
 
}

export const useAccompanyingPatientsStore = create<IUseAccompanyingPatientsStore>((set) => ({
    accompanyingPatients: [],
    handleAccompanyingPatients: (item) => set({accompanyingPatients: item}),
}))