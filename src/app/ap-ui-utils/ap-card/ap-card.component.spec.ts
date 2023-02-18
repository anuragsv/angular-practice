import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ApCardComponent } from "./ap-card.component";

describe("ApCardComponent", () => {
  let component: ApCardComponent;
  let fixture: ComponentFixture<ApCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
