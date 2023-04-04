import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingQualityComponent } from './housing-quality.component';

describe('HousingQualityComponent', () => {
  let component: HousingQualityComponent;
  let fixture: ComponentFixture<HousingQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousingQualityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
