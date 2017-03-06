import { NgModule }      from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./components/app.component";
import {routing, routedComponents} from "./app.routing";

@NgModule({

  imports:      [
      BrowserModule
      ,FormsModule
      ,HttpModule
      ,routing
  ],
  declarations: [
      AppComponent
      ,routedComponents
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
