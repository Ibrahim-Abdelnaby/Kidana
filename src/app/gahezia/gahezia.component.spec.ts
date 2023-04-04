import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaheziaComponent } from './gahezia.component';

describe('GaheziaComponent', () => {
  let component: GaheziaComponent;
  let fixture: ComponentFixture<GaheziaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaheziaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaheziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
