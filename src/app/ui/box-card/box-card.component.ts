import { Component, Input, OnInit, TemplateRef } from "@angular/core";

@Component({
  selector: "box-card",
  templateUrl: "./box-card.component.html",
  styleUrls: ["./box-card.component.scss"]
})
export class BoxCardComponent implements OnInit {

  @Input()
  template: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void { }

}
