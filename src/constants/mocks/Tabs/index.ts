import { home, list } from "ionicons/icons";
import { Paths } from "../../../interfaces/enum.paths";
 
export const TabsOptions = [
  {
    name: "home", // <- Nome precisa bater com o "tab" do IonTabButton
    path: Paths.Home, // "/home"
    icon: home,
    label: "Início",
  },
  {
    name: "tracking", // <- Nome precisa bater com o "tab" do IonTabButton
    path: Paths.TrackingList, // "/tracking"
    icon: list,
    label: "Acompanhando",
  },
];
