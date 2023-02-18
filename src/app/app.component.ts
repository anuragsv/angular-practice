import { Component } from "@angular/core";
import { ChildrenOutletContexts } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  title = "angular-practice";

  
  constructor(private contexts: ChildrenOutletContexts) { }

}
