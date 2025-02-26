import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./DetailsPacient.css";
import { useParams } from "react-router";
import { useActionsUsers } from "../../hooks/useActionsUsers/useActionsUsers";
import { useEffect } from "react";
import { searchCircleOutline } from "ionicons/icons";
import { theme } from "../../global/theme";
import { useAccompanyingPatients } from "../../hooks/useAccompanyingPatients/useAccompanyingPatients";

const DetailsPacient = () => {
  const { detailsUser, handleGetDetailsUsers } = useActionsUsers();
  const { id } = useParams<{ id: string }>();
  const {
    accompanyingPatients,
    handleAddAccompanyingPatients,
    handleRemoveAccompanyingPatients,
  } = useAccompanyingPatients();

  useEffect(() => {
    id && handleGetDetailsUsers({ id });
  }, [id]);

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
        <div className="container_info">
          <div className="container_title">
            <h2 className="title">Detalhes do Paciente</h2>
            <IonIcon
              slot="icon-only"
              style={{
                fontSize: 30,
                color: theme.colors.grayLight,
              }}
              icon={searchCircleOutline}
            />
          </div>

          <div className="info-group">
            <IonLabel className="label">Nome</IonLabel>
            <p>
              {detailsUser?.name.firstname} {detailsUser?.name.lastname}
            </p>
          </div>
          <div className="info-group">
            <IonLabel className="label">Email</IonLabel>
            <p> {detailsUser?.email} </p>
          </div>

          <div className="info-group">
            <IonLabel className="label">Endereço</IonLabel>
            <p>Rua: {detailsUser?.address.street} </p>
            <p>CEP: {detailsUser?.address.zipcode} </p>
            <p>Cidade: {detailsUser?.address.city} </p>
            <p>Número: {detailsUser?.address.number} </p>
          </div>

          <div className="info-group">
            <IonLabel className="label">Nome de Usuário</IonLabel>
            <p>{detailsUser?.username} </p>
          </div>

          {/*tag de acompanhamento */}

          <div className="tracking-tag">
            {detailsUser &&
            !accompanyingPatients.some(
              (patient) => patient.id === detailsUser?.id
            ) ? (
              <IonButton
                style={{
                  padding: 0,
                  margin: 0,
                }}
                fill="clear"
                onClick={() => {
                  handleAddAccompanyingPatients(detailsUser);
                }}
              >
                <IonChip
                  color={"primary"}
                  style={{
                    fontSize: 12,
                  }}
                >
                  <IonLabel>Acompanhar</IonLabel>
                </IonChip>
              </IonButton>
            ) : (
              <>
                <IonButton
                  style={{
                    padding: 0,
                    margin: 0,
                  }}
                  fill="clear"
                >
                  <IonChip
                    style={{
                      backgroundColor: theme.colors.greenSea,
                      color: theme.colors.white,
                      fontSize: 12,
                    }}
                  >
                    <IonLabel>Em Acompanhamento</IonLabel>
                  </IonChip>
                </IonButton>

                <IonButton
                  onClick={() => {
                    detailsUser &&
                      handleRemoveAccompanyingPatients(detailsUser.id);
                  }}
                  fill="clear"
                  color="danger"
                >
                  <IonChip
                    style={{
                      backgroundColor: theme.colors.red,
                      color: theme.colors.white,
                      fontSize: 13,
                    }}
                  >
                    <IonLabel>Remover</IonLabel>
                  </IonChip>
                </IonButton>
              </>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DetailsPacient;
