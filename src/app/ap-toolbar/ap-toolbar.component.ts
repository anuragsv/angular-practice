import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ap-toolbar",
  templateUrl: "./ap-toolbar.component.html",
  styleUrls: ["./ap-toolbar.component.scss"]
})
export class ApToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

}
