import { IonApp, IonToast, setupIonicReact } from "@ionic/react";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.system.css";

import "./theme/variables.css";
import Routes from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useToastStore } from "./store/toastMessage";
import { useAccompanyingPatients } from "./hooks/useAccompanyingPatients/useAccompanyingPatients";
import { useEffect } from "react";

setupIonicReact();
const queryClient = new QueryClient();
const App: React.FC = () => {
  const { dataToast, handleShowToast, handleToastMessage } = useToastStore();
  const { handleGetLastedAccompanyingPatients } = useAccompanyingPatients();

  useEffect(() => {
    handleGetLastedAccompanyingPatients()
  }, [])
 
  return (
    <IonApp>
      <QueryClientProvider client={queryClient}>
        <Routes />
        <IonToast
          isOpen={dataToast.showToast !== null ? dataToast.showToast : false}
          onDidDismiss={() => {
            handleShowToast(null);
            handleToastMessage(null);
          }}
          position="top"
          message={dataToast.toastMessage ? dataToast.toastMessage : ""}
          duration={3000}
          color={dataToast.colorToast ? dataToast.colorToast : "danger"}
        />
      </QueryClientProvider>
    </IonApp>
  );
};

export default App;
