import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Router } from "@angular/router";

import { AgGridModule } from 'ag-grid-angular';

import { AngularMaterialModule } from "./angular-material.module"
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ApToolbarComponent } from "./ap-toolbar/ap-toolbar.component";

@NgModule({
  declarations: [
    AppComponent,
    ApToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {}

}
