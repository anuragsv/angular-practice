import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApFlexGridCardsComponent } from './ap-flex-grid-cards.component';

describe('ApFlexGridCardsComponent', () => {
  let component: ApFlexGridCardsComponent;
  let fixture: ComponentFixture<ApFlexGridCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApFlexGridCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApFlexGridCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
