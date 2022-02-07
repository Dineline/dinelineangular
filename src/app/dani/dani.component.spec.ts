import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaniComponent } from './dani.component';

describe('DaniComponent', () => {
  let component: DaniComponent;
  let fixture: ComponentFixture<DaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
