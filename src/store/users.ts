import { create } from "zustand";
import {
    ResponseGetAllUsers,
  IResponseGetDetailsUsers,
} from "../interfaces/interface.details.users";

interface IUseUsersStore {
  users: ResponseGetAllUsers | null;
  detailsUser: IResponseGetDetailsUsers | null;
  handleDetailsUser: (data: IResponseGetDetailsUsers) => void;
  handleUsers: (data: ResponseGetAllUsers) => void;
}

export const useUserStore = create<IUseUsersStore>((set) => ({
  users: null,
  detailsUser: null,
  handleDetailsUser: (data) => set({ detailsUser: data }),
  handleUsers: (data) => set({ users: data }),
}));
