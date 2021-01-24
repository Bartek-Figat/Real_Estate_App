import { Route, Switch } from 'react-router-dom';
import { Navigation } from './NavigationPaths';

import { Home } from '../../views/home/Home';
import { LoginView } from '../../views/auth/LoginView/LoginView';
import { RegisterView } from '../../views/auth/RegisterView/RegisterView';
import { AddPropertyView } from '../../views/property/AddPropertyView/AddPropertyView';

export const Routing = () => (
  <Switch>
    <Route path={Navigation.HOME} exact>
      <Home />
    </Route>
    <Route path={Navigation.LOGIN} exact>
      <LoginView />
    </Route>
    <Route path={Navigation.REGISTER} exact>
      <RegisterView />
    </Route>
    <Route path={Navigation.ADD_PROPERTY} exact>
      <AddPropertyView />
    </Route>
  </Switch>
);
