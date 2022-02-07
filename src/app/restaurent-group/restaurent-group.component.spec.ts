import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentGroupComponent } from './restaurent-group.component';

describe('RestaurentGroupComponent', () => {
  let component: RestaurentGroupComponent;
  let fixture: ComponentFixture<RestaurentGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurentGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
