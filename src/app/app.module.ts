import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AngularMaterialModule } from "./angular-material.module"
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ApCardComponent } from './ap-ui-utils/ap-card/ap-card.component';
import { ApToolbarComponent } from './ap-features/ap-toolbar/ap-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ApCardComponent,
    ApToolbarComponent
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
