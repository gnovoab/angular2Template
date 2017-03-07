
//Imports
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./shared/guard/auth.guard";
import {RegisterComponent} from "./components/register/register.component";

//Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', redirectTo: '' }
];

//Constants
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const routedComponents = [LoginComponent, HomeComponent, RegisterComponent];
