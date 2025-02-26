import {
  IonButton,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import { IonSearchbar } from "@ionic/react";
import { useActionsUsers } from "../../hooks/useActionsUsers/useActionsUsers";
import { useEffect, useState } from "react";
import { ResponseGetAllUsers } from "../../interfaces/interface.details.users";
import { searchCircleOutline } from "ionicons/icons";
import { theme } from "../../global/theme";
import { useAccompanyingPatients } from "../../hooks/useAccompanyingPatients/useAccompanyingPatients";

const Home = () => {
  const { users, handleGetAllUsers } = useActionsUsers();
  const [search, setSearch] = useState<string | null>(null);
  const [filteredUsers, setFilteredUsers] =
    useState<ResponseGetAllUsers | null>(users);

  const {
    accompanyingPatients,
    handleAddAccompanyingPatients,
    handleRemoveAccompanyingPatients,
  } = useAccompanyingPatients();

  const history = useHistory();

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users?.filter((user) =>
        `${user.name.firstname} ${user.name.lastname}`
          .toLowerCase()
          .includes(search?.toLowerCase() ?? "")
      ) || []
    );
  }, [search, users]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kompa Saúde</IonTitle>
        </IonToolbar>

        <IonToolbar>
          <IonSearchbar
            value={search}
            onIonInput={(e) => setSearch(e.detail.value!)}
            placeholder="Buscar"
          />
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {users === null ? (
          <div className="loading-container">
            <IonSpinner
              name="crescent"
              color="primary"
              style={{ width: "40px", height: "40px" }}
            />
            <IonLabel>
              <h2>Carregando Pacientes...</h2>
            </IonLabel>
          </div>
        ) : users.length === 0 ? (
          <div className="empty-container">
            <p>Nenhum paciente encontrado.</p>
          </div>
        ) : (
          <>
            {search && (
              <div className="container__searchlabel">
                <p>
                  <span className="result_Label">
                    {filteredUsers && filteredUsers?.length > 0
                      ? filteredUsers?.length
                      : "Nenhum"}{" "}
                    resultado
                    {filteredUsers && filteredUsers?.length > 1 ? "s" : ""}{" "}
                    encontrado
                    {filteredUsers && filteredUsers?.length > 1 ? "s" : ""}{" "}
                  </span>
                </p>
              </div>
            )}

            <IonList>
              {filteredUsers?.map((item, index) => (
                <IonItem key={index}>
                  <IonLabel>
                    <h2>
                      {item.name.firstname} {item.name.lastname}
                    </h2>
                    <p> {item.email}</p>
                    <p> {item.phone}</p>
                  </IonLabel>

                  <IonButton
                    fill="clear"
                    onClick={() => history.push(`/detailspacient/${item.id}`)}
                  >
                    <IonIcon
                      style={{
                        fontSize: 25,
                        color: theme.colors.grayLight,
                      }}
                      icon={searchCircleOutline}
                    />
                  </IonButton>
                  {!accompanyingPatients.some(
                    (patient) => patient.id === item.id
                  ) ? (
                    <IonButton
                      style={{
                        padding: 0,
                        margin: 0,
                      }}
                      fill="clear"
                      onClick={() => {
                        handleAddAccompanyingPatients(item);
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
                    <IonButton
                      style={{
                        padding: 0,
                      }}
                      fill="clear"
                      onClick={() => {
                        handleRemoveAccompanyingPatients(item.id);
                      }}
                    >
                      <IonChip
                        style={{
                          backgroundColor: theme.colors.greenSea,
                          color: theme.colors.white,
                          fontSize: 12,
                        }}
                      >
                        <IonLabel>Acompanhando</IonLabel>
                      </IonChip>
                    </IonButton>
                  )}
                </IonItem>
              ))}
            </IonList>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
