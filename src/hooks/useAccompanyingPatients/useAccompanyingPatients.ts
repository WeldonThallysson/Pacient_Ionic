import { IUserData } from "../../interfaces/interface.details.users";
import { useAccompanyingPatientsStore } from "../../store/accompanyingPatients";
import { useToastStore } from "../../store/toastMessage";
import { Preferences } from "@capacitor/preferences";
export const useAccompanyingPatients = () => {
  const { accompanyingPatients, handleAccompanyingPatients } =
    useAccompanyingPatientsStore();
  const { handleShowToast, handleToastMessage, handleColorToast } =
    useToastStore();

  const handleAddAccompanyingPatients = async (item: IUserData) => {
    // Criação de uma nova lista de pacientes incluindo o item
    const updatedPatients = [...accompanyingPatients, item];

    await Preferences.set({
      key: "accompanyingPatient",
      value: JSON.stringify(updatedPatients),
    });
    // Atualiza o estado global
    handleAccompanyingPatients(updatedPatients);

    // Exibe o Toast com mensagem de sucesso
    handleShowToast(true);
    handleColorToast("success");
    handleToastMessage("Paciente adicionado ao acompanhamento");
  };

  const handleRemoveAccompanyingPatients = async (idPatient: number) => {
    // Remove o paciente com base no id
    const updatedPatients = accompanyingPatients.filter(
      (item) => item.id !== idPatient
    );

    await Preferences.set({
      key: "accompanyingPatient",
      value: JSON.stringify(updatedPatients),
    });
    // Atualiza o estado global
    handleAccompanyingPatients(updatedPatients);

    // Exibe o Toast com mensagem de sucesso
    handleShowToast(true);
    handleColorToast("success");
    handleToastMessage("Paciente removido do acompanhamento");
  };

  const handleGetLastedAccompanyingPatients = async () => {
    const { value } = await Preferences.get({ key: "accompanyingPatient" });
    const storagePatients = JSON.parse(value!)

    if(storagePatients.length > 0){
        handleAccompanyingPatients(storagePatients);
    }
  
    return;

  };
  return {
    accompanyingPatients,
    handleGetLastedAccompanyingPatients,
    handleAddAccompanyingPatients,
    handleRemoveAccompanyingPatients,
  };
};
