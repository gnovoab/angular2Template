import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

//Components
import {AppComponent} from "./components/app.component";
import {routing, routedComponents} from "./app.routing";

//Shared components
import {AuthGuard} from "./shared/guard/auth.guard";
import {AlertService} from "./shared/service/alert.service";
import {AuthenticationService} from "./shared/service/authentication.service";
import {UserService} from "./shared/service/user.service";



@NgModule({

  imports:      [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
  ],
  declarations: [
      AppComponent,
      routedComponents
  ],

  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
