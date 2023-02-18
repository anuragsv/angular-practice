import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AngularMaterialModule } from "./angular-material.module"
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { BoxCardComponent } from './ui/box-card/box-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    BoxCardComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
