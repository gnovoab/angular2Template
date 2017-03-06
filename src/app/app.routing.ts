
//Imports
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./shared/guard/auth.guard";

//Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', redirectTo: '' }
];

//Constants
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const routedComponents = [LoginComponent, WelcomeComponent, HomeComponent];
