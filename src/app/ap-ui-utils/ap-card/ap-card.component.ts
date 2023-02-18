import { Component, Input, OnInit, TemplateRef } from "@angular/core";

@Component({
  selector: "ap-card",
  templateUrl: "./ap-card.component.html",
  styleUrls: ["./ap-card.component.scss"]
})
export class ApCardComponent implements OnInit {

  @Input()
  template: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
