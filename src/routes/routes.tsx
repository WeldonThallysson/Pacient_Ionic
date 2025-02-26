import { IonRouterOutlet, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import { Tabs } from "../components/Tabs";
import { TabsOptions } from "../constants/mocks/Tabs";
import { Paths } from "../interfaces/enum.paths";

import Home from "../pages/Home/Home";
import TrackingList from "../pages/List/TrackingList";
import DetailsPacient from "../pages/DetailsPacient/DetailsPacient";

const Routes = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path={Paths.Home} component={Home} />
          <Route exact path={Paths.TrackingList} component={TrackingList} />
          <Route exact path={Paths.DetailsPacient} component={DetailsPacient} />

          <Route exact path="/">
            <Redirect to={Paths.Home} />
          </Route>
        </IonRouterOutlet>

        <Tabs optionsTabs={TabsOptions} />
      </IonTabs>
    </IonReactRouter>
  );
};

export default Routes;
