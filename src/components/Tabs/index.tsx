import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { IOptionsTabs } from "../../interfaces/interfaces.tabs";

export const Tabs = ({ optionsTabs }: IOptionsTabs) => {
  return (
    <IonTabBar slot="bottom">
      {optionsTabs.map((item, index) => (
        <IonTabButton key={index} tab={item.name} href={item.path}>
          <IonIcon icon={item.icon} />
          <IonLabel>{item.label}</IonLabel>
        </IonTabButton>
      ))}
    </IonTabBar>
  );
};
