import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApSiteSettingsComponent } from './ap-site-settings.component';

describe('ApSiteSettingsComponent', () => {
  let component: ApSiteSettingsComponent;
  let fixture: ComponentFixture<ApSiteSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApSiteSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApSiteSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
