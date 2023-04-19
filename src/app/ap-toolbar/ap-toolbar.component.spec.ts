import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApToolbarComponent } from './ap-toolbar.component';

describe('ApToolbarComponent', () => {
  let component: ApToolbarComponent;
  let fixture: ComponentFixture<ApToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
