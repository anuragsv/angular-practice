import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AngularMaterialModule } from "./angular-material.module"
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ApCardComponent } from './ap-ui-utils/ap-card/ap-card.component';
import { ApToolbarComponent } from './ap-features/ap-toolbar/ap-toolbar.component';
import { ApHomeComponent } from './ap-ui/ap-home/ap-home.component';
import { ApSiteSettingsComponent } from './ap-ui/ap-site-settings/ap-site-settings.component';
import { Router } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ApCardComponent,
    ApToolbarComponent,
    ApHomeComponent,
    ApSiteSettingsComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {}

}
