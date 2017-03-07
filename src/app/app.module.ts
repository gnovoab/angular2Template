import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

//Components
import {AppComponent} from "./components/app.component";
import {routing, routedComponents} from "./app.routing";

//Directives
import {AlertComponent} from "./shared/directives/index";

//Shared components
import {AuthGuard} from "./shared/guard/index";
import {AlertService, AuthenticationService, UserService} from "./shared/service/index";

// used to create fake backend
import { fakeBackendProvider } from './shared/helper/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

@NgModule({

  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    routedComponents,
    AlertComponent
  ],

  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
