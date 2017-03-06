
//Imports
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PageNotFoundComponent} from "./shared/404/404.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";

//Routes
const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

//Constants
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const routedComponents = [WelcomeComponent, PageNotFoundComponent];
