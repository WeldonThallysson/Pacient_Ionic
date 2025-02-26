import { create } from "zustand";

interface IToastStore {
  dataToast: {
    showToast: boolean | null;
    toastMessage: string | null;
    colorToast: string | null;
  };
  handleShowToast: (state: boolean | null) => void;
  handleToastMessage: (message: string | null) => void;
  handleColorToast: (color: string | null) => void;
}

export const useToastStore = create<IToastStore>((set) => ({
  dataToast: {
    showToast: null,
    toastMessage: null,
    colorToast: null,
  },
  handleShowToast: (state) =>
    set((statePrev) => ({
      dataToast: {
        ...statePrev.dataToast, // Preserva os valores anteriores
        showToast: state,
      },
    })),

  handleToastMessage: (message) =>
    set((statePrev) => ({
      dataToast: {
        ...statePrev.dataToast, // Preserva os valores anteriores
        toastMessage: message,
      },
    })),

  handleColorToast: (color) =>
    set((statePrev) => ({
      dataToast: {
        ...statePrev.dataToast, // Preserva os valores anteriores
        colorToast: color,
      },
    })),
}));
