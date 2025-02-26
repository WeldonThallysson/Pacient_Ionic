import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./TrackingList.css";
import { useAccompanyingPatients } from "../../hooks/useAccompanyingPatients/useAccompanyingPatients";
import { searchCircleOutline } from "ionicons/icons";
import { theme } from "../../global/theme";
import { useHistory } from "react-router";

const TrackingList = () => {
  const history = useHistory()

  const {
    accompanyingPatients,
    handleRemoveAccompanyingPatients,
    handleAddAccompanyingPatients,
  } = useAccompanyingPatients();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" text={"Voltar"} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="container_geral">
          <h2 className="title_patient">Em Acompanhamento</h2>
        </div>

        <IonList>
          {accompanyingPatients.map((item, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h2>
                  {item.name.firstname} {item.name.lastname}
                </h2>
                <p>Em Acompanhamento</p>
              </IonLabel>

              <IonButton 
               fill="clear"
               onClick={() => {
                history.push(`/detailspacient/${item.id}`)
              }}>
                <IonIcon
                  slot="icon-only"
                  style={{
                    fontSize: 25,
                    color: theme.colors.grayLight,
                  }}
                  icon={searchCircleOutline}
                />
              </IonButton>

              <IonButton
                style={{
                  padding: 0,
                }}
                fill="clear"
                onClick={() => {
                  handleRemoveAccompanyingPatients(item.id);
                }} // adicionar função para adicionar ao acompanhamento
              >
                <IonChip
                  style={{
                    backgroundColor: theme.colors.red,
                    color: theme.colors.white,
                  }}
                >
                  <IonLabel>Remover</IonLabel>
                </IonChip>
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TrackingList;
