import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlastsComponent } from './blasts.component';

describe('BlastsComponent', () => {
  let component: BlastsComponent;
  let fixture: ComponentFixture<BlastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
