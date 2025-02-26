import { useMutation } from "@tanstack/react-query";
import { api } from "../constants/config/axios";
import { IParamsDetailsUsers, ResponseGetAllUsers, IResponseGetDetailsUsers } from "../interfaces/interface.details.users";

export const getAllUsers = async () => {
  return await api.get<ResponseGetAllUsers>("/users");
};

export const getDetailsUsers = async (args: IParamsDetailsUsers) => {
  const { id } = args;
  return await api.get<IResponseGetDetailsUsers>(`/users/${id}`);
};

export const useGetAllUsers = () =>
  useMutation({
    mutationFn: () => getAllUsers().then((res) => res.data),
  });

export const useGetDetailsUsers = () =>
  useMutation({
    mutationFn: (args: IParamsDetailsUsers) =>
      getDetailsUsers(args).then((res) => res.data),
  });
