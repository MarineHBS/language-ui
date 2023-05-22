import { Route } from '@angular/router';
import {LoginComponent} from "./containers/login/login.component";

export const authRoutes: Route[] = [{
  title: 'Dictionary',
  path: 'dictionary',
  component: LoginComponent
}, {
  title: 'Test',
  path: 'test',
  component: LoginComponent
}, {
  path: 'login', component: LoginComponent
}];
