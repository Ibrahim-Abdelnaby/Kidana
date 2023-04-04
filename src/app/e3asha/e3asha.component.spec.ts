import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E3ashaComponent } from './e3asha.component';

describe('E3ashaComponent', () => {
  let component: E3ashaComponent;
  let fixture: ComponentFixture<E3ashaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E3ashaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E3ashaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
